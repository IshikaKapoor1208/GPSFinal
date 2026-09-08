"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  X,
  Send,
  Check,
} from "lucide-react";
import Logo from "@/components/Logo";
import WhatsappIcon from "@/components/WhatsappIcon";

interface WhatsAppFloatingWidgetProps {
  phoneNumber?: string;
  emailAddress?: string;
  visible?: boolean;
}

export default function WhatsAppFloatingWidget({
  phoneNumber = "919421215055",
  emailAddress = "contactgoprimeservices@gmail.com",
  visible = true,
}: WhatsAppFloatingWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  const quickOptions = [
    { label: "Rental Agreement (11 Months)", msg: "Hi Go Prime Services, I need help with Registered Rent Agreement registration." },
    { label: "Doorstep Biometric Verification", msg: "Hi, I would like to book a Doorstep Biometric Verification slot." },
    { label: "Notarized Rent Agreement", msg: "Hello, I need assistance with a Notarized Rent Agreement." },
    { label: "Passport / PAN / Aadhaar Services", msg: "Hi, I need assistance with Passport, PAN, or Aadhaar services." },
  ];

  const handleOpenWhatsApp = (messageText: string) => {
    const text = encodeURIComponent(messageText || "Hello Go Prime Services! I have an inquiry about legal documentation.");
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  };

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex flex-col items-end transition-all duration-300 ${
        visible ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-90 pointer-events-none"
      }`}
    >
      {/* Expandable Chat Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.92 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mb-4 w-80 sm:w-96 bg-white border border-[#E2E6EE] rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#14164F] p-4 text-white relative">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-sm">
                      <WhatsappIcon size={20} color="white" strokeWidth={2} />
                    </div>
                    <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#14164F]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold tracking-tight">Go Prime Legal Desk</h4>
                    <p className="text-[11px] text-[#D2AC65] flex items-center gap-1 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Online • Typically replies in 2 mins
                    </p>
                  </div>
                </div>

                <button
                  suppressHydrationWarning
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  aria-label="Close WhatsApp widget"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Chat Body */}
            <div className="p-4 bg-[#F8FAFC]/80 space-y-3 max-h-[360px] overflow-y-auto">
              {/* Intro bubble */}
              <div className="bg-white p-3 rounded-2xl rounded-tl-xs border border-[#E2E6EE] shadow-2xs max-w-[85%] text-xs text-[#0F172A]">
                <div className="mb-2">
                  <Logo size="sm" showSub={false} />
                </div>
                <p className="font-semibold mb-1 text-[#1F216B]">
                  👋 Welcome to Go Prime Services!
                </p>
                <p className="text-[#555D75] leading-relaxed">
                  How can we assist you with your legal and government documentation today? Select an inquiry below or write to us.
                </p>
              </div>

              {/* Quick Prompt Chips */}
              <div className="space-y-1.5 pt-1">
                <span className="text-[10px] font-bold text-[#828DA4] uppercase tracking-wider block">
                  Quick Inquiries:
                </span>
                {quickOptions.map((opt, i) => (
                  <button
                    suppressHydrationWarning
                    key={i}
                    onClick={() => handleOpenWhatsApp(opt.msg)}
                    className="w-full text-left p-2.5 rounded-xl bg-white hover:bg-[#EEF2FB] border border-[#E2E6EE] hover:border-[#1F216B] text-xs font-semibold text-[#0F172A] transition-all flex items-center justify-between group cursor-pointer shadow-2xs"
                  >
                    <span>{opt.label}</span>
                    <Send className="w-3 h-3 text-[#1F216B] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  </button>
                ))}
              </div>

              {/* Direct Email & Phone Channels */}
              <div className="pt-2 border-t border-[#E2E6EE] grid grid-cols-2 gap-2">
                <button
                  suppressHydrationWarning
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl bg-white hover:bg-slate-50 border border-[#E2E6EE] text-[11px] font-bold text-[#0F172A] flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  title="Copy or Email"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Mail className="w-3.5 h-3.5 text-[#D2AC65]" />
                      <span>Email Desk</span>
                    </>
                  )}
                </button>

                <a
                  href="tel:+919421215055"
                  className="p-2 rounded-xl bg-white hover:bg-slate-50 border border-[#E2E6EE] text-[11px] font-bold text-[#0F172A] flex items-center justify-center gap-1.5 transition-all"
                >
                  <Phone className="w-3.5 h-3.5 text-[#1F216B]" />
                  <span>Call Direct</span>
                </a>
              </div>
            </div>

            {/* Custom Input Footer */}
            <div className="p-3 bg-white border-t border-[#E2E6EE] flex items-center gap-2">
              <input
                suppressHydrationWarning
                type="text"
                placeholder="Type your message..."
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleOpenWhatsApp(customMsg);
                  }
                }}
                className="flex-1 bg-[#F8FAFC] border border-[#E2E6EE] focus:border-[#1F216B] rounded-xl px-3 py-2 text-xs text-[#0F172A] placeholder:text-[#828DA4] focus:outline-none"
              />
              <button
                suppressHydrationWarning
                onClick={() => handleOpenWhatsApp(customMsg)}
                className="p-2.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white shadow-sm transition-colors cursor-pointer"
                aria-label="Send via WhatsApp"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hover Tooltip Prompt */}
      {!isOpen && showTooltip && (
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
          className="mb-2 mr-1 hidden sm:flex items-center gap-2 bg-[#14164F] text-white text-xs font-semibold px-3.5 py-2 rounded-full shadow-xl border border-[#1F216B] cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]" />
          </span>
          <span>Chat with Legal Desk</span>
          <button
            suppressHydrationWarning
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-white/60 hover:text-white ml-1"
          >
            <X className="w-3 h-3" />
          </button>
        </motion.div>
      )}

      {/* Floating Action Button (FAB) */}
      <div className="flex items-center gap-2.5">
        {/* Email Quick Action Pill */}
        <button
          suppressHydrationWarning
          onClick={handleCopyEmail}
          className="hidden sm:flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white hover:bg-[#F8FAFC] text-[#0F172A] border border-[#E2E6EE] shadow-lg text-xs font-bold transition-all hover:scale-105 cursor-pointer"
          title={`Email: ${emailAddress}`}
        >
          {copiedEmail ? (
            <>
              <Check className="w-4 h-4 text-emerald-600" />
              <span className="text-emerald-700">Email Copied!</span>
            </>
          ) : (
            <>
              <Mail className="w-4 h-4 text-[#D2AC65]" />
              <span>Email Desk</span>
            </>
          )}
        </button>

        {/* WhatsApp Main Button */}
        <motion.button
          suppressHydrationWarning
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-2xl border-[3px] border-white cursor-pointer group"
          aria-label="Open WhatsApp contact chat"
        >
          {isOpen ? (
            <X className="w-7 h-7 text-white" />
          ) : (
            <>
              <WhatsappIcon size={32} color="white" strokeWidth={2} className="group-hover:scale-110 transition-transform" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#D2AC65] text-white text-[10px] font-black rounded-full flex items-center justify-center border-2 border-white shadow-xs">
                1
              </span>
            </>
          )}
        </motion.button>
      </div>
    </div>
  );
}
