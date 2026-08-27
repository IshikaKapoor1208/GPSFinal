"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Fingerprint,
  FileCheck2,
  Clock,
  Award,
  Lock,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

interface AboutSectionProps {
  onRequestCallback: () => void;
}

export default function AboutSection({ onRequestCallback }: AboutSectionProps) {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "100% Government Compliant",
      desc: "Every agreement is processed with verified stamp duty, registration fees, and official receipt from the sub-registrar office.",
    },
    {
      icon: Fingerprint,
      title: "Doorstep Biometric Verification",
      desc: "No standing in long government office queues. Our verified executives visit your location with UIDAI-approved biometric devices.",
    },
    {
      icon: Clock,
      title: "Fast 24 to 48 Hour Turnaround",
      desc: "Drafting, reviewing, biometric verification, and government registration executed with speed and transparency.",
    },
    {
      icon: Lock,
      title: "Bank-Grade Data Security",
      desc: "Your Aadhaar, PAN, and property details are processed over encrypted channels and never shared with third parties.",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-white relative border-t border-[#E2E6EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#B88E44] block">
              ABOUT GO PRIME SERVICES
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#0F172A] tracking-tight leading-tight">
              Making Legal Documentation{" "}
              <span
                className="font-serif italic font-normal text-[#2B2E8F]"
                style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
              >
                Simple, Transparent &amp; Accessible
              </span>
            </h2>
            <p className="text-base sm:text-lg text-[#555D75] leading-relaxed">
              At Go Prime Services, we eliminate the complexity, confusion, and endless visits to government registrar offices. Our mission is to provide landlords, tenants, property buyers, and businesses with a hassle-free, legally verified documentation experience right at their doorstep.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={onRequestCallback}
                className="px-6 py-3.5 rounded-full font-bold text-xs sm:text-sm text-white bg-[#1F216B] hover:bg-[#14164F] shadow-md transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Speak to Documentation Specialist</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>

              <a
                href="https://wa.me/919876543210?text=Hi%20Go%20Prime%20Services,%20I%20would%20like%20to%20learn%20more%20about%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full font-bold text-xs sm:text-sm text-[#1F216B] bg-[#F8FAFC] hover:bg-white border border-[#E2E6EE] transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] fill-current" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Highlight Box */}
          <div className="lg:col-span-5 bg-[#F8FAFC] rounded-3xl p-8 sm:p-10 border border-[#E2E6EE] shadow-xs relative">
            <div className="w-12 h-12 rounded-2xl bg-[#EEF2FB] text-[#1F216B] flex items-center justify-center mb-6">
              <Award className="w-6 h-6 text-[#1F216B]" />
            </div>
            <h3 className="text-2xl font-bold text-[#0F172A] mb-3">
              Why Thousands Trust Go Prime
            </h3>
            <p className="text-xs sm:text-sm text-[#555D75] leading-relaxed mb-6">
              From individual tenants and home owners to corporate real estate firms, we manage the end-to-end documentation lifecycle with 100% legal validity.
            </p>

            <div className="space-y-2.5 text-xs text-[#0F172A] font-semibold">
              <div className="flex items-center gap-2">
                <FileCheck2 className="w-4 h-4 text-[#D2AC65]" />
                <span>Over 1,000+ Agreements successfully registered</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCheck2 className="w-4 h-4 text-[#D2AC65]" />
                <span>Doorstep biometric verification across all major localities</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCheck2 className="w-4 h-4 text-[#D2AC65]" />
                <span>Dedicated legal drafting &amp; review desk</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="bg-[#F8FAFC]/80 rounded-3xl p-6 border border-[#E2E6EE] hover:border-[#D2AC65]/60 transition-all hover:scale-[1.02]"
              >
                <div className="w-11 h-11 rounded-2xl bg-white border border-[#E2E6EE] flex items-center justify-center mb-4 text-[#1F216B] shadow-2xs">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-[#0F172A] mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-[#555D75] leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
