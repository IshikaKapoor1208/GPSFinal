"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Building,
  ShieldCheck,
  RotateCw,
  ArrowRight,
} from "lucide-react";

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
  onOpenAllServices: () => void;
}

export default function ServicesSection({
  onSelectService,
  onOpenAllServices,
}: ServicesSectionProps) {
  const cards = [
    {
      id: "rental-agreement",
      title: "Registered Rent Agreement",
      description: "Drafted with custom clauses, state e-stamp duty, and doorstep biometric registration.",
      cta: "Draft Agreement",
      icon: FileText,
      servicePreset: "Registered Rent Agreement",
    },
    {
      id: "lease-agreement",
      title: "Commercial & Long-Term Lease",
      description: "Tailored lease deeds with legal vetting, title compliance, and sub-registrar filing.",
      cta: "Prepare Lease",
      icon: Building,
      servicePreset: "Commercial & Long-Term Lease",
    },
    {
      id: "affidavit-notary",
      title: "Notarised Affidavits & Declarations",
      description: "PF claims, address declarations, name change, and gap certificates stamped by licensed notaries.",
      cta: "Get Notarised",
      icon: ShieldCheck,
      servicePreset: "Affidavit & Notary Services",
    },
    {
      id: "renew-agreement",
      title: "Quick Agreement Renewal",
      description: "Extend your tenancy tenure with updated rent, terms, and auto-calculated stamp duty.",
      cta: "Renew Tenancy",
      icon: RotateCw,
      servicePreset: "Renewal of Rent Agreement",
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with unique copy */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14 gap-4 sm:gap-6">
          <div>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#0F172A] tracking-tight leading-tight">
              Choose your document. <br />
              <span
                className="font-serif italic font-normal text-[#2B2E8F] inline-block mt-0.5"
                style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
              >
                We handle the compliance.
              </span>
            </h2>
          </div>

          <div className="max-w-sm">
            <p className="text-sm sm:text-base text-[#555D75] leading-relaxed">
              From drafting and e-stamping to doorstep biometric authentication and priority delivery — we manage every government formality.
            </p>
          </div>
        </div>

        {/* 4 Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                onClick={() => onSelectService(card.servicePreset)}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E2E6EE] hover:border-[#D2AC65]/70 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(31,33,107,0.12)] transition-all duration-300 flex flex-col justify-between min-h-[260px] cursor-pointer group hover:scale-[1.025] hover:-translate-y-1.5"
              >
                <div>
                  {/* Brand Tint Rounded Square Icon Container */}
                  <div className="w-12 h-12 rounded-2xl bg-[#EEF2FB] text-[#1F216B] flex items-center justify-center mb-6 group-hover:bg-[#1F216B] group-hover:text-white transition-colors duration-200">
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] mb-2 leading-snug group-hover:text-[#1F216B] transition-colors">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#555D75] leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-6">
                  <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#1F216B] group-hover:text-[#D2AC65] transition-colors">
                    <span>{card.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All Services Link */}
        <div className="mt-10 text-center">
          <button
            onClick={onOpenAllServices}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#1F216B] hover:text-[#D2AC65] transition-colors cursor-pointer"
          >
            <span>Need Police Verification, Property Sale Deed, or Power of Attorney?</span>
            <span className="underline">View all documentation services →</span>
          </button>
        </div>

      </div>
    </section>
  );
}
