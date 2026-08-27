"use client";

import React from "react";
import Image from "next/image";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  variant?: "light" | "dark";
  showSub?: boolean;
  priority?: boolean;
}

export default function Logo({
  size = "md",
  className = "",
  variant = "dark",
  priority = true,
}: LogoProps) {
  const isLight = variant === "light";

  const sizeConfig = {
    sm: {
      width: 140,
      height: 28,
      imgClass: "h-7 sm:h-8 w-auto",
    },
    md: {
      width: 190,
      height: 38,
      imgClass: "h-8 sm:h-9 md:h-10 w-auto",
    },
    lg: {
      width: 240,
      height: 48,
      imgClass: "h-11 sm:h-12 w-auto",
    },
    xl: {
      width: 300,
      height: 60,
      imgClass: "h-14 sm:h-16 w-auto",
    },
  };

  const current = sizeConfig[size] || sizeConfig.md;

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      {/* Official Brand Logo graphic (Icon + GoPrimeServices) */}
      <Image
        src="/logo/logo.png"
        alt="Go Prime Services"
        width={current.width}
        height={current.height}
        priority={priority}
        className={`${current.imgClass} object-contain transition-transform duration-200 group-hover:scale-[1.02] ${
          isLight ? "brightness-0 invert" : ""
        }`}
      />
    </div>
  );
}

