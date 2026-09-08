"use client";

import React from "react";

export default function LiveTicker() {
  const activities = [
    { text: "Registered Rent Agreement completed in", location: "Pune" },
    { text: "Doorstep biometric verification arranged in", location: "Mumbai" },
    { text: "Notarized Rent Agreement prepared for", location: "Nashik" },
    { text: "Partnership Deed Registration support provided in", location: "Nagpur" },
    { text: "Court Marriage documentation assisted in", location: "Thane" },
    { text: "Passport renewal guidance completed for", location: "Kolhapur" },
    { text: "PAN-Aadhaar linking support provided in", location: "Aurangabad" },
    { text: "Digital 7/12 and 8A documents requested from", location: "Satara" },
    { text: "FSSAI Food License assistance started in", location: "Solapur" },
    { text: "Shop Act License documentation submitted in", location: "Maharashtra" },
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
