// frontend/src/components/Icons.jsx
import React from 'react';

/**
 * VipTon Icons Collection - Mixed Apple/Original Style
 */

export const Icons = {
  // Logo & Branding - Animated VT Premium
logo: (props) => (
  <svg width="40" height="40" viewBox="0 0 180 180" {...props}>
    <defs>
      <radialGradient id="vt-gradient">
        <stop offset="0%" style={{ stopColor: '#FFEB3B', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#FFC107', stopOpacity: 1 }} />
      </radialGradient>
      <style>
        {`
          @keyframes vt-pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          .vt-animated {
            animation: vt-pulse 3s ease-in-out infinite;
            transform-origin: center;
          }
        `}
      </style>
    </defs>
    <rect width="180" height="180" fill="url(#vt-gradient)" rx="20" />
    <text
      x="90"
      y="115"
      fontFamily="Arial Black"
      fontSize="75"
      fontWeight="900"
      fill="#000000"
      textAnchor="middle"
      className="vt-animated"
    >
      VT
    </text>
  </svg>
),

  // Header Icons - NEW Apple Style ✅
  shop: (props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M9 22a1 1 0 100-2 1 1 0 000 2zM20 22a1 1 0 100-2 1 1 0 000 2z"/>
      <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/>
    </svg>
  ),

  history: (props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  ),

  notifications: (props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"/>
    </svg>
  ),

  // TabBar Icons - Original except Mining
  home: (props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
    </svg>
  ),


  // Mining - Pickaxe Icon
  mining: (props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M12.2651 3.70309C9.72917 3.47824 7.38425 4.16153 5.84197 5.4923C5.65153 5.65663 5.82289 5.9364 6.06757 5.87805C7.78468 5.46852 9.73866 5.38359 11.772 5.68067L12.2651 3.70309Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.168 6.52739C17.1029 7.21968 18.7883 8.21203 20.1122 9.37977C20.3009 9.54616 20.5835 9.37959 20.4925 9.14509C19.7555 7.246 18.0058 5.5418 15.6611 4.5498L15.168 6.52739Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="12.4812" y="5.93628" width="2" height="5" transform="rotate(14 12.4812 5.93628)" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="10.7865" y="10.6668" width="3" height="9.5" transform="rotate(14 10.7865 10.6668)" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="12.3583" y="3.3291" width="3.5" height="2.75" transform="rotate(14 12.3583 3.3291)" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),

  tasks: (props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
    </svg>
  ),

  referrals: (props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
    </svg>
  ),

  wallet: (props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
    </svg>
  ),

  profile: (props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
    </svg>
  ),

  // TON Token - Official Icon
  ton: (props) => (
    <svg width="24" height="24" viewBox="0 0 56 56" fill="none" {...props}>
      <path d="M28 56C43.464 56 56 43.464 56 28C56 12.536 43.464 0 28 0C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56Z" fill="#000000"/>
      <path d="M37.5603 15.6277H18.4386C14.9228 15.6277 12.6944 19.4202 14.4632 22.4861L26.2644 42.9409C27.0345 44.2765 28.9644 44.2765 29.7345 42.9409L41.5381 22.4861C43.3045 19.4251 41.0761 15.6277 37.5627 15.6277H37.5603ZM26.2548 36.8068L23.6847 31.8327L17.4833 20.7414C17.0742 20.0315 17.5795 19.1218 18.4362 19.1218H26.2524V36.8092L26.2548 36.8068ZM38.5108 20.739L32.3118 31.8351L29.7417 36.8068V19.1194H37.5579C38.4146 19.1194 38.9199 20.0291 38.5108 20.739Z" fill="#FFD700"/>
    </svg>
  ),

  tonOutline: (props) => (
    <svg width="24" height="24" viewBox="0 0 56 56" fill="none" {...props}>
      <circle cx="28" cy="28" r="27" stroke="#FFD700" strokeWidth="2" fill="none"/>
      <path d="M37.5603 15.6277H18.4386C14.9228 15.6277 12.6944 19.4202 14.4632 22.4861L26.2644 42.9409C27.0345 44.2765 28.9644 44.2765 29.7345 42.9409L41.5381 22.4861C43.3045 19.4251 41.0761 15.6277 37.5627 15.6277H37.5603ZM26.2548 36.8068L23.6847 31.8327L17.4833 20.7414C17.0742 20.0315 17.5795 19.1218 18.4362 19.1218H26.2524V36.8092L26.2548 36.8068ZM38.5108 20.739L32.3118 31.8351L29.7417 36.8068V19.1194H37.5579C38.4146 19.1194 38.9199 20.0291 38.5108 20.739Z" fill="#FFD700"/>
    </svg>
  ),

  // VIP & Status Icons - ORIGINAL
  coin: (props) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
      <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8 4.5v7m-2-5.5h4m-4 4h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),

  crown: (props) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path d="M2 6l2-2 2 2 2-3 2 3 2-2 2 2v7H2V6zm2 5h8v-3l-1.5 1.5L8 7l-2.5 2.5L4 8v3z"/>
    </svg>
  ),

  diamond: (props) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path d="M6 2l-2 3h8l-2-3H6zm-3.5 4l5.5 8 5.5-8h-11z"/>
    </svg>
  ),

  star: (props) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path d="M8 .5l2.09 4.23 4.67.68-3.38 3.29.8 4.65L8 11.14l-4.18 2.2.8-4.65L1.24 5.41l4.67-.68L8 .5z"/>
    </svg>
  ),

  // Action Icons - NEW Apple Style (except settings) ✅
  check: (props) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <polyline points="17 5 8 14 3 9"/>
    </svg>
  ),

  plus: (props) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <line x1="10" y1="4" x2="10" y2="16"/>
      <line x1="4" y1="10" x2="16" y2="10"/>
    </svg>
  ),

  close: (props) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <line x1="15" y1="5" x2="5" y2="15"/>
      <line x1="5" y1="5" x2="15" y2="15"/>
    </svg>
  ),

  arrowUp: (props) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <line x1="10" y1="16" x2="10" y2="4"/>
      <polyline points="4 10 10 4 16 10"/>
    </svg>
  ),

  arrowDown: (props) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <line x1="10" y1="4" x2="10" y2="16"/>
      <polyline points="16 10 10 16 4 10"/>
    </svg>
  ),

  // Settings - ORIGINAL (як ви просили)
  settings: (props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
    </svg>
  ),

  // Additional utility icons
  claim: (props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9L12 7.5 8.5 11H11v4h2v-4h2.5z"/>
    </svg>
  ),

  upgrade: (props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  )
};

export default Icons;