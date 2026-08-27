"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  FileCheck,
  ShieldAlert,
  FileSignature,
  Building2,
  FileBadge,
  ScrollText,
  Home,
  Scale,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import Logo from "@/components/Logo";

interface AllServicesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectService?: (serviceName: string) => void;
}

export default function AllServicesModal({
  isOpen,
  onClose,
  onSelectService,
}: AllServicesModalProps) {
  const allServices = [
    {
      title: "Registered Rent Agreement",
      category: "Rental & Tenancy",
      icon: FileCheck,
      desc: "Legally valid, government-registered rent agreements with doorstep biometric verification and stamp duty calculation.",
      badge: "Most Popular",
    },
    {
      title: "Police Verification",
      category: "Verification",
      icon: ShieldAlert,
      desc: "Comprehensive tenant, domestic staff, and employee police background verification for total peace of mind.",
      badge: "Quick 24h",
    },
    {
      title: "Leave & License Agreement",
      category: "Rental & Tenancy",
      icon: FileSignature,
      desc: "Drafting and official government registration of Leave & License agreements for commercial and residential properties.",
      badge: "Standard",
    },
    {
      title: "Sale Deed Documentation",
      category: "Property & Real Estate",
      icon: Building2,
      desc: "End-to-end drafting, indexing, stamp duty assistance, and sub-registrar registration for property purchases.",
      badge: "High Value",
    },
    {
      title: "Power of Attorney (PoA)",
      category: "Legal & Authorization",
      icon: FileBadge,
      desc: "General Power of Attorney (GPA) and Special Power of Attorney (SPA) drafting, notarization, and registration.",
      badge: "Legal",
    },
    {
      title: "Gift Deed & Will Registration",
      category: "Estate & Succession",
      icon: ScrollText,
      desc: "Legally compliant drafting of Gift Deeds, Wills, and Codicils with witness coordination and sub-registrar filing.",
      badge: "Confidential",
    },
    {
      title: "Society NOC & Transfer",
      category: "Housing Societies",
      icon: Home,
      desc: "Preparation of society share certificate transfers, associate membership applications, and NOC documentation.",
      badge: "Housing",
    },
    {
      title: "Title Verification & Search Report",
      category: "Property & Real Estate",
      icon: Scale,
      desc: "30-year property title verification, search report from registrar archives, and encumbrance certification.",
      badge: "Due Diligence",
    },
  ];

  const handleInquire = (serviceName: string) => {
    if (onSelectService) {
      onSelectService(serviceName);
    }
    onClose();
  };

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

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-[#F8FAFC] border border-[#E2E6EE] rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col"
          >
            {/* Header */}
            <div className="p-6 sm:p-8 border-b border-[#E2E6EE] bg-white/70 backdrop-blur-xs flex items-center justify-between relative">
              <div>
                <Logo size="sm" className="mb-3" />
                <span className="text-[11px] font-bold tracking-widest uppercase text-[#B88E44] block mb-1">
                  Complete Catalog
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#0F172A]">
                  All Documentation Services
                </h3>
                <p className="text-xs sm:text-sm text-[#555D75] mt-1">
                  Choose a service to speak with a documentation specialist or request doorstep assistance.
                </p>
              </div>

              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-white border border-[#E2E6EE] text-[#0F172A] hover:bg-[#1F216B] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Service Grid Body */}
            <div className="p-6 sm:p-8 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
              {allServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="p-5 rounded-2xl bg-white border border-[#E2E6EE] hover:border-[#1F216B] hover:shadow-md transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-10 h-10 rounded-xl bg-[#EEF2FB] text-[#1F216B] flex items-center justify-center group-hover:bg-[#1F216B] group-hover:text-white transition-colors">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#F8FAFC] border border-[#E2E6EE] text-[#555D75]">
                          {service.badge}
                        </span>
                      </div>

                      <h4 className="text-base font-bold text-[#0F172A] mb-1.5 group-hover:text-[#1F216B] transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-xs text-[#555D75] leading-relaxed mb-4">
                        {service.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#F8FAFC] flex items-center justify-between">
                      <a
                        href={`https://wa.me/919876543210?text=${encodeURIComponent(
                          `Hello Go Prime Services! I would like to inquire about ${service.title}.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#25D366] hover:text-[#1EBE5D]"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-current" />
                        <span>WhatsApp</span>
                      </a>

                      <button
                        onClick={() => handleInquire(service.title)}
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#1F216B] hover:text-[#D2AC65] transition-colors cursor-pointer"
                      >
                        <span>Book Service</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer */}
            <div className="p-4 sm:p-6 border-t border-[#E2E6EE] bg-white flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#555D75]">
              <span>🛡️ 100% Legally Compliant &amp; Government Registered</span>
              <a
                href="https://wa.me/919876543210?text=Hi%20Go%20Prime%20Services,%20I%20have%20a%20custom%20documentation%20requirement"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#1F216B] hover:text-[#D2AC65] underline"
              >
                Custom documentation need? Contact us on WhatsApp →
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
