// frontend/src/components/Icons.jsx
import React from 'react';

/**
 * VipTon SVG Icons Collection
 * All icons used across the application
 */

export const Icons = {
  // Logo & Branding
  logo: (props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 2.18l7 3.5V17c0 4.52-2.98 8.69-7 9.93-4.02-1.24-7-5.41-7-9.93V7.68l7-3.5zM12 7l-3.5 1.75v5.25c0 2.1 1.4 4.05 3.5 4.47 2.1-.42 3.5-2.37 3.5-4.47V8.75L12 7z"/>
    </svg>
  ),

  // Header Icons
  shop: (props) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path d="M17.21 9l-4.38-6.56c-.19-.28-.51-.42-.83-.42-.32 0-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h9c.92 0 1.69-.62 1.93-1.46l2.54-9.27L19 10c0-.55-.45-1-1-1h-4.79zm-5.21-4.5l3.5 4.5h-7l3.5-4.5zM16.5 19h-9l-2.31-8h13.62l-2.31 8z"/>
    </svg>
  ),

  history: (props) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm.5-9H9v5l4.28 2.54.72-1.21-3.5-2.08V7z"/>
    </svg>
  ),

  notifications: (props) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path d="M10 20c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V2c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C5.63 3.36 4 5.92 4 9v5l-2 2v1h16v-1l-2-2z"/>
    </svg>
  ),

  // TabBar Icons
  home: (props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
    </svg>
  ),

  mining: (props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M23.05 16.22l-2.09-3.5c.65-.58 1.04-1.42 1.04-2.32 0-1.72-1.4-3.12-3.12-3.12-.89 0-1.73.39-2.31 1.03l-3.51-2.09c.01-.07.01-.15.01-.22 0-1.72-1.4-3.12-3.12-3.12S6.83 4.28 6.83 6c0 .07 0 .15.01.22l-3.51 2.09C2.75 7.67 1.89 7.28 1 7.28 0 7.28-1 8.28-1 10c0 .9.39 1.74 1.04 2.32l-2.09 3.5c-.06-.01-.13-.01-.2-.01-1.72 0-3.12 1.4-3.12 3.12s1.4 3.12 3.12 3.12 3.12-1.4 3.12-3.12c0-.07 0-.15-.01-.22l3.51-2.09c.58.64 1.42 1.03 2.31 1.03 1.72 0 3.12-1.4 3.12-3.12 0-.07 0-.15-.01-.22l3.51-2.09c.58.64 1.42 1.03 2.31 1.03 1.72 0 3.12-1.4 3.12-3.12 0-.07 0-.14-.01-.21z"/>
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

  // Utility Icons
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

  check: (props) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path d="M7 10l2 2 5-5-1.4-1.4L9 9.2 7.4 7.6 6 9z"/>
      <circle cx="10" cy="10" r="8" fill="none" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),

  plus: (props) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),

  close: (props) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),

  arrowUp: (props) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path d="M10 4l6 6H4l6-6z"/>
      <rect x="9" y="8" width="2" height="8" fill="currentColor"/>
    </svg>
  ),

  arrowDown: (props) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path d="M10 16l-6-6h12l-6 6z"/>
      <rect x="9" y="4" width="2" height="8" fill="currentColor"/>
    </svg>
  ),

  claim: (props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9L12 7.5 8.5 11H11v4h2v-4h2.5z"/>
    </svg>
  ),

  upgrade: (props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  ),

  settings: (props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
    </svg>
  )
};

export default Icons;