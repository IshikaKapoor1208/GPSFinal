"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  ShieldCheck,
  Fingerprint,
  Stamp,
  CheckCircle2,
  Download,
  Share2,
  Video,
  FileText,
  Volume2,
  VolumeX,
  Play,
  Pause,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { HERO_VIDEOS } from "@/components/BackgroundVideoPlayer";
import Logo from "@/components/Logo";

interface DocumentZoomModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartAgreement?: () => void;
  initialTab?: "document" | "video";
  initialVideoIndex?: number;
}

export default function DocumentZoomModal({
  isOpen,
  onClose,
  onStartAgreement,
  initialTab = "document",
  initialVideoIndex = 0,
}: DocumentZoomModalProps) {
  const [activeTab, setActiveTab] = useState<"document" | "video">(initialTab);
  const [selectedVideo, setSelectedVideo] = useState(initialVideoIndex);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [modalVideoMuted, setModalVideoMuted] = useState(false);

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 2.0));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 0.8));
  const handleResetZoom = () => setZoomLevel(1);

  if (!isOpen) return null;

  const currentVid = HERO_VIDEOS[selectedVideo] || HERO_VIDEOS[0];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl max-h-[92vh] bg-[#F8FAFC] border border-[#E2E6EE] rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10"
        >
          {/* Top Bar: Tabs, Controls & Close */}
          <div className="px-5 sm:px-6 py-3.5 bg-white border-b border-[#E2E6EE] flex items-center justify-between gap-3 flex-wrap">
            
            {/* Left: Title & Mode Toggle */}
            <div className="flex items-center gap-3">
              <Logo size="sm" showSub={false} />
              <div className="h-6 w-px bg-[#E2E6EE] hidden sm:block" />
              <div>
                <h3 className="text-sm sm:text-base font-bold text-[#0F172A] leading-tight">
                  Inspector &amp; Verification Desk
                </h3>
                <p className="text-[11px] sm:text-xs text-[#64748B]">
                  Official preview of Go Prime Services registered documents &amp; workflow.
                </p>
              </div>
            </div>

            {/* Middle: Tab Selector */}
            <div className="bg-[#F1F5F9] p-1 rounded-full border border-[#E2E8F0] flex items-center gap-1">
              <button
                onClick={() => setActiveTab("video")}
                className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  activeTab === "video"
                    ? "bg-[#1F216B] text-white shadow-xs"
                    : "text-[#64748B] hover:text-[#0F172A]"
                }`}
              >
                <Video className="w-3.5 h-3.5 text-[#D2AC65]" />
                <span>Process Videos</span>
              </button>

              <button
                onClick={() => setActiveTab("document")}
                className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  activeTab === "document"
                    ? "bg-[#1F216B] text-white shadow-xs"
                    : "text-[#64748B] hover:text-[#0F172A]"
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Deed Document</span>
              </button>
            </div>

            {/* Right: Zoom Controls (Document Tab Only) & Close Button */}
            <div className="flex items-center gap-2">
              {activeTab === "document" && (
                <div className="hidden sm:flex items-center bg-[#F8FAFC] border border-[#E2E6EE] rounded-full p-1 gap-1">
                  <button
                    onClick={handleZoomOut}
                    disabled={zoomLevel <= 0.8}
                    className="p-1.5 rounded-full hover:bg-white text-[#0F172A] disabled:opacity-30 cursor-pointer transition-colors"
                    title="Zoom Out"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <span className="text-xs font-mono font-bold px-2 text-[#1F216B]">
                    {Math.round(zoomLevel * 100)}%
                  </span>
                  <button
                    onClick={handleZoomIn}
                    disabled={zoomLevel >= 2.0}
                    className="p-1.5 rounded-full hover:bg-white text-[#0F172A] disabled:opacity-30 cursor-pointer transition-colors"
                    title="Zoom In"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleResetZoom}
                    className="p-1.5 rounded-full hover:bg-white text-[#555D75] hover:text-[#1F216B] cursor-pointer transition-colors"
                    title="Reset Zoom"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

              {/* Close Modal Button */}
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-[#F8FAFC] hover:bg-[#1F216B] hover:text-white border border-[#E2E6EE] text-[#0F172A] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* MAIN MODAL CONTENT */}
          <div className="flex-1 overflow-auto bg-[#E2E8F0]/40">
            {activeTab === "video" ? (
              /* ========================================================== */
              /* TAB: PROCESS VIDEOS SHOWCASE (one.mp4, two.mp4, three.mp4) */
              /* ========================================================== */
              <div className="p-4 sm:p-6 max-w-3xl mx-auto space-y-4">
                
                {/* Step Selector Pills */}
                <div className="grid grid-cols-3 gap-2">
                  {HERO_VIDEOS.map((vid, idx) => (
                    <button
                      key={vid.id}
                      onClick={() => setSelectedVideo(idx)}
                      className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                        selectedVideo === idx
                          ? "bg-[#1F216B] text-white border-[#1F216B] shadow-md"
                          : "bg-white text-[#334155] border-[#CBD5E1] hover:border-[#1F216B]"
                      }`}
                    >
                      <span
                        className={`text-[9px] font-mono font-bold block uppercase tracking-wider ${
                          selectedVideo === idx ? "text-[#D2AC65]" : "text-[#94A3B8]"
                        }`}
                      >
                        STEP {vid.stepNum}
                      </span>
                      <span className="text-xs sm:text-sm font-bold block leading-tight truncate">
                        {vid.shortTitle}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Main Video Player Container */}
                <div className="relative bg-slate-950 rounded-2xl overflow-hidden shadow-xl border-2 border-[#1F216B]">
                  <video
                    key={currentVid.src}
                    src={currentVid.src}
                    playsInline
                    autoPlay
                    loop
                    muted={modalVideoMuted}
                    className="w-full aspect-[16/9] object-cover"
                  />

                  {/* Top Badges inside Video */}
                  <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white text-xs font-bold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>{currentVid.badge}</span>
                  </div>

                  {/* Audio Toggle in Video */}
                  <button
                    onClick={() => setModalVideoMuted(!modalVideoMuted)}
                    className="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-full bg-black/70 hover:bg-black/90 backdrop-blur-md border border-white/20 text-white text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    {modalVideoMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#D2AC65]" />}
                    <span>{modalVideoMuted ? "Unmute" : "Muted"}</span>
                  </button>

                  {/* Bottom Video Information Bar */}
                  <div className="p-4 sm:p-5 bg-white text-[#0F172A] border-t border-[#E2E6EE]">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="text-[10px] font-mono font-bold text-[#D2AC65] tracking-wider uppercase">
                          {currentVid.tag}
                        </span>
                        <h4 className="text-base sm:text-lg font-bold text-[#1F216B]">
                          {currentVid.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-[#475569] mt-1">
                          {currentVid.subtitle}
                        </p>
                      </div>

                      <div className="flex-shrink-0 text-right">
                        <span className="inline-block px-3 py-1 rounded-full bg-[#EEF2FB] text-[#1F216B] text-xs font-bold border border-[#CCD6F0]">
                          48h Turnaround
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            ) : (
              /* ========================================================== */
              /* TAB: SAMPLE REGISTERED DEED DOCUMENT                       */
              /* ========================================================== */
              <div className="p-4 sm:p-8 flex items-center justify-center">
                <motion.div
                  style={{ scale: zoomLevel }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="w-full max-w-[580px] bg-white rounded-2xl shadow-xl border border-[#CCD4E6] p-6 sm:p-8 origin-top my-4 text-[#0F172A]"
                >
                  {/* Document Header: Stamp Duty Certificate */}
                  <div className="border-2 border-[#D2AC65] rounded-xl p-3 sm:p-4 bg-[#FDF9F0] mb-6 relative overflow-hidden">
                    <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-[#D2AC65]/10 rounded-full blur-xl pointer-events-none" />
                    
                    <div className="flex items-start justify-between border-b border-[#D2AC65]/30 pb-2 mb-2.5">
                      <div>
                        <span className="text-[10px] font-bold tracking-widest text-[#B88E44] uppercase block">
                          GOVERNMENT OF KARNATAKA / DELHI (E-STAMP)
                        </span>
                        <h4 className="text-xs sm:text-sm font-bold text-[#1F216B]">
                          CERTIFICATE OF STAMP DUTY
                        </h4>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] font-mono text-[#555D75] block">
                          Cert No: IN-KA893247012903W
                        </span>
                        <span className="inline-block px-2 py-0.5 rounded-md bg-[#1F216B] text-white text-[10px] font-bold tracking-wide">
                          ₹500 PAID
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[10px] text-[#475569]">
                      <div>
                        <span className="text-[#828DA4]">Issued Date:</span>{" "}
                        <strong>26-Aug-2026 11:32 AM</strong>
                      </div>
                      <div>
                        <span className="text-[#828DA4]">First Party:</span>{" "}
                        <strong>Landlord / Property Owner</strong>
                      </div>
                      <div>
                        <span className="text-[#828DA4]">Article:</span>{" "}
                        <strong>Article 30 (Lease / Rent)</strong>
                      </div>
                      <div>
                        <span className="text-[#828DA4]">Second Party:</span>{" "}
                        <strong>Tenant / Lessee</strong>
                      </div>
                    </div>
                  </div>

                  {/* Title & Status */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#E2E6EE] mb-4">
                    <div>
                      <div className="mb-2">
                        <Logo size="sm" showSub={false} />
                      </div>
                      <h3
                        className="text-2xl font-serif font-bold text-[#1F216B]"
                        style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
                      >
                        Residential Tenancy Deed
                      </h3>
                      <span className="text-[11px] text-[#555D75]">
                        Prepared &amp; Verified by Go Prime Services Legal Compliance Desk
                      </span>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#EEF2FB] text-[#1F216B] text-xs font-bold border border-[#CCD6F0]">
                      ● GOVT REGISTERED
                    </span>
                  </div>

                  {/* Document Skeleton Clauses */}
                  <div className="space-y-3 mb-6 text-xs text-[#555D75] leading-relaxed">
                    <p>
                      This agreement is made on this <strong>26th day of August, 2026</strong> between the First Party (Lessor/Landlord) and the Second Party (Lessee/Tenant) for residential premises.
                    </p>
                    <div className="space-y-2 bg-[#F8FAFC] p-3 rounded-xl border border-[#E2E6EE]">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-[#555D75]">Monthly Rent:</span>
                        <strong className="text-[#1F216B]">₹35,000 / month</strong>
                      </div>
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-[#555D75]">Security Deposit:</span>
                        <strong className="text-[#1F216B]">₹1,50,000 (Refundable)</strong>
                      </div>
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-[#555D75]">Tenancy Period:</span>
                        <strong className="text-[#1F216B]">11 Months (Renewable)</strong>
                      </div>
                    </div>
                  </div>

                  {/* Signatures & Seal Section */}
                  <div className="relative pt-4 border-t border-[#E2E6EE] grid grid-cols-2 gap-4">
                    {/* Party A */}
                    <div className="space-y-1">
                      <span className="text-[10px] text-[#828DA4] uppercase tracking-wider block">
                        PARTY A (LANDLORD)
                      </span>
                      <div className="h-9 border-b border-[#0F172A] flex items-end pb-1 font-serif italic text-sm font-bold text-[#1F216B]">
                        Digitally Signed
                      </div>
                      <span className="text-[10px] text-emerald-700 font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> Biometric Verified
                      </span>
                    </div>

                    {/* Party B */}
                    <div className="space-y-1">
                      <span className="text-[10px] text-[#828DA4] uppercase tracking-wider block">
                        PARTY B (TENANT)
                      </span>
                      <div className="h-9 border-b border-[#0F172A] flex items-end pb-1 font-serif italic text-sm font-bold text-[#1F216B]">
                        Digitally Signed
                      </div>
                      <span className="text-[10px] text-emerald-700 font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> Biometric Verified
                      </span>
                    </div>

                    {/* Notary Stamp Graphic */}
                    <div className="absolute right-2 -bottom-2 w-28 h-28 rounded-full border-2 border-dashed border-[#D2AC65] text-[#D2AC65] flex flex-col items-center justify-center text-center p-1 transform rotate-[-8deg] bg-white/90 pointer-events-none shadow-xs">
                      <div className="w-full h-full rounded-full border border-[#D2AC65] flex flex-col items-center justify-center p-1">
                        <span className="text-[8px] font-bold uppercase tracking-tighter leading-none">
                          GOVERNMENT OF INDIA
                        </span>
                        <span className="text-[9px] font-black tracking-wider uppercase my-0.5 text-[#B88E44]">
                          NOTARISED
                        </span>
                        <span className="text-[7px] font-mono leading-tight">
                          REG KA/01/2026
                        </span>
                        <span className="text-[7px] font-bold">26-AUG-2026</span>
                        <span className="text-[7px] font-serif uppercase">NOTARY</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Verification Badges */}
                  <div className="mt-8 pt-4 border-t border-[#E2E6EE] flex flex-wrap items-center justify-between gap-2 text-[11px] text-[#555D75]">
                    <div className="flex items-center gap-1.5 text-[#1F216B] font-semibold">
                      <Fingerprint className="w-4 h-4 text-[#D2AC65]" />
                      <span>UIDAI Aadhaar Verified</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#1F216B] font-semibold">
                      <Stamp className="w-4 h-4 text-[#D2AC65]" />
                      <span>Sub-Registrar Endorsed</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </div>

          {/* Footer Bar: Actions */}
          <div className="px-6 py-4 bg-white border-t border-[#E2E6EE] flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs text-[#555D75]">
              <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>100% legally enforceable in court of law with registered e-stamp.</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-full border border-[#E2E6EE] text-xs font-bold text-[#0F172A] hover:bg-[#F8FAFC] transition-colors cursor-pointer w-full sm:w-auto"
              >
                Close Inspector
              </button>
              <button
                onClick={() => {
                  onClose();
                  if (onStartAgreement) onStartAgreement();
                }}
                className="px-6 py-2.5 rounded-full bg-[#1F216B] hover:bg-[#14164F] text-white text-xs font-bold shadow-md transition-all cursor-pointer w-full sm:w-auto text-center flex items-center justify-center gap-1.5"
              >
                <span>Start My Agreement</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
