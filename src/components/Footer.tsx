"use client";

import React from "react";
import {
  MessageCircle,
  Mail,
  Phone,
  ArrowUp,
  ShieldCheck,
  MapPin,
  Clock,
} from "lucide-react";
import Logo from "@/components/Logo";

interface FooterProps {
  onStartAgreement: () => void;
  onOpenAllServices: () => void;
  onOpenTrackOrder: () => void;
}

export default function Footer({
  onStartAgreement,
  onOpenAllServices,
  onOpenTrackOrder,
}: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0F103A] text-white pt-16 pb-12 border-t border-[#1F216B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Callout Strip */}
        <div className="bg-[#14164F] border border-[#2B2E8F] rounded-3xl p-7 sm:p-9 mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#D2AC65] block mb-1">
              Zero Office Visits Guaranteed
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Complete Your Rent Agreement with Ease
            </h3>
            <p className="text-xs sm:text-sm text-white/70 mt-1 max-w-xl">
              Simple documentation, doorstep convenience, reliable service, and customer satisfaction.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <a
              href="https://wa.me/919421215055?text=Hi%20Go%20Prime%20Services,%20I%20would%20like%20to%20register%20a%20legal%20document"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm text-white bg-[#25D366] hover:bg-[#1EBE5D] shadow-sm flex items-center gap-2 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Us</span>
            </a>

            <button
              suppressHydrationWarning
              onClick={onStartAgreement}
              className="px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm text-[#0F103A] bg-[#F8FAFC] hover:bg-white shadow-sm flex items-center gap-2 cursor-pointer transition-all"
            >
              <span>Request Call Back</span>
            </button>
          </div>
        </div>

        {/* Main Footer Directory Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <Logo size="md" variant="light" />
            <p className="text-xs text-white/70 leading-relaxed max-w-xs">
              Go Prime Services provides government and private services from the comfort of your home as a Common Service Centre under the Digital India program.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#D2AC65] font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Government Valid &amp; Registered</span>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-xs font-bold text-[#D2AC65] uppercase tracking-wider mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-xs text-white/80">
              <li>
                <a href="#services" className="hover:text-[#D2AC65] transition-colors">
                  Registered Rent Agreement
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D2AC65] transition-colors">
                  Notarized Rent Agreement
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D2AC65] transition-colors">
                  Partnership Deed Registration
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D2AC65] transition-colors">
                  Court Marriage &amp; Registered Marriage
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D2AC65] transition-colors">
                  Passport, PAN &amp; Aadhaar Services
                </a>
              </li>
              <li>
                <button
                  suppressHydrationWarning
                  onClick={onOpenAllServices}
                  className="text-[#D2AC65] hover:underline font-bold cursor-pointer pt-1"
                >
                  View All Services Catalog
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Links & Locations */}
          <div>
            <h4 className="text-xs font-bold text-[#D2AC65] uppercase tracking-wider mb-4">
              Quick Links &amp; Coverage
            </h4>
            <ul className="space-y-2.5 text-xs text-white/80">
              <li>
                <a href="#home" className="hover:text-[#D2AC65] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-[#D2AC65] transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <button
                  suppressHydrationWarning
                  onClick={onOpenTrackOrder}
                  className="hover:text-[#D2AC65] transition-colors cursor-pointer text-left"
                >
                  Track Order Status
                </button>
              </li>
              <li>
                <a href="#faqs" className="hover:text-[#D2AC65] transition-colors">
                  FAQs
                </a>
              </li>
              <li className="pt-2 text-[11px] text-white/50">
                <span className="text-[#D2AC65] font-semibold block mb-0.5">Coverage Cities:</span>
                Maharashtra, with doorstep biometric verification across India and worldwide
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div>
            <h4 className="text-xs font-bold text-[#D2AC65] uppercase tracking-wider mb-4">
              Contact Legal Desk
            </h4>
            <ul className="space-y-3 text-xs text-white/80">
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <a
                  href="https://wa.me/919421215055"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D2AC65]"
                >
                  +91 94212 15055 (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D2AC65]" />
                <a href="tel:+919421215055" className="hover:text-[#D2AC65]">
                  +91 94212 15055
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D2AC65]" />
                <a href="mailto:contactgoprimeservices@gmail.com" className="hover:text-[#D2AC65]">
                  contactgoprimeservices@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#D2AC65] flex-shrink-0 mt-0.5" />
                <span>Mon - Sat: 9:00 AM - 8:00 PM (Doorstep Biometric by appointment)</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div>
            &copy; {new Date().getFullYear()} Go Prime Services. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-[#D2AC65]">
              100% Legally Valid &amp; Government Compliant Registration
            </span>
            <button
              suppressHydrationWarning
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#D2AC65]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
