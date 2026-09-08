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
  IdCard,
  Car,
  Utensils,
  Store,
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
      title: "Notarized Rent Agreement",
      category: "Rental & Tenancy",
      icon: FileSignature,
      desc: "Get a professionally drafted and notarized rent agreement for your rental needs.",
      badge: "Notary",
    },
    {
      title: "Partnership Deed Registration",
      category: "Business Documentation",
      icon: Building2,
      desc: "Draft and register partnership deeds with complete legal documentation support.",
      badge: "Business",
    },
    {
      title: "Court Marriage & Registered Marriage",
      category: "Marriage Registration",
      icon: FileBadge,
      desc: "End-to-end assistance for court marriage and marriage registration documentation.",
      badge: "Marriage",
    },
    {
      title: "Passport (New & Renewal)",
      category: "Identity Services",
      icon: IdCard,
      desc: "Apply for a new passport or renew your existing passport with expert guidance.",
      badge: "Passport",
    },
    {
      title: "New PAN Card & PAN Updates",
      category: "Identity Services",
      icon: IdCard,
      desc: "Apply for a new PAN card or update your name, photo, address, or other details.",
      badge: "PAN",
    },
    {
      title: "PAN-Aadhaar Linking",
      category: "Compliance",
      icon: ShieldAlert,
      desc: "Link your PAN with Aadhaar quickly to ensure compliance with government requirements.",
      badge: "Compliance",
    },
    {
      title: "Aadhaar Card Duplicate / Reprint",
      category: "Identity Services",
      icon: IdCard,
      desc: "Apply for a duplicate or PVC Aadhaar card with a simple and hassle-free process.",
      badge: "Aadhaar",
    },
    {
      title: "Voter ID (New Registration & Updates)",
      category: "Identity Services",
      icon: IdCard,
      desc: "Register for a new Voter ID or update existing details such as name, address, or photo.",
      badge: "Voter ID",
    },
    {
      title: "Driving Licence Name & Address Change",
      category: "Vehicle Services",
      icon: Car,
      desc: "Update your driving licence details accurately with complete documentation assistance.",
      badge: "Licence",
    },
    {
      title: "Electricity Bill Name Correction",
      category: "Utility Services",
      icon: Home,
      desc: "Transfer or correct the name on your electricity bill with expert support.",
      badge: "Utility",
    },
    {
      title: "Choice Number for Vehicles",
      category: "Vehicle Services",
      icon: Car,
      desc: "Book your preferred vehicle registration number through the official process.",
      badge: "Fancy No.",
    },
    {
      title: "HSRP Number Plate Booking",
      category: "Vehicle Services",
      icon: Car,
      desc: "Book High Security Registration Plates for your vehicle with ease.",
      badge: "HSRP",
    },
    {
      title: "Gazette Name Change",
      category: "Legal Documentation",
      icon: ScrollText,
      desc: "Complete your official name change process through Gazette publication.",
      badge: "Gazette",
    },
    {
      title: "Digital 7/12 & 8A Documents",
      category: "Land Records",
      icon: Scale,
      desc: "Obtain certified digital land records including 7/12 extract and 8A documents.",
      badge: "Land",
    },
    {
      title: "Udyam Registration (MSME)",
      category: "Business Documentation",
      icon: Building2,
      desc: "Register your business under Udyam (MSME) to avail government benefits and schemes.",
      badge: "MSME",
    },
    {
      title: "Food License (FSSAI)",
      category: "Business Licenses",
      icon: Utensils,
      desc: "Get assistance in obtaining or renewing your FSSAI Food License for your business.",
      badge: "FSSAI",
    },
    {
      title: "Shop Act License",
      category: "Business Licenses",
      icon: Store,
      desc: "Register your business under the Shop and Establishment Act quickly and compliantly.",
      badge: "Shop Act",
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
                  Our Services
                </h3>
                <p className="text-xs sm:text-sm text-[#555D75] mt-1">
                  Choose a government or private service to request doorstep assistance.
                </p>
              </div>

              <button
                suppressHydrationWarning
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
                        href={`https://wa.me/919421215055?text=${encodeURIComponent(
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
                        suppressHydrationWarning
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
              <span>100% transparent doorstep service and government-compliant support</span>
              <a
                href="https://wa.me/919421215055?text=Hi%20Go%20Prime%20Services,%20I%20have%20a%20custom%20documentation%20requirement"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#1F216B] hover:text-[#D2AC65] underline"
              >
                Need help with another service? Contact us on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
