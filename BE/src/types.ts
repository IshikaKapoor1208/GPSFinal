export type LeadType = "inquiry" | "callback_request" | "document_booking";

export interface LeadRecord {
  id: string;
  referenceId: string;
  leadType: LeadType;
  name: string;
  phone: string;
  email: string | null;
  service: string;
  details: Record<string, unknown>;
}
