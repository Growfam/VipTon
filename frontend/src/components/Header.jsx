// frontend/src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { Icons } from './Icons';

/**
 * VipTon Header Component
 * Premium iOS-style header with balance, VIP status, and actions
 */
const Header = ({
  balance = 0,
  vipLevel = 0,
  notifications = 0,
  onLogoClick,
  onBalanceClick,
  onShopClick,
  onHistoryClick,
  onNotificationClick
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const formatBalance = (amount) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  };

  return (
    <>
      <style jsx>{`
        .vipton-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 60px;
          background: rgba(28, 28, 30, 0.95);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 215, 0, 0.1);
          z-index: 100;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .vipton-header.scrolled {
          background: rgba(28, 28, 30, 0.98);
          box-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);
        }

        .header-content {
          height: 100%;
          padding: 0 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 100%;
          margin: 0 auto;
        }

        /* Left Section */
        .header-left {
          display: flex;
          align-items: center;
          gap: 12px;
          flex: 0 0 auto;
        }

        .logo-container {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          transition: transform 0.2s;
          -webkit-tap-highlight-color: transparent;
        }

        .logo-container:hover {
          transform: scale(1.05);
        }

        .logo-container:active {
          transform: scale(0.98);
        }

        .logo-icon {
          width: 36px;
          height: 36px;
          background: linear-gradient(135deg, #FFD700, #FFC107);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(255, 215, 0, 0.3);
          position: relative;
        }

        .logo-icon::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 10px;
          background: linear-gradient(135deg, rgba(255,255,255,0.2), transparent);
        }

        .logo-icon svg {
          width: 20px;
          height: 20px;
          color: #000000;
          position: relative;
          z-index: 1;
        }

        .logo-text {
          font-size: 18px;
          font-weight: 800;
          color: #FFFFFF;
          letter-spacing: -0.5px;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
        }

        /* Center Section */
        .header-center {
          display: flex;
          align-items: center;
          gap: 8px;
          flex: 1;
          justify-content: center;
        }

        .balance-container {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          background: rgba(255, 215, 0, 0.1);
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.2s;
          border: 1px solid rgba(255, 215, 0, 0.1);
        }

        .balance-container:hover {
          background: rgba(255, 215, 0, 0.15);
          transform: translateY(-1px);
          border-color: rgba(255, 215, 0, 0.2);
        }

        .balance-container:active {
          transform: translateY(0);
        }

        .balance-icon {
          width: 16px;
          height: 16px;
          color: #FFD700;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .balance-icon svg {
          width: 16px;
          height: 16px;
        }

        .balance-amount {
          font-size: 14px;
          font-weight: 600;
          color: #FFD700;
          font-family: 'SF Mono', monospace;
        }

        .balance-currency {
          font-size: 12px;
          color: rgba(255, 215, 0, 0.8);
          margin-left: 2px;
          font-weight: 500;
        }

        /* VIP Badge */
        .vip-badge {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 4px 10px;
          background: linear-gradient(135deg, #FFD700, #FFC107);
          border-radius: 14px;
          cursor: pointer;
          transition: all 0.2s;
          position: relative;
          overflow: hidden;
        }

        .vip-badge::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          animation: shimmer 3s infinite;
        }

        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }

        .vip-badge:hover {
          transform: translateY(-1px);
          box-shadow: 0 2px 8px rgba(255, 215, 0, 0.4);
        }

        .vip-badge:active {
          transform: translateY(0);
        }

        .vip-badge svg {
          width: 14px;
          height: 14px;
          color: #000000;
          position: relative;
          z-index: 1;
        }

        .vip-level {
          font-size: 12px;
          font-weight: 700;
          color: #000000;
          position: relative;
          z-index: 1;
        }

        /* Right Section */
        .header-right {
          display: flex;
          align-items: center;
          gap: 8px;
          flex: 0 0 auto;
        }

        .header-btn {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: rgba(255, 215, 0, 0.05);
          border: 1px solid rgba(255, 215, 0, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
          position: relative;
          -webkit-tap-highlight-color: transparent;
        }

        .header-btn:hover {
          background: rgba(255, 215, 0, 0.1);
          border-color: rgba(255, 215, 0, 0.2);
          transform: translateY(-1px);
        }

        .header-btn:active {
          transform: translateY(0);
          background: rgba(255, 215, 0, 0.15);
        }

        .header-btn svg {
          width: 20px;
          height: 20px;
          color: #FFD700;
        }

        /* Notification Badge */
        .notification-badge {
          position: absolute;
          top: -4px;
          right: -4px;
          min-width: 16px;
          height: 16px;
          padding: 0 4px;
          background: #FF3B30;
          border-radius: 8px;
          border: 2px solid #1C1C1E;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: 700;
          color: #FFFFFF;
          animation: bounce 2s ease-in-out infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        /* Mobile Responsive */
        @media (max-width: 390px) {
          .logo-text {
            display: none;
          }
          
          .balance-currency {
            display: none;
          }

          .header-content {
            padding: 0 12px;
          }

          .header-btn {
            width: 32px;
            height: 32px;
          }

          .header-btn svg {
            width: 18px;
            height: 18px;
          }
        }

        @media (max-width: 320px) {
          .vip-badge {
            padding: 3px 8px;
          }

          .vip-level {
            font-size: 11px;
          }

          .balance-container {
            padding: 5px 10px;
          }

          .balance-amount {
            font-size: 13px;
          }
        }
      `}</style>

      <header className={`vipton-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-content">
          {/* Left Section - Logo */}
          <div className="header-left">
            <div className="logo-container" onClick={onLogoClick}>
              <div className="logo-icon">
                <Icons.logo />
              </div>
              <span className="logo-text">VipTon</span>
            </div>
          </div>

          {/* Center Section - Balance & VIP */}
          <div className="header-center">
            <div className="balance-container" onClick={onBalanceClick}>
              <span className="balance-icon">
                <Icons.coin />
              </span>
              <span className="balance-amount">{formatBalance(balance)}</span>
              <span className="balance-currency">TON</span>
            </div>

            {vipLevel > 0 && (
              <div className="vip-badge">
                {vipLevel >= 3 ? <Icons.diamond /> : vipLevel >= 2 ? <Icons.crown /> : <Icons.star />}
                <span className="vip-level">VIP {vipLevel}</span>
              </div>
            )}
          </div>

          {/* Right Section - Actions */}
          <div className="header-right">
            <button
              className="header-btn"
              onClick={onShopClick}
              aria-label="Shop"
            >
              <Icons.shop />
            </button>

            <button
              className="header-btn"
              onClick={onHistoryClick}
              aria-label="History"
            >
              <Icons.history />
            </button>

            <button
              className="header-btn"
              onClick={onNotificationClick}
              aria-label="Notifications"
            >
              <Icons.notifications />
              {notifications > 0 && (
                <span className="notification-badge">
                  {notifications > 9 ? '9+' : notifications}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;