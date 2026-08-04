import { useMutation } from "@tanstack/react-query";
import {
  contactService,
  type ContactPayload,
  type ContactResult,
} from "@/services/contactService";
import { QK } from "@/lib/queryKeys";

export class ContactSubmitError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ContactSubmitError";
  }
}

async function submitContact(payload: ContactPayload): Promise<ContactResult> {
  const result = await contactService.submit(payload);
  if (!result.ok) {
    throw new ContactSubmitError(result.message);
  }
  return result;
}

export function useSubmitContact() {
  return useMutation({
    mutationKey: QK.CONTACT_SUBMIT,
    mutationFn: submitContact,
  });
}
