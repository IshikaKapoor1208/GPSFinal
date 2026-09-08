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
      description: "Legally register your rent agreement with quick processing and doorstep biometric verification.",
      cta: "Register Agreement",
      icon: FileText,
      servicePreset: "Registered Rent Agreement",
    },
    {
      id: "lease-agreement",
      title: "Notarized Rent Agreement",
      description: "Get a professionally drafted and notarized rent agreement for your rental needs.",
      cta: "Get Notarized",
      icon: Building,
      servicePreset: "Notarized Rent Agreement",
    },
    {
      id: "affidavit-notary",
      title: "Partnership Deed Registration",
      description: "Draft and register partnership deeds with complete legal documentation support.",
      cta: "Start Deed",
      icon: ShieldCheck,
      servicePreset: "Partnership Deed Registration",
    },
    {
      id: "renew-agreement",
      title: "Court Marriage & Registered Marriage",
      description: "End-to-end assistance for court marriage and marriage registration documentation.",
      cta: "Get Assistance",
      icon: RotateCw,
      servicePreset: "Court Marriage & Registered Marriage",
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
              From rent agreements and marriage registration to PAN, Aadhaar, passport, licenses, and land records, we bring government and private services to your doorstep.
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
            suppressHydrationWarning
            onClick={onOpenAllServices}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#1F216B] hover:text-[#D2AC65] transition-colors cursor-pointer"
          >
            <span>Need Passport, PAN, Aadhaar, Gazette, FSSAI, or Shop Act support?</span>
            <span className="underline">View all services</span>
          </button>
        </div>

      </div>
    </section>
  );
}
