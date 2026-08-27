"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  FileCheck,
  Home,
  Shield,
  FileSignature,
  FileBadge,
  PackageSearch,
  HelpCircle,
  LogIn,
} from "lucide-react";
import Logo from "@/components/Logo";

interface NavbarProps {
  onStartAgreement: () => void;
  onOpenAllServices: () => void;
  onOpenTrackOrder: () => void;
  onOpenSignIn: () => void;
  visible?: boolean;
}

export default function Navbar({
  onStartAgreement,
  onOpenAllServices,
  onOpenTrackOrder,
  onOpenSignIn,
  visible = true,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [signInDropdownOpen, setSignInDropdownOpen] = useState(false);

  const quickServices = [
    { name: "Registered Rent Agreement", href: "#services", icon: FileCheck },
    { name: "Lease Agreement", href: "#services", icon: Home },
    { name: "Affidavit & Notary Services", href: "#services", icon: Shield },
    { name: "Police Verification", href: "#services", icon: FileSignature },
    { name: "Sale Deed & PoA", href: "#services", icon: FileBadge },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 bg-[#F8FAFC]/90 backdrop-blur-md border-b border-[#E2E6EE] transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 group cursor-pointer focus:outline-none"
            aria-label="Go Prime Services Home"
          >
            <Logo size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#0F172A]">
            
            {/* Services with Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <a
                href="#services"
                className="py-2 transition-colors hover:text-[#1F216B] font-medium flex items-center gap-1 cursor-pointer text-[#334155]"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesDropdownOpen ? "rotate-180 text-[#1F216B]" : "text-[#64748B]"
                  }`}
                />
              </a>

              <AnimatePresence>
                {servicesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-1 w-72 bg-white border border-[#E2E6EE] rounded-2xl shadow-xl p-2 z-50"
                  >
                    <div className="space-y-1">
                      {quickServices.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                          <a
                            key={idx}
                            href={item.href}
                            onClick={() => setServicesDropdownOpen(false)}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#F8FAFC] text-xs font-semibold text-[#0F172A] transition-colors"
                          >
                            <div className="w-7 h-7 rounded-lg bg-[#EEF2FB] flex items-center justify-center text-[#1F216B]">
                              <Icon className="w-3.5 h-3.5" />
                            </div>
                            <span>{item.name}</span>
                          </a>
                        );
                      })}
                    </div>

                    <div className="pt-2 mt-1 border-t border-[#E2E6EE]">
                      <button
                        onClick={() => {
                          setServicesDropdownOpen(false);
                          onOpenAllServices();
                        }}
                        className="w-full text-center py-2 text-xs font-bold text-[#1F216B] hover:text-[#D2AC65] flex items-center justify-center gap-1 cursor-pointer"
                      >
                        <span>View All Services</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* How It Works */}
            <a
              href="#how-it-works"
              className="py-2 transition-colors hover:text-[#1F216B] font-medium text-[#334155]"
            >
              <span>How it works</span>
            </a>

            {/* Track Order */}
            <button
              onClick={onOpenTrackOrder}
              className="py-2 transition-colors hover:text-[#1F216B] font-medium text-[#334155] flex items-center gap-1.5 cursor-pointer"
            >
              <PackageSearch className="w-3.5 h-3.5 text-[#64748B]" />
              <span>Track order</span>
            </button>

            {/* FAQs */}
            <a
              href="#faqs"
              className="py-2 transition-colors hover:text-[#1F216B] font-medium text-[#334155] flex items-center gap-1.5"
            >
              <span>FAQs</span>
            </a>
          </nav>

          {/* Right Header Actions: Sign In + Get Started Button */}
          <div className="hidden lg:flex items-center gap-4">
            
            {/* Sign In Dropdown Trigger */}
            <div
              className="relative"
              onMouseEnter={() => setSignInDropdownOpen(true)}
              onMouseLeave={() => setSignInDropdownOpen(false)}
            >
              <button
                onClick={onOpenSignIn}
                className="py-2 px-2 text-sm font-medium text-[#0F172A] hover:text-[#1F216B] flex items-center gap-1 cursor-pointer"
              >
                <span>Sign in</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#64748B]" />
              </button>

              <AnimatePresence>
                {signInDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full right-0 mt-1 w-48 bg-white border border-[#E2E6EE] rounded-2xl shadow-xl p-2 z-50"
                  >
                    <button
                      onClick={() => {
                        setSignInDropdownOpen(false);
                        onOpenSignIn();
                      }}
                      className="w-full text-left px-3 py-2 rounded-xl text-xs font-semibold text-[#0F172A] hover:bg-[#F8FAFC] flex items-center gap-2 cursor-pointer"
                    >
                      <LogIn className="w-3.5 h-3.5 text-[#1F216B]" />
                      <span>Customer Sign In</span>
                    </button>
                    <button
                      onClick={() => {
                        setSignInDropdownOpen(false);
                        onOpenTrackOrder();
                      }}
                      className="w-full text-left px-3 py-2 rounded-xl text-xs font-semibold text-[#0F172A] hover:bg-[#F8FAFC] flex items-center gap-2 cursor-pointer"
                    >
                      <PackageSearch className="w-3.5 h-3.5 text-[#D2AC65]" />
                      <span>Track by Phone / Order</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Book Service Navy Pill Button */}
            <button
              onClick={onStartAgreement}
              className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-[#1F216B] hover:bg-[#14164F] text-white text-sm font-semibold shadow-xs hover:shadow-md transition-all cursor-pointer group"
            >
              <span>Book Service</span>
              <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Hamburger Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onStartAgreement}
              className="px-4 py-2 rounded-full bg-[#1F216B] text-white text-xs font-semibold"
            >
              Book Service
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-full bg-white border border-[#E2E6EE] text-[#0F172A] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-b border-[#E2E6EE] px-4 pt-3 pb-6 shadow-xl"
          >
            <div className="flex flex-col gap-1.5">
              <a
                href="#home"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-semibold text-[#0F172A] hover:bg-[#F8FAFC]"
              >
                Home
              </a>
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-semibold text-[#0F172A] hover:bg-[#F8FAFC]"
              >
                Services
              </a>
              <a
                href="#how-it-works"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-semibold text-[#0F172A] hover:bg-[#F8FAFC]"
              >
                How it works
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTrackOrder();
                }}
                className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold text-[#0F172A] hover:bg-[#F8FAFC] flex items-center gap-2 cursor-pointer"
              >
                <PackageSearch className="w-4 h-4 text-[#64748B]" />
                <span>Track order</span>
              </button>
              <a
                href="#faqs"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-semibold text-[#0F172A] hover:bg-[#F8FAFC]"
              >
                FAQs
              </a>

              <div className="pt-3 mt-2 border-t border-[#E2E6EE] flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenSignIn();
                  }}
                  className="w-full py-3 rounded-full font-semibold text-sm text-[#0F172A] bg-[#F8FAFC] border border-[#E2E6EE] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <LogIn className="w-4 h-4 text-[#1F216B]" />
                  <span>Sign In</span>
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onStartAgreement();
                  }}
                  className="w-full py-3 rounded-full font-semibold text-sm text-white bg-[#1F216B] flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Book Documentation Service</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
