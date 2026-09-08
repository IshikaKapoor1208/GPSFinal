"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  PackageSearch,
  CheckCircle2,
  Clock,
  Truck,
  FileCheck2,
  Fingerprint,
  Stamp,
  Phone,
  MessageCircle,
} from "lucide-react";
import Logo from "@/components/Logo";

interface TrackOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TrackOrderModal({
  isOpen,
  onClose,
}: TrackOrderModalProps) {
  const [orderQuery, setOrderQuery] = useState("");
  const [searched, setSearched] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderQuery.trim()) return;

    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      setSearched(true);
    }, 500);
  };

  const steps = [
    { title: "Draft Prepared & Approved", time: "25 Aug, 04:30 PM", done: true, icon: FileCheck2 },
    { title: "E-Stamp & Notary Endorsement", time: "26 Aug, 10:15 AM", done: true, icon: Stamp },
    { title: "Doorstep Biometric Verification", time: "26 Aug, 02:30 PM", done: true, icon: Fingerprint },
    { title: "Sub-Registrar Digital Filing", time: "In Progress", done: false, active: true, icon: Clock },
    { title: "Doorstep Courier Dispatch", time: "Estimated: Tomorrow", done: false, icon: Truck },
  ];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-xs"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-lg bg-[#F8FAFC] border border-[#E2E6EE] rounded-3xl shadow-2xl overflow-hidden z-10 p-6 sm:p-8"
        >
          {/* Close Button */}
          <button
            suppressHydrationWarning
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white border border-[#E2E6EE] text-[#0F172A] hover:bg-[#1F216B] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close track order modal"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Header */}
          <div className="mb-6">
            <Logo size="sm" className="mb-4" />
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF2FB] text-[#1F216B] text-xs font-bold uppercase tracking-wider mb-2">
              <PackageSearch className="w-3.5 h-3.5" />
              <span>Live Order Tracker</span>
            </div>
            <h3
              className="text-2xl sm:text-3xl font-bold text-[#0F172A]"
            >
              Track Your Document
            </h3>
            <p className="text-xs sm:text-sm text-[#555D75] mt-1">
              Enter your registered mobile number or Order ID to see real-time verification and dispatch status.
            </p>
          </div>

          {/* Search Input Form */}
          <form suppressHydrationWarning onSubmit={handleTrack} className="mb-6">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <input
                  suppressHydrationWarning
                  type="text"
                  required
                  placeholder="e.g. 9876543210 or GP-8942"
                  value={orderQuery}
                  onChange={(e) => setOrderQuery(e.target.value)}
                  className="w-full bg-white border border-[#E2E6EE] focus:border-[#1F216B] focus:ring-1 focus:ring-[#1F216B] rounded-2xl px-4 py-3 text-sm text-[#0F172A] placeholder:text-[#828DA4] focus:outline-none transition-colors"
                />
              </div>
              <button
                suppressHydrationWarning
                type="submit"
                disabled={isSearching}
                className="px-6 py-3 rounded-2xl font-bold text-xs sm:text-sm text-white bg-[#1F216B] hover:bg-[#14164F] shadow-sm transition-all cursor-pointer disabled:opacity-50"
              >
                {isSearching ? "Searching..." : "Track"}
              </button>
            </div>
          </form>

          {/* Result Tracker Timeline */}
          {searched ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl p-5 border border-[#E2E6EE] space-y-4"
            >
              <div className="flex items-center justify-between border-b border-[#F8FAFC] pb-3">
                <div>
                  <span className="text-[10px] font-mono text-[#828DA4] uppercase">Order ID: #GP-8942</span>
                  <h4 className="text-sm font-bold text-[#0F172A]">Registered Rental Agreement</h4>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#EEF2FB] text-[#1F216B] text-[11px] font-bold">
                  In Progress
                </span>
              </div>

              {/* Steps Progress List */}
              <div className="space-y-4 pt-1">
                {steps.map((st, i) => {
                  const Icon = st.icon;
                  return (
                    <div key={i} className="flex items-start gap-3 relative">
                      {/* Left indicator */}
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center text-xs ${
                            st.done
                              ? "bg-[#1F216B] text-white"
                              : st.active
                              ? "bg-[#D2AC65] text-white animate-pulse"
                              : "bg-[#EDF1F7] text-[#828DA4]"
                          }`}
                        >
                          {st.done ? <CheckCircle2 className="w-4 h-4" /> : <Icon className="w-3.5 h-3.5" />}
                        </div>
                        {i < steps.length - 1 && (
                          <div
                            className={`w-0.5 h-6 mt-1 ${
                              st.done ? "bg-[#1F216B]" : "bg-[#E2E6EE]"
                            }`}
                          />
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h5 className={`text-xs font-bold ${st.active ? "text-[#1F216B]" : "text-[#0F172A]"}`}>
                          {st.title}
                        </h5>
                        <span className="text-[10px] text-[#828DA4]">{st.time}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Delivery ETA Alert */}
              <div className="mt-4 p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E6EE] flex items-center justify-between text-xs">
                <span className="text-[#555D75]">Doorstep Delivery by:</span>
                <strong className="text-[#1F216B]">28 Aug (Within 48 Hours)</strong>
              </div>
            </motion.div>
          ) : (
            <div className="text-center py-6 px-4 bg-white/60 rounded-2xl border border-[#E2E6EE]/60">
              <p className="text-xs text-[#555D75]">
                💡 Tip: You can also track updates instantly by messaging our team on WhatsApp with your name and address.
              </p>
              <a
                href="https://wa.me/919421215055?text=Hi%20Go%20Prime%20Services,%20I%20would%20like%20to%20track%20my%20document%20order"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-[#1F216B] hover:text-[#D2AC65] underline"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>Track on WhatsApp →</span>
              </a>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
