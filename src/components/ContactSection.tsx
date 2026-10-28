"use client";

import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  ExternalLink,
  FileText,
} from "lucide-react";
import WhatsappIcon from "@/components/WhatsappIcon";

interface ContactSectionProps {
  selectedServicePreset?: string;
}

export default function ContactSection({ selectedServicePreset = "" }: ContactSectionProps) {
  const googleFormUrl = "https://forms.gle/kSdJdHKbS35KK8Mq9";

  return (
    <section id="contact" className="scroll-mt-20 sm:scroll-mt-24 py-16 sm:py-24 bg-[#F8FAFC] relative border-t border-[#E2E6EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#B88E44] block mb-2">
            CONTACT &amp; BOOKING
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#0F172A] tracking-tight leading-tight">
            We Are Here to{" "}
            <span
              className="font-serif italic font-normal text-[#2B2E8F]"
              style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
            >
              Help You
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#555D75]">
            Have a question or ready to schedule your doorstep biometric verification? Reach out directly or submit your details.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Direct Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2E6EE] shadow-xs space-y-5">
              <h3 className="text-xl font-bold text-[#0F172A]">
                Direct Helpdesk Channels
              </h3>

              {/* WhatsApp Action Card */}
              <a
                href="https://wa.me/919421215055?text=Hello%20Go%20Prime%20Services!%20I%20need%20assistance%20with%20legal%20documentation."
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 sm:p-4 rounded-2xl bg-[#EEF2FB] border border-[#CCD6F0] hover:border-[#1F216B] transition-all flex items-center justify-between gap-3 group cursor-pointer"
              >
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center shadow-xs flex-shrink-0">
                    <WhatsappIcon size={20} color="white" strokeWidth={2} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-xs font-bold text-[#0F172A] block">WhatsApp Support</span>
                    <span className="text-xs text-[#555D75] truncate block">+91 94212 15055</span>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#1F216B] group-hover:underline flex-shrink-0 whitespace-nowrap">
                  Chat Now →
                </span>
              </a>

              {/* Email Card */}
              <a
                href="mailto:contactgoprimeservices@gmail.com"
                className="p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E6EE] hover:border-[#1F216B] hover:bg-white transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 group cursor-pointer"
              >
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <div className="w-10 h-10 rounded-xl bg-[#EEF2FB] text-[#1F216B] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-xs font-bold text-[#0F172A] block">Official Email</span>
                    <span className="text-[11px] sm:text-xs text-[#555D75] break-all sm:break-normal block">
                      contactgoprimeservices@gmail.com
                    </span>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#1F216B] group-hover:underline flex-shrink-0 whitespace-nowrap self-end sm:self-auto">
                  Send Mail →
                </span>
              </a>

              {/* Phone Desk */}
              <a
                href="tel:+919421215055"
                className="p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E6EE] hover:border-[#1F216B] hover:bg-white transition-all flex items-center justify-between gap-3 group cursor-pointer"
              >
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <div className="w-10 h-10 rounded-xl bg-[#1F216B]/10 text-[#1F216B] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-xs font-bold text-[#0F172A] block">Call Helpdesk</span>
                    <span className="text-xs text-[#555D75] truncate block">+91 94212 15055</span>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#1F216B] group-hover:underline flex-shrink-0 whitespace-nowrap">
                  Call Now →
                </span>
              </a>

              {/* Service & Operational Details */}
              <div className="pt-4 border-t border-[#E2E6EE] space-y-3 text-xs text-[#555D75]">
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#D2AC65] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0F172A]">Working Hours:</strong> Mon - Sat: 9:00 AM - 8:00 PM | Sun: By Appointment
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#D2AC65] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0F172A]">Doorstep Coverage:</strong> Service available across Maharashtra with biometric verification across India and worldwide.
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0F172A]">Legally Enforceable:</strong> 100% legally binding agreements with official government registration receipt.
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT: Google Form Link */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E2E6EE] shadow-xs relative flex flex-col justify-between">
              <div>
                <div className="mb-6">
                  <span className="text-xs font-bold tracking-wider uppercase text-[#B88E44] block mb-1">
                    Online Application
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0F172A]">
                    Send Inquiry / Book Slot
                  </h3>
                  <p className="text-sm text-[#555D75] mt-2 leading-relaxed">
                    Please fill out our official booking form to submit your details and schedule your legal documentation or doorstep biometric verification.
                  </p>
                </div>

                {selectedServicePreset && (
                  <div className="mb-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#EEF2FB] border border-[#CCD6F0] text-xs font-medium text-[#1F216B]">
                    <span>Selected Service:</span>
                    <strong className="font-bold">{selectedServicePreset}</strong>
                  </div>
                )}

                <div className="p-5 sm:p-6 rounded-2xl bg-[#EEF2FB]/60 border border-[#CCD6F0] mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#1F216B] text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                      <FileText className="w-6 h-6 text-[#D2AC65]" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-base font-bold text-[#0F172A]">
                        Go Prime Services Application Form
                      </h4>
                      <p className="text-xs text-[#555D75] mt-1 leading-normal">
                        Submit your details via our Google Form to schedule your verification slot or request callback assistance.
                      </p>
                      <a
                        href={googleFormUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 mt-3 text-xs font-bold text-[#1F216B] hover:text-[#D2AC65] break-all underline"
                      >
                        <span>{googleFormUrl}</span>
                        <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <a
                  href={googleFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 min-h-[50px] rounded-full font-bold text-sm sm:text-base text-white bg-[#1F216B] hover:bg-[#14164F] active:scale-[0.99] shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <span>Open Google Form</span>
                  <ExternalLink className="w-4 h-4 text-[#D2AC65] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <p className="text-center text-[11px] text-[#555D75] pt-3">
                  Your data is protected and handled with strict confidentiality.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
