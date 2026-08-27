"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  UserCheck,
  FileEdit,
  CheckCircle2,
  Fingerprint,
  Landmark,
  FileCheck2,
} from "lucide-react";

export default function ProcessTimeline() {
  const steps = [
    {
      num: "01",
      title: "Submit Details",
      desc: "Share your information and documents.",
      icon: UserCheck,
    },
    {
      num: "02",
      title: "Draft Preparation",
      desc: "We prepare and share the draft.",
      icon: FileEdit,
    },
    {
      num: "03",
      title: "Approval",
      desc: "Review and approve the draft.",
      icon: CheckCircle2,
    },
    {
      num: "04",
      title: "Doorstep Verification",
      desc: "Biometric verification at your location.",
      icon: Fingerprint,
    },
    {
      num: "05",
      title: "Government Registration",
      desc: "We register with the government.",
      icon: Landmark,
    },
    {
      num: "06",
      title: "Receive Document",
      desc: "Get your registered document delivered.",
      icon: FileCheck2,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-[#F8FAFC] relative border-t border-[#E2E6EE] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Matching Image 3) */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#B88E44] block mb-2">
            HOW IT WORKS
          </span>
          <h2
            className="text-3xl sm:text-5xl font-serif font-bold text-[#0F172A] tracking-tight"
            style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
          >
            A Simple 6-Step Process
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#555D75]">
            Experience complete peace of mind with our guided, doorstep-assisted legal workflow.
          </p>
        </div>

        {/* 6-Step Connected Timeline with Continuous Connecting Line */}
        <div className="relative">
          
          {/* Continuous Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-7 left-[8.33%] right-[8.33%] h-[2px] bg-[#CCD4E6] z-0" />

          {/* 6 Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 sm:gap-6 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Circular Step Badge with Gold Icon & Connecting Line Halo */}
                  <div className="relative mb-4">
                    <div className="w-14 h-14 rounded-full bg-[#1F216B] text-[#D2AC65] border-4 border-[#F8FAFC] flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-[#14164F] group-hover:text-amber-300 transition-all duration-200">
                      <Icon className="w-6 h-6 stroke-[1.8]" />
                    </div>
                  </div>

                  {/* Step Number */}
                  <span className="text-xs font-mono font-bold text-[#0F172A] mb-1.5">
                    {step.num}
                  </span>

                  {/* Step Title */}
                  <h3
                    className="text-base sm:text-lg font-serif font-bold text-[#0F172A] mb-1.5 leading-snug group-hover:text-[#1F216B] transition-colors"
                    style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
                  >
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-xs text-[#555D75] leading-relaxed max-w-[170px]">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
