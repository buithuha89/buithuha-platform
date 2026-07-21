"use client";

import { useState, useRef, useEffect } from "react";

interface UserAvatarProps {
  src: string | null | undefined;
  initials: string;
  role?: string;
  tier?: string;
  size?: number;
  gradient?: string;
  className?: string;
}

/**
 * Avatar component with fallback to initials when image fails to load.
 * Handles:
 * - Network errors (onError)
 * - Images that load but are broken (naturalWidth === 0, e.g. expired Google avatar URLs)
 * - Images that are already loaded before React hydrates (useEffect check)
 * - Native error event listener for SSR hydration edge cases
 */
export default function UserAvatar({
  src,
  initials,
  role = "student",
  tier = "free",
  size = 36,
  gradient,
  className = "",
}: UserAvatarProps) {
  const [imgError, setImgError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Reset error state when src changes
  useEffect(() => {
    setImgError(false);
  }, [src]);

  // After hydration, check if the image already loaded but is broken.
  // Also attach native error listener to catch events missed during SSR hydration.
  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const markError = () => setImgError(true);

    // Immediate check for already-failed images
    if (img.complete && img.naturalWidth === 0) {
      markError();
      return;
    }

    // Native event listener catches errors that fire between SSR and hydration
    img.addEventListener("error", markError);

    // Delayed re-check: some browsers report complete=false briefly during hydration
    const timer = setTimeout(() => {
      if (img.complete && img.naturalWidth === 0) {
        markError();
      }
    }, 300);

    return () => {
      img.removeEventListener("error", markError);
      clearTimeout(timer);
    };
  }, [src]);

  const bgGradient =
    gradient ||
    (role === "admin"
      ? "linear-gradient(135deg, var(--danger), var(--danger))"
      : ["manager", "marketing", "sale", "support"].includes(role)
      ? "linear-gradient(135deg, var(--info), var(--cat-blue))"
      : tier === "vip"
      ? "linear-gradient(135deg, var(--warn), #d97706)"
      : tier === "member"
      ? "linear-gradient(135deg, var(--cat-purple), var(--cat-violet))"
      : "linear-gradient(135deg, #374151, #1f2937)");

  if (src && !imgError) {
    return (
      <img
        ref={imgRef}
        src={src}
        alt=""
        referrerPolicy="no-referrer"
        className={`rounded-full object-cover shrink-0 ${className}`}
        style={{ width: size, height: size }}
        onError={() => setImgError(true)}
        onLoad={(e) => {
          const img = e.currentTarget;
          if (img.naturalWidth === 0) setImgError(true);
        }}
      />
    );
  }

  return (
    <div
      className={`rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0 ${className}`}
      style={{
        width: size,
        height: size,
        background: bgGradient,
      }}
    >
      {initials}
    </div>
  );
}
