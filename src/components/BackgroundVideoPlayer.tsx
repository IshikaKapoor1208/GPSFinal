"use client";

import React, { useRef, useEffect } from "react";

export interface HeroVideoItem {
  id: number;
  stepNum: string;
  shortTitle: string;
  src: string;
  badge: string;
  tag: string;
  title: string;
  subtitle: string;
}

export const HERO_VIDEOS: HeroVideoItem[] = [
  {
    id: 0,
    stepNum: "01",
    shortTitle: "Drafting",
    src: "/video/one.mp4",
    badge: "Custom Legal Drafting",
    tag: "STEP 01: DRAFTING & REVIEW",
    title: "Drafting & Terms Consultation",
    subtitle: "Custom clauses tailored to your property requirements with fast turnaround.",
  },
  {
    id: 1,
    stepNum: "02",
    shortTitle: "Biometrics",
    src: "/video/two.mp4",
    badge: "Doorstep Verification",
    tag: "STEP 02: BIOMETRIC VERIFICATION",
    title: "Doorstep Biometrics",
    subtitle: "Authorized executive visits your location for fingerprint and Aadhaar eKYC.",
  },
  {
    id: 2,
    stepNum: "03",
    shortTitle: "Registration",
    src: "/video/three.mp4",
    badge: "Govt Registration",
    tag: "STEP 03: GOVT APPROVAL",
    title: "Govt Stamping & Registration",
    subtitle: "Official e-stamp certificate and registered rent agreement copy delivered.",
  },
];

interface BackgroundVideoPlayerProps {
  currentVideoIndex: number;
  isPlaying?: boolean;
  isMuted?: boolean;
  onVideoEnd?: () => void;
  className?: string;
  overlayClassName?: string;
  showOverlay?: boolean;
}

export default function BackgroundVideoPlayer({
  currentVideoIndex,
  isPlaying = true,
  isMuted = true,
  onVideoEnd,
  className = "",
  overlayClassName = "",
  showOverlay = false,
}: BackgroundVideoPlayerProps) {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, HERO_VIDEOS.length);
  }, []);

  // Control playback across all video elements
  useEffect(() => {
    videoRefs.current.forEach((videoEl, index) => {
      if (!videoEl) return;

      videoEl.muted = isMuted;

      if (index === currentVideoIndex) {
        if (isPlaying) {
          const playPromise = videoEl.play();
          if (playPromise !== undefined) {
            playPromise.catch(() => {
              videoEl.muted = true;
              videoEl.play().catch(() => {});
            });
          }
        } else {
          videoEl.pause();
        }
      } else {
        videoEl.pause();
        videoEl.currentTime = 0;
      }
    });
  }, [currentVideoIndex, isPlaying, isMuted]);

  return (
    <div className={`relative w-full h-full overflow-hidden select-none ${className}`}>
      {/* 3 Video Layers with silky crossfades */}
      {HERO_VIDEOS.map((video, index) => {
        const isActive = index === currentVideoIndex;
        return (
          <video
            key={video.id}
            ref={(el) => {
              videoRefs.current[index] = el;
            }}
            src={video.src}
            playsInline
            muted={isMuted}
            autoPlay
            preload="auto"
            onEnded={() => {
              if (isActive && onVideoEnd) {
                onVideoEnd();
              }
            }}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          />
        );
      })}

      {/* Optional Soft Gradient / Glass Overlay */}
      {showOverlay && (
        <div
          className={`absolute inset-0 z-20 pointer-events-none transition-opacity duration-500 ${
            overlayClassName ||
            "bg-gradient-to-r from-[#F8FAFC]/95 via-[#F8FAFC]/75 to-transparent"
          }`}
        />
      )}
    </div>
  );
}
