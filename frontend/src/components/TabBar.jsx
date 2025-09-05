// frontend/src/components/TabBar.jsx
import React, { useState, useEffect } from 'react';
import { Icons } from './Icons';

/**
 * VipTon TabBar Component
 * Bottom navigation bar with iOS-style design
 */
const TabBar = ({
  activeTab = 'home',
  onTabChange,
  showBadges = {
    home: 0,
    mining: 0,
    tasks: 0,
    referrals: 0,
    wallet: 0
  }
}) => {
  const [selectedTab, setSelectedTab] = useState(activeTab);

  useEffect(() => {
    setSelectedTab(activeTab);
  }, [activeTab]);

  const tabs = [
    {
      id: 'home',
      icon: Icons.home,
      label: 'Home',
      badge: showBadges.home
    },
    {
      id: 'mining',
      icon: Icons.mining,
      label: 'Mining',
      badge: showBadges.mining
    },
    {
      id: 'tasks',
      icon: Icons.tasks,
      label: 'Tasks',
      badge: showBadges.tasks
    },
    {
      id: 'referrals',
      icon: Icons.referrals,
      label: 'Referrals',
      badge: showBadges.referrals
    },
    {
      id: 'wallet',
      icon: Icons.wallet,
      label: 'Wallet',
      badge: showBadges.wallet
    }
  ];

  const handleTabClick = (tabId) => {
    setSelectedTab(tabId);
    if (onTabChange) {
      onTabChange(tabId);
    }

    // Add haptic feedback if available
    if (window.Telegram?.WebApp?.HapticFeedback) {
      window.Telegram.WebApp.HapticFeedback.impactOccurred('light');
    }
  };

  return (
    <>
      <style jsx>{`
        .vipton-tabbar {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(28, 28, 30, 0.98);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-top: 1px solid rgba(255, 215, 0, 0.1);
          padding: 8px 0 env(safe-area-inset-bottom, 8px);
          z-index: 100;
          transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .vipton-tabbar::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg,
            transparent 0%,
            rgba(255, 215, 0, 0.2) 50%,
            transparent 100%);
          animation: shimmer-line 3s ease-in-out infinite;
        }

        @keyframes shimmer-line {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        .tabbar-container {
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding: 0 8px;
          max-width: 500px;
          margin: 0 auto;
        }

        .tab-item {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 6px 4px;
          background: transparent;
          border: none;
          cursor: pointer;
          position: relative;
          transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          -webkit-tap-highlight-color: transparent;
          outline: none;
        }

        .tab-item::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 44px;
          height: 44px;
          background: rgba(255, 215, 0, 0);
          border-radius: 12px;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .tab-item.active::before {
          background: rgba(255, 215, 0, 0.1);
        }

        .tab-item:hover:not(:active)::before {
          background: rgba(255, 215, 0, 0.05);
        }

        .tab-item:active {
          transform: scale(0.95);
        }

        .tab-icon-wrapper {
          position: relative;
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 4px;
          z-index: 1;
          transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .tab-item.active .tab-icon-wrapper {
          transform: translateY(-2px);
        }

        .tab-icon {
          width: 24px;
          height: 24px;
          color: #8E8E93;
          transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .tab-item.active .tab-icon {
          color: #FFD700;
        }

        .tab-item:hover .tab-icon {
          color: rgba(255, 215, 0, 0.8);
        }

        .tab-icon svg {
          width: 100%;
          height: 100%;
        }

        .tab-label {
          font-size: 11px;
          font-weight: 600;
          color: #8E8E93;
          z-index: 1;
          transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
          letter-spacing: -0.2px;
        }

        .tab-item.active .tab-label {
          color: #FFD700;
        }

        .tab-item:hover .tab-label {
          color: rgba(255, 215, 0, 0.8);
        }

        /* Badge */
        .tab-badge {
          position: absolute;
          top: -2px;
          right: -2px;
          min-width: 16px;
          height: 16px;
          padding: 0 4px;
          background: #FF3B30;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: 700;
          color: #FFFFFF;
          border: 2px solid #1C1C1E;
          z-index: 2;
          animation: badge-pulse 2s ease-in-out infinite;
        }

        @keyframes badge-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        .tab-badge.large {
          background: #FFD700;
          color: #000000;
        }

        /* Active tab indicator */
        .tab-indicator {
          position: absolute;
          top: -2px;
          left: 50%;
          transform: translateX(-50%);
          width: 20px;
          height: 3px;
          background: linear-gradient(90deg, #FFD700, #FFED4E);
          border-radius: 2px;
          opacity: 0;
          transition: opacity 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .tab-item.active .tab-indicator {
          opacity: 1;
          animation: glow 2s ease-in-out infinite;
        }

        @keyframes glow {
          0%, 100% { 
            box-shadow: 0 0 8px rgba(255, 215, 0, 0.5);
          }
          50% { 
            box-shadow: 0 0 16px rgba(255, 215, 0, 0.8);
          }
        }

        /* Hidden state */
        .vipton-tabbar.hidden {
          transform: translateY(100%);
        }

        /* Mobile Responsive */
        @media (max-width: 390px) {
          .tab-item {
            padding: 4px 2px;
          }

          .tab-icon-wrapper {
            width: 24px;
            height: 24px;
          }

          .tab-icon {
            width: 20px;
            height: 20px;
          }

          .tab-label {
            font-size: 10px;
          }
        }

        @media (max-width: 320px) {
          .tab-label {
            font-size: 9px;
          }

          .tab-item::before {
            width: 36px;
            height: 36px;
          }
        }

        /* Landscape mode */
        @media (max-height: 400px) and (orientation: landscape) {
          .vipton-tabbar {
            padding: 4px 0 env(safe-area-inset-bottom, 4px);
          }

          .tab-icon-wrapper {
            margin-bottom: 2px;
          }

          .tab-label {
            font-size: 10px;
          }
        }
      `}</style>

      <nav className="vipton-tabbar">
        <div className="tabbar-container">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = selectedTab === tab.id;

            return (
              <button
                key={tab.id}
                className={`tab-item ${isActive ? 'active' : ''}`}
                onClick={() => handleTabClick(tab.id)}
                aria-label={tab.label}
                aria-current={isActive ? 'page' : undefined}
              >
                <div className="tab-indicator" />

                <div className="tab-icon-wrapper">
                  <span className="tab-icon">
                    <Icon />
                  </span>

                  {tab.badge > 0 && (
                    <span className={`tab-badge ${tab.badge > 99 ? 'large' : ''}`}>
                      {tab.badge > 99 ? '99+' : tab.badge}
                    </span>
                  )}
                </div>

                <span className="tab-label">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default TabBar;