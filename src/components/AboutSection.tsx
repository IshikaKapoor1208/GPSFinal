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
} from "lucide-react";
import WhatsappIcon from "@/components/WhatsappIcon";

interface AboutSectionProps {
  onRequestCallback: () => void;
}

export default function AboutSection({ onRequestCallback }: AboutSectionProps) {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "Government-Compliant Registration",
      desc: "We prepare and register rent agreements in accordance with applicable laws and Government of Maharashtra guidelines.",
    },
    {
      icon: Fingerprint,
      title: "Doorstep Biometric Service",
      desc: "Complete biometric verification at your home, office, or preferred location across India and worldwide.",
    },
    {
      icon: Clock,
      title: "Fast & Hassle-Free Process",
      desc: "From document collection to final registration, we handle the process efficiently with minimal paperwork.",
    },
    {
      icon: Lock,
      title: "Secure Documentation",
      desc: "Your personal information and documents are handled with strict confidentiality and secure processing.",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-white relative border-t border-[#E2E6EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#B88E44] block">
              ABOUT US
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#0F172A] tracking-tight leading-tight">
              Government & Private Services{" "}
              <span
                className="font-serif italic font-normal text-[#2B2E8F]"
                style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
              >
                At Your Doorstep
              </span>
            </h2>
            <p className="text-base sm:text-lg text-[#555D75] leading-relaxed">
              For the past 5 years, we have been providing citizens with various government and private services from the comfort of their homes. As a Common Service Centre under the Digital India program, our mission is to ensure every citizen gets as many services as possible at home.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                suppressHydrationWarning
                onClick={onRequestCallback}
                className="px-6 py-3.5 rounded-full font-bold text-xs sm:text-sm text-white bg-[#1F216B] hover:bg-[#14164F] shadow-md transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Request Call Back</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>

              <a
                href="https://wa.me/919421215055?text=Hi%20Go%20Prime%20Services,%20I%20would%20like%20to%20learn%20more%20about%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full font-bold text-xs sm:text-sm text-[#1F216B] bg-[#F8FAFC] hover:bg-white border border-[#E2E6EE] transition-all flex items-center gap-2"
              >
                <WhatsappIcon size={16} color="#25D366" strokeWidth={2} />
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
              Why Choose Go Prime
            </h3>
            <p className="text-xs sm:text-sm text-[#555D75] leading-relaxed mb-6">
              We are always ready to fulfill your small and big needs with transparent services in less time. Your service, our responsibility.
            </p>

            <div className="space-y-2.5 text-xs text-[#0F172A] font-semibold">
              <div className="flex items-center gap-2">
                <FileCheck2 className="w-4 h-4 text-[#D2AC65]" />
                <span>1000+ happy customers have joined hands with us</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCheck2 className="w-4 h-4 text-[#D2AC65]" />
                <span>Doorstep biometric verification across India and worldwide</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCheck2 className="w-4 h-4 text-[#D2AC65]" />
                <span>Transparent pricing, expert assistance, and end-to-end support</span>
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
