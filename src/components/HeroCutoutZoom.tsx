"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import HeroContent from "@/components/HeroContent";
import BackgroundVideoPlayer, { HERO_VIDEOS } from "@/components/BackgroundVideoPlayer";

interface HeroCutoutZoomProps {
  onStartAgreement: (serviceName?: string) => void;
  onOpenAllServices: () => void;
  onOpenZoomModal: (videoIndex?: number) => void;
  onZoomStateChange?: (isZoomed: boolean) => void;
}

export default function HeroCutoutZoom({
  onStartAgreement,
  onOpenAllServices,
  onOpenZoomModal,
  onZoomStateChange,
}: HeroCutoutZoomProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isIntroCompleted, setIsIntroCompleted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Motion value driving the cinematic zoom transition from 0 to 1
  const zoomProgress = useMotionValue(0);

  // Scale of the cutout mask (smoothly zooms 1x to 52x through the text window)
  const maskScale = useTransform(zoomProgress, [0, 0.7, 1], [1, 26, 52]);

  // Opacity of the white cutout overlay (fades out as camera passes through)
  const overlayOpacity = useTransform(zoomProgress, [0, 0.4, 0.82], [1, 0.96, 0]);

  // Scale & opacity of the hero content behind the cutout
  const heroContentScale = useTransform(zoomProgress, [0, 0.85], [0.94, 1]);
  const heroContentOpacity = useTransform(zoomProgress, [0, 0.22, 0.75], [0, 0.45, 1]);

  // Video background scaling & soft opacity overlay when zooming into the hero
  const videoScale = useTransform(zoomProgress, [0, 0.85], [1.06, 1]);
  const videoOverlayOpacity = useTransform(zoomProgress, [0, 0.18, 0.75], [0, 0.55, 1]);
  const darkBackerOpacity = useTransform(zoomProgress, [0, 0.35, 0.75], [0.25, 0.1, 0]);

  // Auto-cycle through the 3 videos sequentially (1 -> 2 -> 3 -> 1)
  const handleVideoEnd = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % HERO_VIDEOS.length);
  };

  // Ref to track current scroll progress (0 to 1) synchronously
  const progressRef = useRef(0);
  const [isClickAnimating, setIsClickAnimating] = useState(false);

  // Trigger the deliberate, reduced-speed (2.4s) zoom animation ONLY on click
  const triggerClickZoom = useCallback(() => {
    if (isIntroCompleted || isClickAnimating) return;
    setIsClickAnimating(true);

    if (onZoomStateChange) {
      onZoomStateChange(true);
    }

    const currentProg = progressRef.current;
    const remainingDuration = Math.max(1.0, 2.4 * (1 - currentProg));

    animate(zoomProgress, 1, {
      duration: remainingDuration,
      ease: [0.25, 0.1, 0.25, 1.0],
      onUpdate: (latest) => {
        progressRef.current = latest;
        if (latest >= 0.15 && onZoomStateChange) {
          onZoomStateChange(true);
        }
      },
      onComplete: () => {
        progressRef.current = 1;
        setIsIntroCompleted(true);
        setIsClickAnimating(false);
        if (onZoomStateChange) {
          onZoomStateChange(true);
        }
      },
    });
  }, [isIntroCompleted, isClickAnimating, zoomProgress, onZoomStateChange]);

  // Ensure fresh page reload starts cleanly at the starting screen top (scrollY = 0)
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  // Lock body scroll while starting screen is active so scroll gestures are captured
  useEffect(() => {
    if (!isIntroCompleted) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isIntroCompleted]);

  // Handle interactive wheel / trackpad scrolling
  // Allows bi-directional scrolling (down/up) until the intro intersection is reached
  useEffect(() => {
    if (isIntroCompleted || isClickAnimating) return;

    const handleWheel = (e: WheelEvent) => {
      if (isIntroCompleted || isClickAnimating) return;

      const SENSITIVITY = 1200; // Scroll distance to travel from 0 to 1
      const nextProgress = Math.max(
        0,
        Math.min(1, progressRef.current + e.deltaY / SENSITIVITY)
      );
      progressRef.current = nextProgress;

      animate(zoomProgress, nextProgress, {
        duration: 0.18,
        ease: "easeOut",
      });

      if (nextProgress >= 0.15 && onZoomStateChange) {
        onZoomStateChange(true);
      } else if (nextProgress < 0.15 && onZoomStateChange) {
        onZoomStateChange(false);
      }

      // Once the user scrolls completely and reaches the intro section
      if (nextProgress >= 0.96) {
        progressRef.current = 1;
        animate(zoomProgress, 1, {
          duration: 0.35,
          ease: "easeOut",
          onComplete: () => {
            setIsIntroCompleted(true);
            if (onZoomStateChange) {
              onZoomStateChange(true);
            }
          },
        });
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [isIntroCompleted, isClickAnimating, zoomProgress, onZoomStateChange]);

  // Handle interactive touch swipe (mobile / tablet)
  // Allows bi-directional dragging until intro section is reached
  useEffect(() => {
    if (isIntroCompleted || isClickAnimating) return;

    let lastY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        lastY = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isIntroCompleted || isClickAnimating) return;
      if (e.touches.length > 0) {
        const currentY = e.touches[0].clientY;
        const deltaY = lastY - currentY;
        lastY = currentY;

        const SENSITIVITY = 700;
        const nextProgress = Math.max(
          0,
          Math.min(1, progressRef.current + deltaY / SENSITIVITY)
        );
        progressRef.current = nextProgress;

        animate(zoomProgress, nextProgress, {
          duration: 0.12,
          ease: "easeOut",
        });

        if (nextProgress >= 0.15 && onZoomStateChange) {
          onZoomStateChange(true);
        } else if (nextProgress < 0.15 && onZoomStateChange) {
          onZoomStateChange(false);
        }

        if (nextProgress >= 0.96) {
          progressRef.current = 1;
          animate(zoomProgress, 1, {
            duration: 0.35,
            ease: "easeOut",
            onComplete: () => {
              setIsIntroCompleted(true);
              if (onZoomStateChange) {
                onZoomStateChange(true);
              }
            },
          });
        }
      }
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [isIntroCompleted, isClickAnimating, zoomProgress, onZoomStateChange]);

  // Keyboard navigation (ArrowDown/PageDown to scroll forward, ArrowUp/PageUp to scroll back, Enter to click-zoom)
  useEffect(() => {
    if (isIntroCompleted || isClickAnimating) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (["ArrowDown", "PageDown", " "].includes(e.key)) {
        e.preventDefault();
        const nextProgress = Math.min(1, progressRef.current + 0.18);
        progressRef.current = nextProgress;
        animate(zoomProgress, nextProgress, { duration: 0.25, ease: "easeOut" });

        if (nextProgress >= 0.15 && onZoomStateChange) {
          onZoomStateChange(true);
        }

        if (nextProgress >= 0.96) {
          progressRef.current = 1;
          animate(zoomProgress, 1, {
            duration: 0.35,
            ease: "easeOut",
            onComplete: () => {
              setIsIntroCompleted(true);
              if (onZoomStateChange) onZoomStateChange(true);
            },
          });
        }
      } else if (["ArrowUp", "PageUp"].includes(e.key)) {
        e.preventDefault();
        const nextProgress = Math.max(0, progressRef.current - 0.18);
        progressRef.current = nextProgress;
        animate(zoomProgress, nextProgress, { duration: 0.25, ease: "easeOut" });

        if (nextProgress < 0.15 && onZoomStateChange) {
          onZoomStateChange(false);
        }
      } else if (e.key === "Enter") {
        e.preventDefault();
        triggerClickZoom();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isIntroCompleted, isClickAnimating, zoomProgress, onZoomStateChange, triggerClickZoom]);

  return (
    <div
      ref={containerRef}
      id="home"
      className="relative w-full min-h-screen bg-[#F8FAFC] flex flex-col justify-start overflow-hidden"
    >
      {/* ================================================================ */}
      {/* LAYER 1: CINEMATIC BACKGROUND VIDEO PLAYER                        */}
      {/* (Visible directly through the cutout text, then behind the hero) */}
      {/* ================================================================ */}
      <motion.div
        style={{ scale: isIntroCompleted ? 1 : videoScale }}
        className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none"
      >
        {/* Subtle contrast gradient backer behind cutout (fades out as hero reveals) */}
        <motion.div
          style={{ opacity: isIntroCompleted ? 0 : darkBackerOpacity }}
          className="absolute inset-0 bg-[#0B0E23]/25 z-10 pointer-events-none"
        />

        {/* 3-Video Auto-cycling Player */}
        <BackgroundVideoPlayer
          currentVideoIndex={currentVideoIndex}
          isPlaying={true}
          isMuted={true}
          onVideoEnd={handleVideoEnd}
          showOverlay={false}
          className="w-full h-full"
        />

        {/* Soft Tint Overlay for background video behind Hero:
            Left-hand side keeps current subtle opacity for crisp text readability,
            smoothly transitioning to max opacity on the right-hand side */}
        <motion.div
          style={{
            opacity: isIntroCompleted ? 1 : videoOverlayOpacity,
            background:
              "linear-gradient(to right, rgba(248, 250, 252, 0.95) 0%, rgba(248, 250, 252, 0.88) 32%, rgba(248, 250, 252, 0.45) 60%, rgba(248, 250, 252, 0) 85%, rgba(248, 250, 252, 0) 100%)",
          }}
          className="absolute inset-0 z-20 pointer-events-none"
        />
      </motion.div>

      {/* ================================================================ */}
      {/* LAYER 2: UNDERLYING HERO WEBSITE CONTENT                         */}
      {/* (Reveals smoothly as camera passes through the cutout text)      */}
      {/* ================================================================ */}
      <motion.div
        style={{
          scale: isIntroCompleted ? 1 : heroContentScale,
          opacity: isIntroCompleted ? 1 : heroContentOpacity,
        }}
        className={`relative z-10 w-full min-h-screen flex flex-col justify-center ${
          isIntroCompleted ? "pointer-events-auto" : "pointer-events-none select-none"
        }`}
      >
        <HeroContent
          onStartAgreement={() => onStartAgreement("Rental Agreement")}
          onOpenAllServices={onOpenAllServices}
          onOpenZoomModal={onOpenZoomModal}
        />
      </motion.div>

      {/* ================================================================ */}
      {/* LAYER 3: PURE WHITE SCREEN WITH "GoPrimeServices" CUTOUT MASK     */}
      {/* (Active only on initial screen, permanently dismissed on zoom)   */}
      {/* ================================================================ */}
      {!isIntroCompleted && (
        <motion.div
          style={{
            opacity: overlayOpacity,
            scale: maskScale,
            transformOrigin: "50% 50%",
          }}
          onClick={triggerClickZoom}
          className="absolute inset-0 w-full h-full z-30 flex items-center justify-center bg-transparent cursor-pointer select-none"
        >
          {/* SVG Cutout Mask: Pure white screen with "GoPrimeServices" transparent letter window */}
          <svg
            className="w-full h-full object-cover pointer-events-none"
            viewBox="0 0 1600 900"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <style>{`
                .cutout-brand-text {
                  font-size: 172px;
                  font-weight: 900;
                  letter-spacing: -0.035em;
                  font-family: 'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                }
                @media (max-width: 768px) {
                  .cutout-brand-text {
                    font-size: 106px;
                  }
                }
              `}</style>

              {/* Mask: White is solid (white screen), Black cuts through to the video behind */}
              <mask id="go-prime-cutout-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="1600" height="900">
                {/* 1. Solid opaque base (covers entire screen) */}
                <rect x="0" y="0" width="1600" height="900" fill="white" />

                {/* 2. Black cutout text: Exactly "GoPrimeServices" in one line */}
                <g fill="black">
                  <text
                    x="800"
                    y="450"
                    textAnchor="middle"
                    dominantBaseline="central"
                    className="cutout-brand-text"
                  >
                    GoPrimeServices
                  </text>
                </g>
              </mask>
            </defs>

            {/* The Pure White Screen with the Cutout Mask */}
            <rect
              x="0"
              y="0"
              width="1600"
              height="900"
              fill="#FFFFFF"
              mask="url(#go-prime-cutout-mask)"
            />
          </svg>
        </motion.div>
      )}
    </div>
  );
}
