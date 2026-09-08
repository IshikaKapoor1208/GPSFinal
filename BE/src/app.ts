import cors from "cors";
import express from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import { ZodError } from "zod";
import { config } from "./config.js";
import { callbackRequestSchema, documentBookingSchema, inquirySchema } from "./lead-schemas.js";
import { createLead } from "./leads.js";

export const app = express();
app.set("trust proxy", 1);
app.use(helmet());
app.use(cors({ origin: config.frontendOrigins, methods: ["GET", "POST"] }));
app.use(express.json({ limit: "30kb" }));

const leadLimiter = rateLimit({ windowMs: 15 * 60 * 1000, limit: 10, standardHeaders: true, legacyHeaders: false });

app.get("/health", (_request, response) => response.status(200).json({ status: "ok" }));

app.post("/api/v1/inquiries", leadLimiter, async (request, response, next) => {
  try {
    const data = inquirySchema.parse(request.body);
    const lead = await createLead({ leadType: "inquiry", name: data.name, phone: data.phone, email: data.email, service: data.service, details: { preferredSlot: data.preferredSlot, message: data.message } });
    response.status(201).json({ referenceId: lead.referenceId, message: "Inquiry received." });
  } catch (error) { next(error); }
});

app.post("/api/v1/callback-requests", leadLimiter, async (request, response, next) => {
  try {
    const data = callbackRequestSchema.parse(request.body);
    const lead = await createLead({ leadType: "callback_request", name: data.name, phone: data.phone, service: data.service, details: { preferredTime: data.preferredTime, notes: data.notes } });
    response.status(201).json({ referenceId: lead.referenceId, message: "Callback request received." });
  } catch (error) { next(error); }
});

app.post("/api/v1/document-bookings", leadLimiter, async (request, response, next) => {
  try {
    const data = documentBookingSchema.parse(request.body);
    const { phone, email, serviceType, website: _website, ...details } = data;
    const lead = await createLead({ leadType: "document_booking", name: data.tenantName || data.landlordName || "Document booking applicant", phone, email, service: serviceType, details });
    response.status(201).json({ referenceId: lead.referenceId, message: "Booking request received." });
  } catch (error) { next(error); }
});

app.use((error: unknown, _request: express.Request, response: express.Response, _next: express.NextFunction) => {
  if (error instanceof ZodError) return response.status(400).json({ message: "Please check the form fields.", errors: error.flatten().fieldErrors });
  const message = error instanceof Error ? error.message : "Unexpected server error.";
  console.error(error);
  return response.status(500).json({ message });
});
