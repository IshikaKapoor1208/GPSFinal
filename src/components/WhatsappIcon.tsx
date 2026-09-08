"use client";

import React, { forwardRef, useImperativeHandle, useCallback } from "react";
import { motion, useAnimate } from "framer-motion";

export interface AnimatedIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

export interface AnimatedIconProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number;
  className?: string;
}

const WhatsappIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const start = useCallback(async () => {
      try {
        await animate(
          ".phone-icon",
          {
            rotate: [0, -15, 15, -10, 10, 0],
          },
          {
            duration: 0.4,
            ease: "easeInOut",
          },
        );
      } catch {
        // ignore if unmounted
      }
    }, [animate]);

    const stop = useCallback(() => {
      try {
        animate(
          ".phone-icon",
          {
            rotate: 0,
          },
          {
            duration: 0.2,
            ease: "easeOut",
          },
        );
      } catch {
        // ignore if unmounted
      }
    }, [animate]);

    useImperativeHandle(ref, () => ({
      startAnimation: start,
      stopAnimation: stop,
    }));

    return (
      <motion.svg
        ref={scope}
        onHoverStart={start}
        onHoverEnd={stop}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`cursor-pointer ${className}`}
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
        <motion.path
          className="phone-icon"
          style={{ transformOrigin: "50% 50%" }}
          d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"
        />
      </motion.svg>
    );
  },
);

WhatsappIcon.displayName = "WhatsappIcon";
export default WhatsappIcon;
