"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  FileCheck2,
  MapPin,
  User,
  Phone,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  MessageCircle,
  Clock,
  ShieldCheck,
} from "lucide-react";
import Logo from "@/components/Logo";

interface DocumentWizardModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function DocumentWizardModal({
  isOpen,
  onClose,
  defaultService = "Rental Agreement",
}: DocumentWizardModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceType: defaultService,
    city: "Bengaluru",
    landlordName: "",
    tenantName: "",
    phone: "",
    email: "",
    monthlyRent: "25000",
    securityDeposit: "100000",
    tenureMonths: "11",
    verificationMode: "Doorstep Biometric (UIDAI)",
    locality: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 3));
  const handlePrev = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setStep(1);
    onClose();
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Go Prime Services! I have submitted a booking for ${formData.serviceType} in ${formData.city}. Contact Phone: ${formData.phone}, Monthly Rent: ₹${formData.monthlyRent}, Tenant: ${formData.tenantName || "N/A"}.`
  );

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/65 backdrop-blur-xs"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-2xl bg-[#F8FAFC] border border-[#E2E6EE] rounded-3xl shadow-2xl overflow-hidden z-10 p-6 sm:p-8 my-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white border border-[#E2E6EE] text-[#0F172A] hover:bg-[#1F216B] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close document wizard"
          >
            <X className="w-4 h-4" />
          </button>

          {isSubmitted ? (
            /* Submission Success Screen */
            <div className="text-center py-8">
              <Logo size="sm" className="justify-center mb-6" />
              <div className="w-16 h-16 rounded-2xl bg-[#1F216B] text-white flex items-center justify-center mx-auto mb-5 shadow-lg">
                <CheckCircle2 className="w-9 h-9 text-emerald-400" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-2">
                Order Received Successfully!
              </h3>
              <p className="text-sm text-[#555D75] max-w-md mx-auto mb-6">
                Thank you for choosing <strong className="text-[#1F216B]">Go Prime Services</strong>. Your reference ID is <span className="font-mono font-bold text-[#1F216B]">#GP-{Math.floor(1000 + Math.random() * 9000)}</span>. Our legal desk executive will call you at <strong className="text-[#1F216B]">{formData.phone}</strong> to confirm the draft.
              </p>

              <div className="bg-white p-4 rounded-2xl border border-[#E2E6EE] max-w-md mx-auto mb-6 text-left text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-[#828DA4]">Service:</span>
                  <strong className="text-[#0F172A]">{formData.serviceType}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#828DA4]">City / Locality:</span>
                  <strong className="text-[#0F172A]">{formData.city} {formData.locality ? `(${formData.locality})` : ""}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#828DA4]">Mode:</span>
                  <strong className="text-[#1F216B]">{formData.verificationMode}</strong>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`https://wa.me/919876543210?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-xs sm:text-sm text-white bg-[#25D366] hover:bg-[#1EBE5D] shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Chat with Legal Desk on WhatsApp</span>
                </a>
                <button
                  onClick={handleReset}
                  className="px-6 py-3 rounded-full font-bold text-xs sm:text-sm text-[#0F172A] bg-white border border-[#E2E6EE] hover:bg-[#F8FAFC] transition-all cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            /* Wizard Steps */
            <div>
              {/* Top Step Progress Bar */}
              <div className="mb-6">
                <div className="flex items-center justify-between text-xs font-bold text-[#828DA4] mb-2 uppercase tracking-wider">
                  <span>Step {step} of 3</span>
                  <span className="text-[#1F216B]">
                    {step === 1 && "Document & City"}
                    {step === 2 && "Parties & Tenancy"}
                    {step === 3 && "Verification & Delivery"}
                  </span>
                </div>
                <div className="w-full h-1.5 bg-[#E2E6EE] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#1F216B] transition-all duration-300 rounded-full"
                    style={{ width: `${(step / 3) * 100}%` }}
                  />
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {/* STEP 1 */}
                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                  >
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A]">
                        Select Document Type &amp; Location
                      </h3>
                      <p className="text-xs text-[#555D75] mt-0.5">
                        Choose your requirement to prepare the government-compliant format.
                      </p>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1.5">
                        Document Type *
                      </label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full bg-white border border-[#E2E6EE] focus:border-[#1F216B] rounded-2xl px-4 py-3 text-sm text-[#0F172A] focus:outline-none transition-colors cursor-pointer"
                      >
                        <option value="Rental Agreement">Rental Agreement (11 Months)</option>
                        <option value="Lease Agreement">Lease Agreement (Long Term)</option>
                        <option value="Affidavit & Notary">Affidavit &amp; Notary (PF, LPG, Name Change)</option>
                        <option value="Renew Rental Agreement">Renew Rental Agreement</option>
                        <option value="Police Verification">Tenant Police Verification</option>
                        <option value="Sale Deed & PoA">Sale Deed / Power of Attorney</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1.5">
                          City / State *
                        </label>
                        <div className="relative">
                          <MapPin className="w-4 h-4 text-[#828DA4] absolute left-3.5 top-3.5" />
                          <select
                            value={formData.city}
                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                            className="w-full bg-white border border-[#E2E6EE] focus:border-[#1F216B] rounded-2xl pl-10 pr-4 py-3 text-sm text-[#0F172A] focus:outline-none transition-colors cursor-pointer"
                          >
                            <option value="Bengaluru">Bengaluru (Karnataka)</option>
                            <option value="Delhi NCR">Delhi NCR</option>
                            <option value="Mumbai">Mumbai (Maharashtra)</option>
                            <option value="Pune">Pune (Maharashtra)</option>
                            <option value="Hyderabad">Hyderabad (Telangana)</option>
                            <option value="Chennai">Chennai (Tamil Nadu)</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1.5">
                          Locality / Suburb (Optional)
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Indiranagar, Whitefield, Dwarka..."
                          value={formData.locality}
                          onChange={(e) => setFormData({ ...formData, locality: e.target.value })}
                          className="w-full bg-white border border-[#E2E6EE] focus:border-[#1F216B] rounded-2xl px-4 py-3 text-sm text-[#0F172A] placeholder:text-[#828DA4] focus:outline-none transition-colors"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 2 */}
                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                  >
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A]">
                        Parties &amp; Agreement Terms
                      </h3>
                      <p className="text-xs text-[#555D75] mt-0.5">
                        Basic particulars for stamp duty calculation and draft preparation.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1.5">
                          Landlord / Owner Name
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-[#828DA4] absolute left-3.5 top-3.5" />
                          <input
                            type="text"
                            placeholder="e.g. Rajesh Kumar"
                            value={formData.landlordName}
                            onChange={(e) => setFormData({ ...formData, landlordName: e.target.value })}
                            className="w-full bg-white border border-[#E2E6EE] focus:border-[#1F216B] rounded-2xl pl-10 pr-4 py-3 text-sm text-[#0F172A] focus:outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1.5">
                          Tenant / Applicant Name
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-[#828DA4] absolute left-3.5 top-3.5" />
                          <input
                            type="text"
                            placeholder="e.g. Ishika Kapoor"
                            value={formData.tenantName}
                            onChange={(e) => setFormData({ ...formData, tenantName: e.target.value })}
                            className="w-full bg-white border border-[#E2E6EE] focus:border-[#1F216B] rounded-2xl pl-10 pr-4 py-3 text-sm text-[#0F172A] focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1.5">
                          Monthly Rent (₹)
                        </label>
                        <input
                          type="number"
                          placeholder="25000"
                          value={formData.monthlyRent}
                          onChange={(e) => setFormData({ ...formData, monthlyRent: e.target.value })}
                          className="w-full bg-white border border-[#E2E6EE] focus:border-[#1F216B] rounded-2xl px-4 py-3 text-sm text-[#0F172A] focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1.5">
                          Security Deposit (₹)
                        </label>
                        <input
                          type="number"
                          placeholder="100000"
                          value={formData.securityDeposit}
                          onChange={(e) => setFormData({ ...formData, securityDeposit: e.target.value })}
                          className="w-full bg-white border border-[#E2E6EE] focus:border-[#1F216B] rounded-2xl px-4 py-3 text-sm text-[#0F172A] focus:outline-none"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 3 */}
                {step === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                  >
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A]">
                        Contact &amp; Delivery Details
                      </h3>
                      <p className="text-xs text-[#555D75] mt-0.5">
                        Where should we coordinate biometric verification and document delivery?
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1.5">
                          Phone / WhatsApp Number *
                        </label>
                        <div className="relative">
                          <Phone className="w-4 h-4 text-[#828DA4] absolute left-3.5 top-3.5" />
                          <input
                            type="tel"
                            required
                            placeholder="+91 98765 43210"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full bg-white border border-[#E2E6EE] focus:border-[#1F216B] rounded-2xl pl-10 pr-4 py-3 text-sm text-[#0F172A] focus:outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="ishika@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-white border border-[#E2E6EE] focus:border-[#1F216B] rounded-2xl px-4 py-3 text-sm text-[#0F172A] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1.5">
                        Verification Mode
                      </label>
                      <select
                        value={formData.verificationMode}
                        onChange={(e) => setFormData({ ...formData, verificationMode: e.target.value })}
                        className="w-full bg-white border border-[#E2E6EE] focus:border-[#1F216B] rounded-2xl px-4 py-3 text-sm text-[#0F172A] focus:outline-none cursor-pointer"
                      >
                        <option value="Doorstep Biometric (UIDAI)">Doorstep Biometric Verification (UIDAI Approved)</option>
                        <option value="Aadhaar E-Sign (Paperless)">Aadhaar OTP / E-Sign (100% Online)</option>
                        <option value="Notary & Hardcopy Courier">Physical Notary Stamp &amp; Speed Courier Delivery</option>
                      </select>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-[#EEF2FB] border border-[#CCD6F0] text-xs text-[#1F216B] flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#1F216B] flex-shrink-0" />
                      <span>Includes ₹500/₹100 Government Stamp Duty + Sub-Registrar Filing.</span>
                    </div>
                  </motion.div>
                )}

                {/* Wizard Footer Controls */}
                <div className="mt-8 pt-4 border-t border-[#E2E6EE] flex items-center justify-between gap-3">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="px-5 py-3 rounded-full border border-[#E2E6EE] text-xs font-bold text-[#0F172A] hover:bg-white flex items-center gap-1.5 cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back</span>
                    </button>
                  ) : (
                    <div />
                  )}

                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="px-7 py-3 rounded-full bg-[#1F216B] hover:bg-[#14164F] text-white text-xs sm:text-sm font-bold shadow-md flex items-center gap-2 cursor-pointer"
                    >
                      <span>Continue</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-7 py-3 rounded-full bg-[#1F216B] hover:bg-[#14164F] text-white text-xs sm:text-sm font-bold shadow-md flex items-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>Submit &amp; Schedule</span>
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        </>
                      )}
                    </button>
                  )}
                </div>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
