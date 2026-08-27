"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Star,
} from "lucide-react";

interface HeroContentProps {
  onStartAgreement: () => void;
  onOpenAllServices: () => void;
  onOpenZoomModal?: () => void;
}

export default function HeroContent({
  onStartAgreement,
  onOpenAllServices,
}: HeroContentProps) {
  return (
    <section
      className="relative pt-28 pb-14 sm:pt-36 sm:pb-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl lg:max-w-3xl space-y-6 sm:space-y-8">
          
          {/* Live Location Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[#1F216B] text-xs font-semibold tracking-wide border border-[#CCD6F0] shadow-2xs"
          >
            <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
            <span>Doorstep Verification across Bengaluru · Delhi NCR · Mumbai</span>
          </motion.div>

          {/* Main Headline (Sans bold + Italic Serif in brand navy) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="text-4xl sm:text-6xl xl:text-[4.25rem] font-bold text-[#0F172A] tracking-tight leading-[1.08]">
              Official agreements. <br />
              <span
                className="font-serif italic font-normal text-[#2B2E8F] inline-block mt-1 sm:mt-1.5"
                style={{ fontFamily: "var(--font-serif), 'Newsreader', Georgia, serif" }}
              >
                Without the waiting line.
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-[#334155] max-w-xl font-normal leading-relaxed"
          >
            Registered rent agreements, notarised affidavits, and property documentation — drafted accurately, verified with UIDAI biometrics, and delivered to your doorstep within 48 hours.
          </motion.p>

          {/* Action Pill Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1"
          >
            {/* Primary Pill Button */}
            <button
              onClick={onStartAgreement}
              className="px-7 py-4 rounded-full font-semibold text-sm sm:text-base text-white bg-[#1F216B] hover:bg-[#14164F] shadow-md hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer group"
            >
              <span>Create Your Agreement</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Secondary Outlined Pill Button */}
            <button
              onClick={onOpenAllServices}
              className="px-6 py-4 rounded-full font-semibold text-sm sm:text-base text-[#1F216B] bg-white/90 hover:bg-white border border-[#CCD4E6] hover:border-[#1F216B] shadow-2xs transition-all duration-200 flex items-center justify-center cursor-pointer backdrop-blur-sm"
            >
              <span>Explore All Documentation</span>
            </button>
          </motion.div>

          {/* Stats Counter Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="pt-4 sm:pt-6 grid grid-cols-3 gap-4 sm:gap-8 max-w-lg border-t border-[#CBD5E1]"
          >
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
                5,000<sup className="text-base sm:text-lg font-bold text-[#2B2E8F]">+</sup>
              </div>
              <div className="text-[10px] sm:text-xs font-bold text-[#64748B] tracking-wider uppercase mt-0.5">
                REGISTERED AGREEMENTS
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
                48<span className="text-sm sm:text-base font-normal text-[#475569] ml-1">hrs</span>
              </div>
              <div className="text-[10px] sm:text-xs font-bold text-[#64748B] tracking-wider uppercase mt-0.5">
                DOORSTEP TURNAROUND
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight flex items-center gap-1">
                4.9 <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-[#D2AC65] text-[#D2AC65]" />
              </div>
              <div className="text-[10px] sm:text-xs font-bold text-[#64748B] tracking-wider uppercase mt-0.5">
                CUSTOMER SATISFACTION
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
