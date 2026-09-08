"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { submitLead } from "@/lib/api";
import {
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  Send,
  CheckCircle2,
} from "lucide-react";

interface ContactSectionProps {
  selectedServicePreset?: string;
}

export default function ContactSection({ selectedServicePreset = "" }: ContactSectionProps) {
  const [localSubmitted, setLocalSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: selectedServicePreset || "Rental Agreement",
    preferredSlot: "Morning (10:00 AM - 1:00 PM)",
    message: "",
  });

  const isSuccess = localSubmitted;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError("");

    // Validate phone number (must be exactly 10 digits)
    const cleanedPhone = formData.phone.replace(/\D/g, "");
    if (cleanedPhone.length !== 10) {
      setSubmitError("Please enter a valid 10-digit phone number.");
      return;
    }

    // Validate email if provided (must contain @ and valid domain)
    if (formData.email.trim()) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.email.includes("@") || !emailPattern.test(formData.email.trim())) {
        setSubmitError("Please enter a valid email address with '@' (e.g. yourname@gmail.com).");
        return;
      }
    }

    setSubmitting(true);
    try {
      await submitLead("/api/v1/inquiries", { ...formData, phone: cleanedPhone });
      setLocalSubmitted(true);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Unable to submit your request. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Go Prime Services! I have submitted an inquiry for ${formData.service}. My name is ${formData.name} and phone is ${formData.phone}.`
  );

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#F8FAFC] relative border-t border-[#E2E6EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#B88E44] block mb-2">
            CONTACT &amp; BOOKING
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#0F172A] tracking-tight leading-tight">
            We Are Here to{" "}
            <span
              className="font-serif italic font-normal text-[#2B2E8F]"
              style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
            >
              Help You
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#555D75]">
            Have a question or ready to schedule your doorstep biometric verification? Reach out directly or submit your details.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Direct Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2E6EE] shadow-xs space-y-5">
              <h3 className="text-xl font-bold text-[#0F172A]">
                Direct Helpdesk Channels
              </h3>

              {/* WhatsApp Action Card */}
              <a
                href="https://wa.me/919421215055?text=Hello%20Go%20Prime%20Services!%20I%20need%20assistance%20with%20legal%20documentation."
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-[#EEF2FB] border border-[#CCD6F0] hover:border-[#1F216B] transition-all flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center shadow-xs">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#0F172A] block">WhatsApp Support</span>
                    <span className="text-xs text-[#555D75]">+91 94212 15055</span>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#1F216B] group-hover:underline">
                  Chat Now →
                </span>
              </a>

              {/* Email Card */}
              <a
                href="mailto:contactgoprimeservices@gmail.com"
                className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E6EE] hover:border-[#1F216B] transition-all flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#EEF2FB] text-[#1F216B] flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#0F172A] block">Official Email</span>
                    <span className="text-xs text-[#555D75]">contactgoprimeservices@gmail.com</span>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#1F216B] group-hover:underline">
                  Send Mail →
                </span>
              </a>

              {/* Phone Desk */}
              <a
                href="tel:+919421215055"
                className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E6EE] hover:border-[#1F216B] transition-all flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#1F216B]/10 text-[#1F216B] flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#0F172A] block">Call Helpdesk</span>
                    <span className="text-xs text-[#555D75]">+91 94212 15055</span>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#1F216B] group-hover:underline">
                  Call Now →
                </span>
              </a>

              {/* Service & Operational Details */}
              <div className="pt-4 border-t border-[#E2E6EE] space-y-3 text-xs text-[#555D75]">
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#D2AC65] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0F172A]">Working Hours:</strong> Mon - Sat: 9:00 AM - 8:00 PM | Sun: By Appointment
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#D2AC65] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0F172A]">Doorstep Coverage:</strong> Service available across Maharashtra with biometric verification across India and worldwide.
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0F172A]">Legally Enforceable:</strong> 100% legally binding agreements with official government registration receipt.
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E2E6EE] shadow-xs relative">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center py-10 px-4"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-[#1F216B] text-white flex items-center justify-center mx-auto mb-6 shadow-md">
                      <CheckCircle2 className="w-9 h-9 text-emerald-400" />
                    </div>

                    <h3 className="text-2xl font-bold text-[#0F172A] mb-2">
                      Inquiry Received Successfully!
                    </h3>
                    <p className="text-sm text-[#555D75] max-w-md mx-auto mb-6">
                      Thank you for choosing <strong className="text-[#1F216B]">Go Prime Services</strong>. Our documentation officer will contact you at <strong className="text-[#1F216B]">{formData.phone || "your number"}</strong> shortly.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <a
                        href={`https://wa.me/919421215055?text=${whatsappMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-xs text-white bg-[#25D366] hover:bg-[#1EBE5D] shadow-sm transition-all"
                      >
                        <MessageCircle className="w-4 h-4 fill-current" />
                        <span>Chat on WhatsApp Now</span>
                      </a>

                      <button
                        suppressHydrationWarning
                        onClick={() => {
                          setLocalSubmitted(false);
                          setFormData({
                            name: "",
                            phone: "",
                            email: "",
                            service: selectedServicePreset || "Rental Agreement",
                            preferredSlot: "Morning (10:00 AM - 1:00 PM)",
                            message: "",
                          });
                        }}
                        className="px-6 py-3 rounded-full text-xs font-bold text-[#0F172A] bg-[#F8FAFC] border border-[#E2E6EE] hover:bg-white transition-colors cursor-pointer"
                      >
                        Submit Another Request
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <div className="mb-3">
                      <h3 className="text-2xl font-bold text-[#0F172A]">
                        Send Inquiry / Book Slot
                      </h3>
                      <p className="text-xs text-[#555D75] mt-1">
                        Fill in your details and we will take care of the entire legal process.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1.5" htmlFor="name">
                          Full Name *
                        </label>
                        <input
                          suppressHydrationWarning
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-[#F8FAFC] border border-[#E2E6EE] focus:border-[#1F216B] rounded-2xl px-4 py-3 text-sm text-[#0F172A] placeholder:text-[#828DA4] focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1.5" htmlFor="phone">
                          Phone / WhatsApp Number *
                        </label>
                        <input
                          suppressHydrationWarning
                          id="phone"
                          name="phone"
                          type="tel"
                          inputMode="numeric"
                          maxLength={10}
                          required
                          value={formData.phone}
                          onChange={(e) => {
                            const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
                            setFormData({ ...formData, phone: digits });
                          }}
                          className="w-full bg-[#F8FAFC] border border-[#E2E6EE] focus:border-[#1F216B] rounded-2xl px-4 py-3 text-sm text-[#0F172A] placeholder:text-[#828DA4] focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1.5" htmlFor="email">
                          Email Address
                        </label>
                        <input
                          suppressHydrationWarning
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-[#F8FAFC] border border-[#E2E6EE] focus:border-[#1F216B] rounded-2xl px-4 py-3 text-sm text-[#0F172A] placeholder:text-[#828DA4] focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1.5" htmlFor="service">
                          Documentation Service *
                        </label>
                        <select
                          suppressHydrationWarning
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full bg-[#F8FAFC] border border-[#E2E6EE] focus:border-[#1F216B] rounded-2xl px-4 py-3 text-sm text-[#0F172A] focus:outline-none transition-colors cursor-pointer"
                        >
                          <option value="Registered Rent Agreement">Registered Rent Agreement</option>
                          <option value="Notarized Rent Agreement">Notarized Rent Agreement</option>
                          <option value="Partnership Deed Registration">Partnership Deed Registration</option>
                          <option value="Court Marriage & Registered Marriage">Court Marriage &amp; Registered Marriage</option>
                          <option value="Passport / PAN / Aadhaar Services">Passport / PAN / Aadhaar Services</option>
                          <option value="Food License / Shop Act License">Food License / Shop Act License</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1.5" htmlFor="preferredSlot">
                        Preferred Biometric Verification Slot
                      </label>
                      <select
                        suppressHydrationWarning
                        id="preferredSlot"
                        name="preferredSlot"
                        value={formData.preferredSlot}
                        onChange={(e) => setFormData({ ...formData, preferredSlot: e.target.value })}
                        className="w-full bg-[#F8FAFC] border border-[#E2E6EE] focus:border-[#1F216B] rounded-2xl px-4 py-3 text-sm text-[#0F172A] focus:outline-none transition-colors cursor-pointer"
                      >
                        <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                        <option value="Afternoon (1:00 PM - 4:00 PM)">Afternoon (1:00 PM - 4:00 PM)</option>
                        <option value="Evening (4:00 PM - 8:00 PM)">Evening (4:00 PM - 8:00 PM)</option>
                        <option value="Weekend Slot">Weekend Slot (Saturday / Sunday)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1.5" htmlFor="message">
                        Additional Notes / Location (Optional)
                      </label>
                      <textarea
                        suppressHydrationWarning
                        id="message"
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-[#F8FAFC] border border-[#E2E6EE] focus:border-[#1F216B] rounded-2xl p-3.5 text-sm text-[#0F172A] placeholder:text-[#828DA4] focus:outline-none transition-colors"
                      />
                      {submitError && <p role="alert" className="text-xs text-red-600 mt-2">{submitError}</p>}
                    </div>

                    <button
                      suppressHydrationWarning
                      type="submit"
                      disabled={submitting}
                      className="w-full py-4 rounded-full font-bold text-sm text-white bg-[#1F216B] hover:bg-[#14164F] shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {submitting ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-[#D2AC65]" />
                          <span>Submit Documentation Request</span>
                        </>
                      )}
                    </button>

                    <p className="text-center text-[11px] text-[#555D75] pt-1">
                      Your data is protected and handled with strict confidentiality.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
