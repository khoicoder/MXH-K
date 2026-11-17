'use client';

import React from 'react';

interface LogoProps {
  variant?: 'full' | 'icon' | 'compact';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showText?: boolean;
}

const SIZE_MAP = {
  sm: { icon: 28, text: 'text-base', badge: 'w-7 h-7' },
  md: { icon: 36, text: 'text-xl', badge: 'w-9 h-9' },
  lg: { icon: 48, text: 'text-2xl', badge: 'w-12 h-12' },
  xl: { icon: 64, text: 'text-4xl', badge: 'w-16 h-16' },
};

export function LogoIcon({ size = 36, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 transition-transform duration-300 hover:scale-105 ${className}`}
    >
      <defs>
        {/* Main Background Glow Gradient */}
        <linearGradient id="mxhk-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E1B4B" />
          <stop offset="50%" stopColor="#0F172A" />
          <stop offset="100%" stopColor="#090D16" />
        </linearGradient>

        {/* Dynamic Electric Gradient for Letter K */}
        <linearGradient id="mxhk-k-primary" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="50%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#A855F7" />
        </linearGradient>

        {/* Accent Glow for Intersecting Arms */}
        <linearGradient id="mxhk-k-accent" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#EC4899" />
          <stop offset="50%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>

        {/* Subtle Neon Drop Shadow Filter */}
        <filter id="mxhk-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Rounded Squircle Container */}
      <rect
        x="2"
        y="2"
        width="96"
        height="96"
        rx="24"
        fill="url(#mxhk-bg)"
        stroke="url(#mxhk-k-primary)"
        strokeWidth="1.5"
        strokeOpacity="0.4"
      />

      {/* Subtle Orbital Network Circles */}
      <circle cx="50" cy="50" r="38" stroke="url(#mxhk-k-primary)" strokeWidth="0.75" strokeDasharray="3 4" strokeOpacity="0.25" />
      <circle cx="50" cy="50" r="28" stroke="url(#mxhk-k-accent)" strokeWidth="0.5" strokeOpacity="0.2" />

      {/* Stem of Letter K */}
      <rect
        x="26"
        y="22"
        width="11"
        height="56"
        rx="5.5"
        fill="url(#mxhk-k-primary)"
        filter="url(#mxhk-glow)"
      />

      {/* Top Diagonal Arm of K (Connecting to community node) */}
      <path
        d="M34 50 L64 24 A 6 6 0 0 1 74 34 L48 56 Z"
        fill="url(#mxhk-k-accent)"
      />

      {/* Bottom Diagonal Arm of K (Radiating outward) */}
      <path
        d="M44 48 L70 73 A 6.5 6.5 0 0 1 60 82 L34 56 Z"
        fill="url(#mxhk-k-primary)"
      />

      {/* Network Nodes (Circles representing Social Connections) */}
      <circle cx="70" cy="27" r="4.5" fill="#38BDF8" filter="url(#mxhk-glow)" />
      <circle cx="67" cy="78" r="4" fill="#EC4899" filter="url(#mxhk-glow)" />
      <circle cx="26" cy="24" r="3" fill="#A855F7" />
      <circle cx="26" cy="76" r="3" fill="#6366F1" />
      <circle cx="48" cy="53" r="3.5" fill="#FFFFFF" />
    </svg>
  );
}

export function Logo({
  variant = 'full',
  size = 'md',
  className = '',
  showText = true,
}: LogoProps) {
  const currentSize = SIZE_MAP[size];

  if (variant === 'icon' || !showText) {
    return <LogoIcon size={currentSize.icon} className={className} />;
  }

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <LogoIcon size={currentSize.icon} />
      <div className="flex flex-col">
        <div className="flex items-center tracking-tight leading-none">
          <span className={`font-black ${currentSize.text} text-slate-900 dark:text-white tracking-wider`}>
            MXH
          </span>
          <span
            className={`font-black ${currentSize.text} ml-1 bg-gradient-to-r from-cyan-400 via-indigo-500 to-pink-500 bg-clip-text text-transparent`}
          >
            -K
          </span>
        </div>
        {variant === 'full' && size !== 'sm' && (
          <span className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-0.5">
            Social Network
          </span>
        )}
      </div>
    </div>
  );
}
