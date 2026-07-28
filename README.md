# JVG Trámites Migratorios — Website

Corporate landing for **JVG Trámites Migratorios**, an agency specializing in migration procedures.

---

## Tech stack

| Layer | Stack |
|-------|-------|
| Framework | Next.js 16 (App Router) |
| UI | React 19 + Tailwind CSS v4 |
| Language | TypeScript |
| Package manager | pnpm |

---

## Repository structure

```
jvg/
├── frontend/          # Next.js application
│   ├── app/           # Routes (App Router) — thin files
│   ├── screens/       # Main screen components
│   ├── components/    # Reusable components
│   ├── data/          # Static data
│   ├── hooks/         # Custom hooks
│   ├── lib/           # Utilities and helpers
│   ├── services/      # Service layer (data access)
│   └── types/         # TypeScript types and interfaces
├── AGENTS.md          # Architecture guidelines (CLAUDE.md → symlink)
└── DEVELOPER.md       # Repository / deployment setup guide
```

---

## Quick start

```bash
cd frontend
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).
