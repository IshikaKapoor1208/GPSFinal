"use client";

import React, { useRef, useEffect } from "react";

export const HERO_VIDEOS = [
  {
    id: 0,
    src: "/video/one.mp4",
    title: "Drafting & Terms Consultation",
  },
  {
    id: 1,
    src: "/video/two.mp4",
    title: "Doorstep Biometrics",
  },
  {
    id: 2,
    src: "/video/three.mp4",
    title: "Govt Stamping & Registration",
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
