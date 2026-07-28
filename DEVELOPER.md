# Client Repository Setup Guide

Everything a developer needs to connect a Next.js repository to the central
deployment platform and manage its lifecycle.

---

## Table of Contents

1. [How it works](#how-it-works)
2. [Repository structure](#repository-structure)
3. [Next.js configuration](#nextjs-configuration)
4. [package.json requirements](#packagejson-requirements)
5. [One-time GitHub setup](#one-time-github-setup)
6. [Install the deployment workflow](#install-the-deployment-workflow)
7. [Platform operations](#platform-operations)
8. [Contact Form API](#contact-form-api)
9. [Local development](#local-development)
10. [Troubleshooting](#troubleshooting)

---

## How it works

The client repository **stores no cloud credentials**. On every merge to `main`
it sends a single signal to the central infrastructure repository, which does
all the heavy lifting.

```
Client repo                           saas-core-infrastructure
─────────────────────────────────     ─────────────────────────────────────────
 1. Developer merges PR to main
 2. notify-infra.yml fires
 3. Sends "deploy-website" event ───▶ 4. update-tenant.yml receives the event
                                       5. Clones this repository
                                       6. npm install / npm ci
                                       7. npm run build  →  out/
                                       8. aws s3 sync out/ → private bucket
                                       9. Purges delivery network cache
                                          └─ Site is live ✓
```

---

## Repository structure

The Next.js project can live at the repo root **or** inside a subdirectory
(e.g. `frontend/`). The `build_dir` field in the dispatch payload tells the
pipeline where to find `package.json`.

**Root layout** (`build_dir` omitted or `"."`)

```
my-client-website/
├── .github/
│   └── workflows/
│       └── notify-infra.yml      ← copied from templates/client-workflow/
├── public/
├── src/
│   └── app/
├── next.config.mjs               ← must include output: 'export'
├── package.json
├── package-lock.json             ← commit this for reproducible builds
└── tsconfig.json
```

**Subdirectory layout** (`build_dir: "frontend"`)

```
my-client-website/
├── .github/
│   └── workflows/
│       └── notify-infra.yml
└── frontend/                     ← build_dir points here
    ├── src/
    ├── next.config.mjs
    ├── package.json
    └── package-lock.json
```

> **`package-lock.json` should be committed.** When it is present, the pipeline
> runs `npm ci` (fast, reproducible). When it is absent, it falls back to
> `npm install` and prints a reminder. Generate it locally with:
> ```bash
> cd frontend   # or repo root if not using a subdirectory
> npm install
> git add package-lock.json
> git commit -m "chore: commit package-lock.json"
> ```

---

## Next.js configuration

The pipeline requires a fully static export — `npm run build` must produce
an `out/` directory. Both `.js` and `.mjs` config files are supported.

```js
// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required: produce a static export in out/
  output: "export",

  // Required for static export: disables the built-in image optimisation
  // server, which cannot run in a static context.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

> **App Router:** Dynamic routes are supported as long as `generateStaticParams`
> is defined for every dynamic segment. API routes and middleware are **not**
> compatible with static export mode.

---

## package.json requirements

```json
{
  "scripts": {
    "dev":   "next dev",
    "build": "next build",
    "start": "next start",
    "lint":  "next lint"
  }
}
```

`next build` with `output: 'export'` writes the static site to `out/`
automatically — no separate `next export` command is needed.

### Minimum recommended versions

| Package | Minimum version |
|---------|----------------|
| `next` | `14.0.0` |
| `react` | `18.0.0` |
| `react-dom` | `18.0.0` |
| Node.js (CI runtime) | `22.x` |

---

## One-time GitHub setup

### 1. Repository secret

**Settings → Secrets and variables → Actions → New repository secret**

| Name | Value |
|------|-------|
| `INFRA_DISPATCH_TOKEN` | A Personal Access Token (PAT) with write access to `saas-core-infrastructure`. |

PAT requirements:
- **Classic PAT** scope: `repo`
- **Fine-grained PAT** permission on `saas-core-infrastructure`: Contents → `Read and write`

> Never hardcode this token in a workflow file. Store it only as a secret.

### 2. Repository variable

**Settings → Secrets and variables → Actions → Variables → New repository variable**

| Name | Value |
|------|-------|
| `TENANT_SLUG` | The `identifier` value used in the CDK stack for this client, e.g. `taqueria-pueblo`. |

> This must exactly match the `identifier=` parameter in `infra/app.py` of
> `saas-core-infrastructure`. A mismatch causes the deployment to fail when
> looking up the bucket and delivery network distribution.

---

## Install the deployment workflow

1. Copy `notify-infra.yml` from this directory into the client repository:
   ```
   .github/workflows/notify-infra.yml
   ```

2. Open the file and update the two values marked below:

   ```yaml
   repository: YOUR_ORG/saas-core-infrastructure   # ← real org/repo path

   client-payload: |
     {
       "tenant":    "${{ vars.TENANT_SLUG }}",
       "repo":      "${{ github.repository }}",
       "build_dir": "frontend"                      # ← "." if Next.js is at root
     }
   ```

3. Register the client in `saas-core-infrastructure/infra/app.py`:

   ```python
   WebsiteStack(
       app, "ClientMyBusiness",
       identifier="my-business",                    # matches TENANT_SLUG
       domain=None,                                 # or "mybusiness.com" for production
       github_repo="my-org/my-business-repo",
       oidc_provider=shared.github_oidc_provider,
       env=website_env,
   )
   ```

4. Deploy the new stack from `saas-core-infrastructure`:
   ```bash
   cdk deploy ClientMyBusiness
   ```

5. Commit and push the workflow file to the client repository. The next
   merge to `main` will trigger an automatic deployment.

---

## Platform operations

All operations on a live client are run from **`saas-core-infrastructure` →
Actions**. The client repository never touches the cloud directly.

| Workflow | Trigger | Input | Effect |
|----------|---------|-------|--------|
| `update-tenant.yml` | `repository_dispatch` (automatic) | `tenant`, `repo`, `build_dir` | Builds and publishes the site |
| `suspend-tenant.yml` | Manual | tenant identifier | Empties the bucket + purges cache. Site goes offline. Infrastructure stays intact. |
| `destroy-tenant.yml` | Manual | stack name | Destroys all cloud resources for the client. Irreversible. |

### Bring a suspended site back online

Trigger `update-tenant.yml` manually from Actions with the payload:
```json
{
  "tenant":    "my-business",
  "repo":      "my-org/my-business-repo",
  "build_dir": "frontend"
}
```

---

## Contact Form API

The platform exposes a managed contact form endpoint on behalf of each tenant.
When a visitor submits the form, the API validates the data and delivers a
formatted email directly to the client's registered inbox — no backend code
required on your side.

### Endpoint

```
POST https://<api-domain>/contact
Content-Type: application/json
```

The exact URL is provided by the infrastructure team after the tenant stack is
deployed.

---

### Request fields

| Field        | Required | Type            | Constraints                                                      |
|--------------|----------|-----------------|------------------------------------------------------------------|
| `tenant_id`  | ✅ yes   | string          | Slug assigned to this client (same as `TENANT_SLUG`).            |
| `name`       | ✅ yes   | string          | Full name of the person submitting the form.                     |
| `email`      | ✅ yes   | string          | Visitor's email address. Must match `user@domain.tld` format.   |
| `message`    | ✅ yes   | string          | Body of the message. Maximum **2 000 characters**.               |
| `phone`      | ❌ no    | string          | Contact number. Digits, spaces, `+`, `-`, `(`, `)`. 7–20 chars. |
| `extra_info` | ❌ no    | array (see below) | Up to **10** additional labeled fields.                        |
| `website`    | ❌ no    | string          | Honeypot — **always send as empty string or omit entirely**. Any non-empty value silently discards the submission. |

---

### `extra_info` — additional fields

Use this when you need to collect data beyond the standard fields (e.g. country,
company, preferred schedule). Each item carries a label per supported language;
the one matching the tenant's configured language is shown in the email.

```json
"extra_info": [
  {"labels": {"es_MX": "País",   "en_US": "Country"}, "value": "México"},
  {"labels": {"es_MX": "Ciudad", "en_US": "City"},    "value": "CDMX"}
]
```

Rules:
- Maximum **10 items**.
- `labels` must be a `{ language: string }` map — at least one entry required.
- `value` must be a plain string.
- If the tenant's language is not listed in `labels`, the first available label
  is used as fallback.

---

### Responses

| Status | `message`                                        | Meaning                                          |
|--------|--------------------------------------------------|--------------------------------------------------|
| `200`  | `"Message sent"`                                 | Email delivered successfully.                    |
| `200`  | `"OK"`                                           | Honeypot triggered — submission silently dropped.|
| `400`  | `"Invalid request body"`                         | Body is not valid JSON.                          |
| `400`  | `"Missing required fields"`                      | One or more required fields are absent or blank. |
| `400`  | `"Invalid email address"`                        | `email` does not match the expected format.      |
| `400`  | `"Invalid phone number"`                         | `phone` contains disallowed characters or wrong length. |
| `400`  | `"Invalid extra_info"`                           | `extra_info` does not match the required schema. |
| `400`  | `"Message too long"`                             | `message` exceeds 2 000 characters.              |
| `404`  | `"Tenant not found"`                             | `tenant_id` is not registered in the system.     |
| `500`  | `"Failed to send message, please try again"`     | Internal error — safe to show a retry prompt.    |

---

### Example — minimal

```json
{
  "tenant_id": "taqueria-pueblo",
  "name":      "Ana García",
  "email":     "ana@example.com",
  "message":   "Hola, quisiera reservar una mesa para el viernes.",
  "website":   ""
}
```

### Example — full

```json
{
  "tenant_id":  "taqueria-pueblo",
  "name":       "Ana García",
  "email":      "ana@example.com",
  "phone":      "+52 55 1234 5678",
  "message":    "Hola, quisiera reservar una mesa para 4 personas el viernes por la noche.",
  "extra_info": [
    {"labels": {"es_MX": "País",   "en_US": "Country"}, "value": "México"},
    {"labels": {"es_MX": "Ciudad", "en_US": "City"},    "value": "CDMX"}
  ],
  "website": ""
}
```

### Example — Next.js / React integration

```ts
async function submitContact(data: ContactFormData) {
  const res = await fetch("https://<api-domain>/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      tenant_id: "taqueria-pueblo",
      name:      data.name,
      email:     data.email,
      phone:     data.phone ?? "",
      message:   data.message,
      website:   "",            // honeypot — always empty
    }),
  });

  const body = await res.json();

  if (!res.ok) {
    throw new Error(body.message ?? "Unknown error");
  }

  return body; // { message: "Message sent" }
}
```

---

## Local development

```bash
cd frontend          # or repo root if not using a subdirectory

# Install dependencies (also generates package-lock.json if missing)
npm install

# Start the development server with hot reload
npm run dev

# Verify the static export builds cleanly before pushing
npm run build

# Preview the static export locally
npx serve out
```

> Always run `npm run build` locally before opening a PR. This catches
> static export issues (missing `generateStaticParams`, unsupported features)
> before they fail in CI.

---

## Troubleshooting

**"Build output directory 'out/' was not found"**  
`next.config.mjs` is missing `output: "export"`. Add it as shown in the
[Next.js configuration](#nextjs-configuration) section.

**"Payload validated" passes but files never appear in the bucket**  
Check that `build_dir` in the dispatch payload matches the actual subdirectory
containing `package.json`. A mismatch causes the build to fail silently or
produce output in the wrong path.

**Dispatch signal sent but no run appears in saas-core-infrastructure**  
- Verify `INFRA_DISPATCH_TOKEN` is set and the PAT has not expired.
- Confirm `repository:` in `notify-infra.yml` points to the correct path.
- Check the **Actions** tab of `saas-core-infrastructure` for a failed or
  queued `update-tenant.yml` run.

**"No delivery distribution found for tenant"**  
`TENANT_SLUG` does not match the `identifier=` in the CDK stack, or the
infrastructure stack for this client has not been deployed yet.  
Run `cdk deploy <StackId>` from `saas-core-infrastructure` first.

**Site shows stale content after a deployment**  
The cache purge propagates in ~60 seconds. If content is still stale after
a few minutes, check the `update-tenant.yml` run log to confirm the
invalidation step completed without errors.

**Site returns 403 after deployment**  
The bucket may have been emptied by `suspend-tenant.yml`. Re-trigger
`update-tenant.yml` manually to restore the files.