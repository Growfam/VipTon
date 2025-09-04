import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../app/App';

// Import global styles
import '../shared/auth/styles/variables.css';
import '../shared/auth/styles/auth.css';

// Initialize VipTon App
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Remove preloader when React is loaded
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.body.classList.add('app-loaded');
  }, 100);
});

// Handle Telegram Web App
if (window.Telegram?.WebApp) {
  const tg = window.Telegram.WebApp;

  // Ready event
  tg.ready();

  // Expand to full height
  tg.expand();

  // Set header color
  tg.setHeaderColor('#000000');
  tg.setBackgroundColor('#000000');

  // Enable closing confirmation
  tg.enableClosingConfirmation();

  // Log init data (for debugging)
  console.log('Telegram WebApp initialized:', {
    initData: tg.initData,
    initDataUnsafe: tg.initDataUnsafe,
    version: tg.version,
    platform: tg.platform,
    colorScheme: tg.colorScheme
  });
}