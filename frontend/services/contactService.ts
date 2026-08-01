/**
 * Envío de consultas de contacto.
 * TODO: confirmar tenant_id y endpoint reales del cliente / plataforma.
 */

const CONTACT_API_URL =
  "https://gskivxfink.execute-api.us-east-1.amazonaws.com/prod/contact";

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
