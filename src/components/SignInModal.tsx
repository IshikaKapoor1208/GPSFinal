"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Phone,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Logo from "@/components/Logo";

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTrackOrder: () => void;
}

export default function SignInModal({
  isOpen,
  onClose,
  onOpenTrackOrder,
}: SignInModalProps) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [signedIn, setSignedIn] = useState(false);

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOtpSent(true);
    }, 600);
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSignedIn(true);
    }, 600);
  };

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
          className="relative w-full max-w-md bg-[#F8FAFC] border border-[#E2E6EE] rounded-3xl shadow-2xl overflow-hidden z-10 p-6 sm:p-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white border border-[#E2E6EE] text-[#0F172A] hover:bg-[#1F216B] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close sign in modal"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Logo / Header */}
          <div className="text-center mb-6">
            <Logo size="sm" className="justify-center mb-4" />
            <h3 className="text-2xl font-bold text-[#0F172A]">
              {signedIn ? "Welcome Back!" : otpSent ? "Enter 4-Digit OTP" : "Sign In to Go Prime"}
            </h3>
            <p className="text-xs text-[#555D75] mt-1 max-w-xs mx-auto">
              {signedIn
                ? "You have successfully signed in."
                : otpSent
                ? `Enter the verification code sent to +91 ${phoneNumber}`
                : "Manage your registered agreements, download e-stamps, and track drafts."}
            </p>
          </div>

          {signedIn ? (
            <div className="text-center py-4 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#1F216B] text-white flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-8 h-8 text-emerald-400" />
              </div>
              <p className="text-xs font-bold text-[#0F172A]">
                Logged in as +91 {phoneNumber}
              </p>
              <button
                onClick={onClose}
                className="w-full py-3 rounded-full font-bold text-xs text-white bg-[#1F216B] hover:bg-[#14164F] shadow-sm transition-all"
              >
                Go to Dashboard
              </button>
            </div>
          ) : !otpSent ? (
            <form onSubmit={handleSendOtp} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1.5">
                  Mobile Number *
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-3.5 text-xs font-bold text-[#828DA4]">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    placeholder="98765 43210"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full bg-white border border-[#E2E6EE] focus:border-[#1F216B] rounded-2xl pl-12 pr-4 py-3 text-sm text-[#0F172A] placeholder:text-[#828DA4] focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-full font-bold text-sm text-white bg-[#1F216B] hover:bg-[#14164F] shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {loading ? "Sending OTP..." : "Get OTP →"}
              </button>

              <div className="pt-2 text-center">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenTrackOrder();
                  }}
                  className="text-xs text-[#555D75] hover:text-[#1F216B] font-semibold underline cursor-pointer"
                >
                  Just want to track an existing order? Click here
                </button>
              </div>
            </form>
          ) : (
            <form onSubmit={handleVerifyOtp} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1.5">
                  Enter OTP *
                </label>
                <input
                  type="text"
                  maxLength={6}
                  required
                  placeholder="e.g. 5821"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full bg-white border border-[#E2E6EE] focus:border-[#1F216B] rounded-2xl px-4 py-3 text-center text-lg tracking-widest font-mono text-[#0F172A] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-full font-bold text-sm text-white bg-[#1F216B] hover:bg-[#14164F] shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {loading ? "Verifying..." : "Verify & Sign In"}
              </button>

              <div className="flex justify-between text-xs text-[#555D75]">
                <button
                  type="button"
                  onClick={() => setOtpSent(false)}
                  className="hover:underline cursor-pointer"
                >
                  Change number
                </button>
                <button
                  type="button"
                  onClick={handleSendOtp}
                  className="text-[#1F216B] font-bold hover:underline cursor-pointer"
                >
                  Resend OTP
                </button>
              </div>
            </form>
          )}

          <div className="mt-6 pt-4 border-t border-[#E2E6EE] flex items-center justify-center gap-2 text-[11px] text-[#828DA4]">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Secure 256-bit encrypted authentication</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
