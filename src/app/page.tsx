"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroCutoutZoom from "@/components/HeroCutoutZoom";
import LiveTicker from "@/components/LiveTicker";
import ServicesSection from "@/components/ServicesSection";
import ProcessTimeline from "@/components/ProcessTimeline";
import StatsBanner from "@/components/StatsBanner";
import AboutSection from "@/components/AboutSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloatingWidget from "@/components/WhatsAppFloatingWidget";
import DocumentZoomModal from "@/components/DocumentZoomModal";
import DocumentWizardModal from "@/components/DocumentWizardModal";
import TrackOrderModal from "@/components/TrackOrderModal";
import SignInModal from "@/components/SignInModal";
import RequestCallbackModal from "@/components/RequestCallbackModal";
import AllServicesModal from "@/components/AllServicesModal";

export default function Home() {
  const [zoomModalOpen, setZoomModalOpen] = useState(false);
  const [zoomModalTab, setZoomModalTab] = useState<"document" | "video">("document");
  const [zoomModalVideoIndex, setZoomModalVideoIndex] = useState(0);

  const [wizardModalOpen, setWizardModalOpen] = useState(false);
  const [trackOrderModalOpen, setTrackOrderModalOpen] = useState(false);
  const [signInModalOpen, setSignInModalOpen] = useState(false);
  const [callbackModalOpen, setCallbackModalOpen] = useState(false);
  const [allServicesModalOpen, setAllServicesModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Rental Agreement");
  const [isZoomedIn, setIsZoomedIn] = useState(false);

  const handleStartAgreement = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setWizardModalOpen(true);
  };

  const handleOpenCallback = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setCallbackModalOpen(true);
  };

  const handleOpenAllServices = () => {
    setAllServicesModalOpen(true);
  };

  const handleSelectServiceFromCatalog = (serviceName: string) => {
    setSelectedService(serviceName);
    setAllServicesModalOpen(false);
    setWizardModalOpen(true);
  };

  const handleOpenZoomModal = (videoIndex?: number) => {
    if (typeof videoIndex === "number") {
      setZoomModalTab("video");
      setZoomModalVideoIndex(videoIndex);
    } else {
      setZoomModalTab("document");
    }
    setZoomModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] relative selection:bg-[#1F216B] selection:text-white">
      {/* Top Fixed Header - Hidden on initial white cutout screen, reveals smoothly on zoom */}
      <Navbar
        visible={isZoomedIn}
        onStartAgreement={() => handleStartAgreement("Rental Agreement")}
        onOpenAllServices={handleOpenAllServices}
        onOpenTrackOrder={() => setTrackOrderModalOpen(true)}
        onOpenSignIn={() => setSignInModalOpen(true)}
      />

      {/* Main Page Flow */}
      <main className="relative z-10">
        {/* 'GoPrimeServices' Clean White Cutout Zoom Experience with Background Video */}
        <HeroCutoutZoom
          onStartAgreement={handleStartAgreement}
          onOpenAllServices={handleOpenAllServices}
          onOpenZoomModal={handleOpenZoomModal}
          onZoomStateChange={setIsZoomedIn}
        />

        {/* Full-width Live Activity Marquee Ticker */}
        <LiveTicker />

        {/* 4-Card Document Picker Grid */}
        <ServicesSection
          onSelectService={(s) => handleStartAgreement(s)}
          onOpenAllServices={handleOpenAllServices}
        />

        {/* 6-Step Connected Process Timeline */}
        <ProcessTimeline />

        {/* Trust & Key Stats Banner */}
        <StatsBanner />

        {/* About & Trust Verification Section */}
        <AboutSection onRequestCallback={() => handleOpenCallback()} />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Dedicated Contact & Doorstep Booking Section */}
        <ContactSection selectedServicePreset={selectedService} />
      </main>

      {/* Footer */}
      <Footer
        onStartAgreement={() => handleStartAgreement("Rental Agreement")}
        onOpenAllServices={handleOpenAllServices}
        onOpenTrackOrder={() => setTrackOrderModalOpen(true)}
      />

      {/* Floating WhatsApp & Direct Contact Widget - Hidden on initial screen, reveals on zoom */}
      <WhatsAppFloatingWidget
        visible={isZoomedIn}
        phoneNumber="919876543210"
        emailAddress="contact@goprimeservices.com"
      />

      {/* Interactive High-Res Document & Process Video Inspector Modal */}
      <DocumentZoomModal
        isOpen={zoomModalOpen}
        onClose={() => setZoomModalOpen(false)}
        onStartAgreement={() => handleStartAgreement("Rental Agreement")}
        initialTab={zoomModalTab}
        initialVideoIndex={zoomModalVideoIndex}
      />

      {/* Interactive Step-by-Step Document Booking Wizard Modal */}
      <DocumentWizardModal
        isOpen={wizardModalOpen}
        onClose={() => setWizardModalOpen(false)}
        defaultService={selectedService}
      />

      {/* Real-Time Order Tracking Modal */}
      <TrackOrderModal
        isOpen={trackOrderModalOpen}
        onClose={() => setTrackOrderModalOpen(false)}
      />

      {/* Phone OTP / Sign In Modal */}
      <SignInModal
        isOpen={signInModalOpen}
        onClose={() => setSignInModalOpen(false)}
        onOpenTrackOrder={() => {
          setSignInModalOpen(false);
          setTrackOrderModalOpen(true);
        }}
      />

      {/* Quick Callback Desk Modal */}
      <RequestCallbackModal
        isOpen={callbackModalOpen}
        onClose={() => setCallbackModalOpen(false)}
        defaultService={selectedService}
      />

      {/* Complete Services Catalog Modal */}
      <AllServicesModal
        isOpen={allServicesModalOpen}
        onClose={() => setAllServicesModalOpen(false)}
        onSelectService={handleSelectServiceFromCatalog}
      />
    </div>
  );
}
