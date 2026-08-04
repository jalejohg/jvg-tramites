/**
 * Envío de consultas de contacto vía Contact API de la plataforma
 * (API Gateway + Lambda + SES en saas-core-infrastructure).
 */

const DEFAULT_CONTACT_API_URL =
  "https://gskivxfink.execute-api.us-east-1.amazonaws.com/prod/contact";

const CONTACT_API_URL =
  process.env.NEXT_PUBLIC_CONTACT_API?.replace(/\/$/, "") ||
  DEFAULT_CONTACT_API_URL;

export interface ExtraInfoItem {
  labels: Record<string, string>;
  value: string;
}

export interface ContactPayload {
  tenant_id: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  extra_info?: ExtraInfoItem[];
  /** Honeypot — debe llegar vacío; si trae valor, lo rellenó un bot. */
  website: string;
}

export interface ContactResult {
  ok: boolean;
  message: string;
}

class ContactService {
  async submit(payload: ContactPayload): Promise<ContactResult> {
    try {
      const res = await fetch(CONTACT_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const body = (await res.json()) as { message?: string };
      return { ok: res.ok, message: body.message ?? "Error desconocido" };
    } catch {
      return {
        ok: false,
        message: "No se pudo enviar el mensaje. Inténtelo de nuevo.",
      };
    }
  }
}

export const contactService = new ContactService();
