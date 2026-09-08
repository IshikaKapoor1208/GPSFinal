import { randomUUID } from "node:crypto";
import { pool } from "./db.js";
import { sendLeadNotification } from "./mailer.js";
import type { LeadRecord, LeadType } from "./types.js";

function createReferenceId(): string {
  const date = new Date().toISOString().slice(0, 10).replaceAll("-", "");
  return `GPS-${date}-${randomUUID().slice(0, 6).toUpperCase()}`;
}

export async function createLead(input: {
  leadType: LeadType;
  name: string;
  phone: string;
  email?: string;
  service: string;
  details: Record<string, unknown>;
}): Promise<LeadRecord> {
  const lead: LeadRecord = {
    id: randomUUID(),
    referenceId: createReferenceId(),
    leadType: input.leadType,
    name: input.name,
    phone: input.phone,
    email: input.email || null,
    service: input.service,
    details: input.details,
  };
  await pool.query(
    `INSERT INTO leads (id, reference_id, lead_type, name, phone, email, service, details)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
    [lead.id, lead.referenceId, lead.leadType, lead.name, lead.phone, lead.email, lead.service, lead.details],
  );
  try {
    await sendLeadNotification(lead);
    await pool.query("UPDATE leads SET email_status = 'sent', email_sent_at = NOW(), updated_at = NOW() WHERE id = $1", [lead.id]);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown SMTP error";
    await pool.query("UPDATE leads SET email_status = 'failed', email_error = $2, updated_at = NOW() WHERE id = $1", [lead.id, message]);
    throw new Error("Your request was saved, but the email notification could not be sent. Please try again shortly.");
  }
  return lead;
}
