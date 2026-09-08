import nodemailer from "nodemailer";
import { config } from "./config.js";
import type { LeadRecord } from "./types.js";

const transporter = nodemailer.createTransport({
  host: config.smtp.host,
  port: config.smtp.port,
  secure: config.smtp.secure,
  auth: { user: config.smtp.user, pass: config.smtp.password },
});

const labels: Record<string, string> = {
  preferredSlot: "Preferred slot",
  preferredTime: "Preferred callback time",
  message: "Additional notes / location",
  city: "City / state",
  locality: "Locality / suburb",
  landlordName: "Landlord / owner name",
  tenantName: "Tenant / applicant name",
  monthlyRent: "Monthly rent",
  securityDeposit: "Security deposit",
  tenureMonths: "Tenure (months)",
  verificationMode: "Verification mode",
  notes: "Notes",
};

function escapeHtml(value: unknown): string {
  return String(value ?? "—").replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;",
  })[character] ?? character);
}

export async function sendLeadNotification(lead: LeadRecord): Promise<void> {
  const rows = [
    ["Reference ID", lead.referenceId],
    ["Request type", lead.leadType.replaceAll("_", " ")],
    ["Name", lead.name],
    ["Phone", lead.phone],
    ["Email", lead.email || "—"],
    ["Service", lead.service],
    ...Object.entries(lead.details).filter(([key]) => key !== "website").map(([key, value]) => [labels[key] ?? key, value]),
  ];
  const text = rows.map(([label, value]) => `${label}: ${String(value ?? "—")}`).join("\n");
  const html = `<h2>New Go Prime Services request</h2><table cellpadding="8" cellspacing="0" style="border-collapse:collapse">${rows.map(([label, value]) => `<tr><th align="left" style="border:1px solid #ddd">${escapeHtml(label)}</th><td style="border:1px solid #ddd">${escapeHtml(value)}</td></tr>`).join("")}</table>`;

  await transporter.sendMail({
    from: config.mailFrom,
    to: config.mailTo,
    replyTo: lead.email || undefined,
    subject: `[${lead.referenceId}] New ${lead.leadType.replaceAll("_", " ")}`,
    text,
    html,
  });
}
