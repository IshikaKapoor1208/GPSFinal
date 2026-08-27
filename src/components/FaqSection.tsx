"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Is a rental agreement made through Go Prime Services legally valid in court?",
      a: "Yes, 100%. Every agreement processed by Go Prime Services is stamped with official state government e-stamp duty (Article 30), verified with UIDAI biometric authentication, and officially endorsed with notary or sub-registrar registration numbers, making it fully enforceable in any Indian court.",
    },
    {
      q: "Do I or my landlord need to visit any sub-registrar or government office?",
      a: "No! Zero office visits. Our verified field executive visits your doorstep at your preferred time slot with approved biometric devices to capture Aadhaar authentication. You stay in the comfort of your home.",
    },
    {
      q: "What is the turnaround time for doorstep delivery?",
      a: "Drafts are generated and sent for your approval within 2 to 4 hours. Once approved and biometric verification is completed, your legally registered, stamped hard copy is couriered to your doorstep in 2–3 working days across Bengaluru, Karnataka, and Delhi NCR.",
    },
    {
      q: "What documents are required from landlord and tenant?",
      a: "Only Aadhaar card, PAN card, and basic property electricity bill / tax receipt or ownership proof. You do not need to submit original property documents.",
    },
    {
      q: "Can I customize clauses in the standard rental agreement?",
      a: "Absolutely. You can add specific clauses such as lock-in periods, notice duration, pet policies, maintenance terms, painting charges, or appliance inventory during draft preparation.",
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-16 sm:py-24 bg-white relative border-t border-[#E2E6EE]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EEF2FB] text-[#1F216B] text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#0F172A] tracking-tight leading-tight">
            Got questions?{" "}
            <span
              className="font-serif italic font-normal text-[#2B2E8F]"
              style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
            >
              We have answers.
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#555D75]">
            Everything you need to know about legal validity, doorstep biometric verification, and government registration.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-[#F8FAFC] border-[#1F216B]/40 shadow-sm"
                    : "bg-white border-[#E2E6EE] hover:border-[#D2AC65]/50"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-[#0F172A]">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? "bg-[#1F216B] text-white rotate-180" : "bg-[#F8FAFC] text-[#0F172A]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-[#555D75] leading-relaxed border-t border-[#E2E6EE] pt-3">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom WhatsApp CTA */}
        <div className="mt-10 p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E6EE] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-bold text-[#0F172A]">
              Have a specific clause or custom legal documentation requirement?
            </h4>
            <p className="text-xs text-[#555D75] mt-0.5">
              Speak directly with our legal documentation executive on WhatsApp.
            </p>
          </div>
          <a
            href="https://wa.me/919876543210?text=Hi%20Go%20Prime%20Services,%20I%20have%20a%20question%20regarding%20legal%20documentation"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold shadow-xs flex items-center gap-2 whitespace-nowrap transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
