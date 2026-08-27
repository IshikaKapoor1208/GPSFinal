"use client";

import React from "react";

export default function LiveTicker() {
  const activities = [
    { text: "Registered Tenancy Agreement delivered in", location: "Whitefield" },
    { text: "Doorstep Biometric verification completed in", location: "Indiranagar" },
    { text: "E-Stamp Duty processed & sealed for", location: "Koramangala" },
    { text: "Notarised Affidavit dispatched to", location: "Jayanagar" },
    { text: "Commercial Lease Deed executed in", location: "HSR Layout" },
    { text: "Leave & License registered with sub-registrar in", location: "Electronic City" },
    { text: "Property Document authenticated in", location: "Bellandur" },
    { text: "Rental Agreement renewal completed in", location: "JP Nagar" },
    { text: "Sworn Declaration notarised in", location: "Connaught Place, Delhi" },
    { text: "Corporate Tenancy Deed delivered in", location: "Cyber City, Gurgaon" },
  ];

  // Repeat for continuous infinite scroll
  const list = [...activities, ...activities];

  return (
    <div className="w-full bg-[#14164F] text-white py-3.5 overflow-hidden border-y border-[#1F216B] relative select-none">
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap text-xs sm:text-sm font-normal text-white/90">
        {list.map((item, index) => (
          <div key={index} className="inline-flex items-center gap-2.5">
            {/* Amber / Gold Bullet Point */}
            <span className="w-2 h-2 rounded-full bg-[#D2AC65] inline-block flex-shrink-0" />
            <span className="text-[#CAD3EC]">
              {item.text}{" "}
              <strong className="text-white font-semibold">{item.location}</strong>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
