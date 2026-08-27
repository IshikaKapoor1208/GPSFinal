"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, ShieldCheck, Award, Clock } from "lucide-react";

export default function StatsBanner() {
  const stats = [
    {
      icon: Users,
      value: "1000+",
      label: "Happy Clients",
    },
    {
      icon: ShieldCheck,
      value: "5+",
      label: "Years Experience",
    },
    {
      icon: Award,
      value: "100%",
      label: "Transparent Process",
    },
    {
      icon: Clock,
      value: "On-Time",
      label: "Guaranteed Delivery",
    },
  ];

  return (
    <section className="py-6 sm:py-10 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#14164F] text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-[#D2AC65]/25"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/15">
            {stats.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-4 sm:gap-5 justify-start lg:justify-center px-2 lg:px-6"
                >
                  {/* Gold Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-[#D2AC65]/15 border border-[#D2AC65]/30 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-[#D2AC65]" />
                  </div>

                  {/* Stat Details */}
                  <div>
                    <div
                      className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight"
                      style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
                    >
                      {item.value}
                    </div>
                    <div className="text-xs sm:text-sm text-[#D2AC65] font-semibold mt-0.5">
                      {item.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
