"use client";

import { useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import CountrySelect from "@/components/contacto/CountrySelect";
import { SERVICES } from "@/data/content";
import { SITE } from "@/lib/siteConfig";
import { cn } from "@/lib/cn";
import { contactService } from "@/services/contactService";

const TOTAL_STEPS = 4;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+\d][\d\s().-]{6,19}$/;

const MAX = {
  nombre: 80,
  email: 120,
  telefono: 25,
  detalle: 1000,
} as const;

const fieldCls =
  "w-full min-h-11 font-sans text-base text-ink bg-surface border border-border rounded-sm px-4 py-3 " +
  "transition-[border-color,box-shadow] duration-200 focus:outline-none focus:border-gold " +
  "focus:shadow-[0_0_0_3px_rgba(196,163,90,.25)]";

const SERVICE_OPTIONS = [
  ...SERVICES.map((s) => s.title),
  "Otro",
] as const;

interface FormState {
  nombre: string;
  email: string;
  telefono: string;
  pais: string;
  servicio: string;
  detalle: string;
  website: string;
  consent: boolean;
}

const EMPTY: FormState = {
  nombre: "",
  email: "",
  telefono: "",
  pais: "",
  servicio: "",
  detalle: "",
  website: "",
  consent: false,
};

type FieldKey = keyof FormState;
type Errors = Partial<Record<FieldKey, string>>;

function validateStep(step: number, d: FormState): Errors {
  const e: Errors = {};
  if (step === 0) {
    if (!d.nombre.trim()) e.nombre = "Indique su nombre completo.";
    if (!EMAIL_RE.test(d.email.trim()))
      e.email = "Introduzca un correo electrónico válido.";
    if (d.telefono.trim() && !PHONE_RE.test(d.telefono.trim()))
      e.telefono = "Revise el teléfono: solo números y +, -, ( ).";
  }
  if (step === 1 && !d.pais.trim())
    e.pais = "Indíquenos desde qué país escribe.";
  if (step === 2 && !d.servicio)
    e.servicio = "Elija el servicio que le interesa.";
  if (step === 3) {
    if (!d.detalle.trim())
      e.detalle = "Cuéntenos brevemente su caso o consulta.";
    if (!d.consent)
      e.consent = "Debe aceptar el aviso de privacidad para continuar.";
  }
  return e;
}

const STEP_LABELS = [
  "Sus datos",
  "Su ubicación",
  "El servicio",
  "Su mensaje",
] as const;

export default function ContactStepper() {
  const [cur, setCur] = useState(0);
  const [data, setData] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const formRef = useRef<HTMLFormElement>(null);

  function setField<K extends FieldKey>(key: K, value: FormState[K]) {
    setData((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  }

  function goNext() {
    const e = validateStep(cur, data);
    setErrors(e);
    if (Object.keys(e).length) return;
    setCur((c) => Math.min(c + 1, TOTAL_STEPS - 1));
  }

  function goBack() {
    setErrors({});
    setCur((c) => Math.max(c - 1, 0));
  }

  async function onSubmit(ev: FormEvent) {
    ev.preventDefault();
    const e = validateStep(cur, data);
    setErrors(e);
    if (Object.keys(e).length) return;
    if (data.website.trim()) return;

    setStatus("loading");
    const result = await contactService.submit({
      tenant_id: SITE.tenantId,
      name: data.nombre.trim(),
      email: data.email.trim(),
      phone: data.telefono.trim() || undefined,
      message: data.detalle.trim(),
      website: data.website,
      extra_info: [
        { labels: { es: "País" }, value: data.pais.trim() },
        { labels: { es: "Servicio" }, value: data.servicio },
      ],
    });

    setStatus(result.ok ? "success" : "error");
  }

  if (status === "success") {
    return (
      <div
        className="border border-border bg-surface p-8 text-center md:p-12"
        role="status"
        aria-live="polite"
      >
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
          Mensaje recibido
        </p>
        <h3 className="mt-3 font-serif text-2xl text-ink md:text-3xl">
          Gracias. Le contactaremos pronto.
        </h3>
        <p className="mx-auto mt-4 max-w-md text-muted">
          Hemos recibido su consulta. Nuestro equipo le responderá con claridad
          sobre los siguientes pasos.
        </p>
        <Button
          className="mt-8"
          variant="secondary"
          onClick={() => {
            setData(EMPTY);
            setCur(0);
            setStatus("idle");
          }}
        >
          Enviar otra consulta
        </Button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      className="border border-border bg-surface p-6 md:p-8"
      noValidate
    >
      <div className="mb-8">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm font-medium text-muted">
            Paso {cur + 1} de {TOTAL_STEPS}
          </p>
          <p className="text-sm font-semibold text-ink">{STEP_LABELS[cur]}</p>
        </div>
        <div
          className="mt-3 h-1 overflow-hidden bg-border"
          role="progressbar"
          aria-valuenow={cur + 1}
          aria-valuemin={1}
          aria-valuemax={TOTAL_STEPS}
          aria-label="Progreso del formulario"
        >
          <div
            className="h-full bg-gold transition-[width] duration-300 ease-[var(--ease-fluid)]"
            style={{ width: `${((cur + 1) / TOTAL_STEPS) * 100}%` }}
          />
        </div>
      </div>

      <div key={cur} className="animate-step-in motion-reduce:animate-none">
        {cur === 0 && (
          <fieldset className="space-y-5">
            <legend className="sr-only">Datos de contacto</legend>
            <p className="text-muted text-pretty">
              Empecemos por conocernos. Sus datos solo se usan para responderle.
            </p>
            <div>
              <label htmlFor="nombre" className="mb-1.5 block text-sm font-medium">
                Nombre completo <span className="text-destructive">*</span>
              </label>
              <input
                id="nombre"
                name="nombre"
                autoComplete="name"
                maxLength={MAX.nombre}
                value={data.nombre}
                onChange={(e) => setField("nombre", e.target.value)}
                className={fieldCls}
                aria-invalid={Boolean(errors.nombre)}
                aria-describedby={errors.nombre ? "err-nombre" : undefined}
              />
              {errors.nombre && (
                <p id="err-nombre" className="mt-1.5 text-sm text-destructive" role="alert">
                  {errors.nombre}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                Correo electrónico <span className="text-destructive">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                maxLength={MAX.email}
                value={data.email}
                onChange={(e) => setField("email", e.target.value)}
                className={fieldCls}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "err-email" : undefined}
              />
              {errors.email && (
                <p id="err-email" className="mt-1.5 text-sm text-destructive" role="alert">
                  {errors.email}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="telefono" className="mb-1.5 block text-sm font-medium">
                Teléfono <span className="text-muted font-normal">(opcional)</span>
              </label>
              <input
                id="telefono"
                name="telefono"
                type="tel"
                autoComplete="tel"
                maxLength={MAX.telefono}
                value={data.telefono}
                onChange={(e) => setField("telefono", e.target.value)}
                className={fieldCls}
                aria-invalid={Boolean(errors.telefono)}
                aria-describedby={errors.telefono ? "err-telefono" : undefined}
              />
              {errors.telefono && (
                <p id="err-telefono" className="mt-1.5 text-sm text-destructive" role="alert">
                  {errors.telefono}
                </p>
              )}
            </div>
          </fieldset>
        )}

        {cur === 1 && (
          <fieldset className="space-y-5">
            <legend className="sr-only">País</legend>
            <p className="text-muted text-pretty">
              ¿Desde dónde nos escribe? Así adaptamos la orientación a su
              realidad.
            </p>
            <div>
              <label htmlFor="pais" className="mb-1.5 block text-sm font-medium">
                País <span className="text-destructive">*</span>
              </label>
              <CountrySelect
                id="pais"
                value={data.pais}
                onChange={(c) => setField("pais", c)}
                error={errors.pais}
              />
              {errors.pais && (
                <p id="pais-err" className="mt-1.5 text-sm text-destructive" role="alert">
                  {errors.pais}
                </p>
              )}
            </div>
          </fieldset>
        )}

        {cur === 2 && (
          <fieldset className="space-y-5">
            <legend className="sr-only">Tipo de servicio</legend>
            <p className="text-muted text-pretty">
              Elija el trámite o servicio que mejor describe su necesidad.
            </p>
            <div className="space-y-2" role="radiogroup" aria-label="Servicio">
              {SERVICE_OPTIONS.map((opt) => (
                <label
                  key={opt}
                  className={cn(
                    "flex min-h-11 cursor-pointer items-center gap-3 border px-4 py-3 transition-colors duration-200",
                    data.servicio === opt
                      ? "border-gold bg-bg"
                      : "border-border hover:border-gold/60"
                  )}
                >
                  <input
                    type="radio"
                    name="servicio"
                    value={opt}
                    checked={data.servicio === opt}
                    onChange={() => setField("servicio", opt)}
                    className="accent-gold-deep"
                  />
                  <span className="text-sm font-medium text-ink">{opt}</span>
                </label>
              ))}
            </div>
            {errors.servicio && (
              <p className="text-sm text-destructive" role="alert">
                {errors.servicio}
              </p>
            )}
          </fieldset>
        )}

        {cur === 3 && (
          <fieldset className="space-y-5">
            <legend className="sr-only">Detalle y consentimiento</legend>
            <p className="text-muted text-pretty">
              Cuéntenos lo esencial. Cuanta más claridad, más precisa será
              nuestra respuesta.
            </p>
            <div>
              <label htmlFor="detalle" className="mb-1.5 block text-sm font-medium">
                Mensaje <span className="text-destructive">*</span>
              </label>
              <textarea
                id="detalle"
                name="detalle"
                rows={5}
                maxLength={MAX.detalle}
                value={data.detalle}
                onChange={(e) => setField("detalle", e.target.value)}
                className={cn(fieldCls, "resize-y")}
                aria-invalid={Boolean(errors.detalle)}
                aria-describedby={errors.detalle ? "err-detalle" : undefined}
              />
              {errors.detalle && (
                <p id="err-detalle" className="mt-1.5 text-sm text-destructive" role="alert">
                  {errors.detalle}
                </p>
              )}
            </div>
            <label className="flex cursor-pointer items-start gap-3 text-sm text-muted">
              <input
                type="checkbox"
                checked={data.consent}
                onChange={(e) => setField("consent", e.target.checked)}
                className="mt-1 accent-gold-deep"
                aria-invalid={Boolean(errors.consent)}
              />
              <span>
                He leído y acepto el{" "}
                <Link
                  href="/aviso-de-privacidad"
                  className="font-medium text-ink underline-offset-2 hover:underline"
                >
                  aviso de privacidad
                </Link>
                . <span className="text-destructive">*</span>
              </span>
            </label>
            {errors.consent && (
              <p className="text-sm text-destructive" role="alert">
                {errors.consent}
              </p>
            )}
            {/* Honeypot */}
            <div className="absolute -left-[9999px]" aria-hidden>
              <label htmlFor="website">Sitio web</label>
              <input
                id="website"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={data.website}
                onChange={(e) => setField("website", e.target.value)}
              />
            </div>
          </fieldset>
        )}
      </div>

      {status === "error" && (
        <p className="mt-6 text-sm text-destructive" role="alert">
          No pudimos enviar su mensaje. Inténtelo de nuevo o escríbanos por
          WhatsApp.
        </p>
      )}

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
        {cur > 0 ? (
          <Button type="button" variant="ghost" onClick={goBack}>
            Atrás
          </Button>
        ) : (
          <span />
        )}
        {cur < TOTAL_STEPS - 1 ? (
          <Button type="button" onClick={goNext}>
            Continuar
          </Button>
        ) : (
          <Button type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Enviando…" : "Enviar consulta"}
          </Button>
        )}
      </div>
    </form>
  );
}
