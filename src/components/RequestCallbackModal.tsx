"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Phone,
  User,
  Clock,
  CheckCircle2,
  MessageCircle,
  FileText,
} from "lucide-react";
import Logo from "@/components/Logo";

interface RequestCallbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function RequestCallbackModal({
  isOpen,
  onClose,
  defaultService = "Rental Agreement",
}: RequestCallbackModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: defaultService,
    preferredTime: "Next 15 minutes",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    setFormData({
      name: "",
      phone: "",
      service: defaultService,
      preferredTime: "Next 15 minutes",
      notes: "",
    });
    onClose();
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Go Prime Services! I would like to request a callback for ${formData.service || "legal documentation"}. My name is ${formData.name || ""}.`
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-lg bg-[#F8FAFC] border border-[#E2E6EE] rounded-3xl shadow-2xl overflow-hidden z-10 p-6 sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white border border-[#E2E6EE] text-[#0F172A] hover:bg-[#1F216B] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-2xl bg-[#1F216B] text-white flex items-center justify-center mx-auto mb-5 shadow-md">
                  <CheckCircle2 className="w-9 h-9 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-[#0F172A] mb-2">
                  Callback Request Submitted!
                </h3>
                <p className="text-sm text-[#555D75] mb-6 max-w-sm mx-auto">
                  Thank you, <strong className="text-[#1F216B]">{formData.name}</strong>. Our legal documentation specialist will call you at{" "}
                  <strong className="text-[#1F216B]">{formData.phone}</strong> around{" "}
                  <span className="text-[#2B2E8F] font-bold">{formData.preferredTime}</span>.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={`https://wa.me/919876543210?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-xs text-white bg-[#25D366] hover:bg-[#1EBE5D] shadow-sm transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Chat on WhatsApp Now</span>
                  </a>
                  <button
                    onClick={handleReset}
                    className="px-6 py-3 rounded-full font-bold text-xs text-[#0F172A] bg-white border border-[#E2E6EE] hover:bg-[#F8FAFC] transition-all cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <div>
                {/* Header */}
                <div className="mb-6">
                  <Logo size="sm" className="mb-4" />
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF2FB] text-[#1F216B] text-xs font-bold uppercase tracking-wider mb-2">
                    <Phone className="w-3 h-3 text-[#1F216B]" />
                    <span>Quick Callback Desk</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0F172A]">
                    Request a Call Back
                  </h3>
                  <p className="text-xs sm:text-sm text-[#555D75] mt-1">
                    Speak directly with a legal documentation expert for doorstep verification and instant quotes.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Field */}
                  <div>
                    <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1.5">
                      Your Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-[#828DA4] absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ishika Kapoor"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white border border-[#E2E6EE] focus:border-[#1F216B] focus:ring-1 focus:ring-[#1F216B] rounded-2xl pl-10 pr-4 py-3 text-sm text-[#0F172A] placeholder:text-[#828DA4] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone Field */}
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
                        className="w-full bg-white border border-[#E2E6EE] focus:border-[#1F216B] focus:ring-1 focus:ring-[#1F216B] rounded-2xl pl-10 pr-4 py-3 text-sm text-[#0F172A] placeholder:text-[#828DA4] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1.5">
                        Required Service
                      </label>
                      <div className="relative">
                        <FileText className="w-4 h-4 text-[#828DA4] absolute left-3.5 top-3.5" />
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full bg-white border border-[#E2E6EE] focus:border-[#1F216B] rounded-2xl pl-10 pr-4 py-3 text-xs sm:text-sm text-[#0F172A] focus:outline-none transition-colors cursor-pointer"
                        >
                          <option value="Rental Agreement">Rental Agreement</option>
                          <option value="Lease Agreement">Lease Agreement</option>
                          <option value="Affidavit & Notary">Affidavit &amp; Notary</option>
                          <option value="Police Verification">Police Verification</option>
                          <option value="Sale Deed & PoA">Sale Deed &amp; PoA</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1.5">
                        Preferred Time
                      </label>
                      <div className="relative">
                        <Clock className="w-4 h-4 text-[#828DA4] absolute left-3.5 top-3.5" />
                        <select
                          value={formData.preferredTime}
                          onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                          className="w-full bg-white border border-[#E2E6EE] focus:border-[#1F216B] rounded-2xl pl-10 pr-4 py-3 text-xs sm:text-sm text-[#0F172A] focus:outline-none transition-colors cursor-pointer"
                        >
                          <option value="Next 15 minutes">Next 15 minutes</option>
                          <option value="Today (Morning)">Today (Morning)</option>
                          <option value="Today (Afternoon)">Today (Afternoon)</option>
                          <option value="Today (Evening)">Today (Evening)</option>
                          <option value="Tomorrow (Morning)">Tomorrow (Morning)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-2 py-3.5 rounded-full font-bold text-sm text-white bg-[#1F216B] hover:bg-[#14164F] shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Phone className="w-4 h-4 text-[#D2AC65]" />
                        <span>Request Instant Callback</span>
                      </>
                    )}
                  </button>

                  <div className="pt-2 text-center">
                    <p className="text-[11px] text-[#555D75]">
                      Prefer WhatsApp?{" "}
                      <a
                        href="https://wa.me/919876543210?text=Hi%20Go%20Prime%20Services,%20I%20need%20assistance%20with%20legal%20documentation"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1F216B] font-bold underline hover:text-[#D2AC65]"
                      >
                        Click to chat directly
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
