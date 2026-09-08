import { z } from "zod";

const name = z.string().trim().min(2, "Please enter your full name.").max(120);
const phone = z.string().trim().regex(/^[0-9+()\-\s]{8,30}$/, "Please enter a valid phone number.");
const email = z.string().trim().email("Please enter a valid email address.").max(254).optional().or(z.literal(""));
const service = z.string().trim().min(2).max(160);
const optionalText = (max: number) => z.string().trim().max(max).optional().or(z.literal(""));
const honeypot = z.string().max(0).optional();

export const inquirySchema = z.object({
  name,
  phone,
  email,
  service,
  preferredSlot: z.string().trim().min(2).max(120),
  message: optionalText(2000),
  website: honeypot,
});

export const callbackRequestSchema = z.object({
  name,
  phone,
  service,
  preferredTime: z.string().trim().min(2).max(120),
  notes: optionalText(2000),
  website: honeypot,
});

export const documentBookingSchema = z.object({
  serviceType: service,
  city: z.string().trim().min(2).max(120),
  locality: optionalText(160),
  landlordName: optionalText(120),
  tenantName: optionalText(120),
  monthlyRent: z.string().trim().max(20).optional().or(z.literal("")),
  securityDeposit: z.string().trim().max(20).optional().or(z.literal("")),
  tenureMonths: z.string().trim().max(10).optional().or(z.literal("")),
  phone,
  email,
  verificationMode: z.string().trim().min(2).max(160),
  website: honeypot,
});
