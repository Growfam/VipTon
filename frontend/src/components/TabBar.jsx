// frontend/src/components/TabBar.jsx
import React, { useState, useEffect } from 'react';
import { Icons } from './Icons';

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

    if (window.Telegram?.WebApp?.HapticFeedback) {
      window.Telegram.WebApp.HapticFeedback.impactOccurred('light');
    }
  };

  return (
    <>
      <style>{`
        .vipton-tabbar {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: #000000;
          border-top: 0.5px solid rgba(255, 215, 0, 0.15);
          padding: 8px 0;
          padding-bottom: env(safe-area-inset-bottom, 8px);
          z-index: 100;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }

        .tabbar-container {
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding: 0 8px;
          max-width: 500px;
          margin: 0 auto;
          height: 56px;
        }

        .tab-item {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 4px;
          background: transparent;
          border: none;
          cursor: pointer;
          position: relative;
          transition: all 0.2s ease;
          -webkit-tap-highlight-color: transparent;
          outline: none;
          text-decoration: none;
        }

        .tab-item:active {
          transform: scale(0.95);
        }

        .tab-icon-wrapper {
          position: relative;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 4px;
          transition: all 0.2s ease;
        }

        .tab-icon {
          width: 24px;
          height: 24px;
          color: #666666;
          transition: all 0.2s ease;
        }

        .tab-item.active .tab-icon {
          color: #FFD700;
        }

        .tab-item:hover .tab-icon {
          color: #FFC107;
        }

        .tab-icon svg {
          width: 100%;
          height: 100%;
          fill: currentColor;
        }

        .tab-label {
          font-size: 10px;
          font-weight: 500;
          color: #666666;
          transition: all 0.2s ease;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
          letter-spacing: -0.1px;
        }

        .tab-item.active .tab-label {
          color: #FFD700;
          font-weight: 600;
        }

        .tab-item:hover .tab-label {
          color: #FFC107;
        }

        /* Active indicator dot */
        .tab-item.active::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 4px;
          background: #FFD700;
          border-radius: 50%;
          box-shadow: 0 0 8px rgba(255, 215, 0, 0.6);
        }

        /* Badge */
        .tab-badge {
          position: absolute;
          top: -4px;
          right: 50%;
          transform: translateX(12px);
          min-width: 18px;
          height: 18px;
          padding: 0 5px;
          background: #FF3B30;
          border-radius: 9px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 600;
          color: #FFFFFF;
          border: 1.5px solid #000000;
          z-index: 2;
        }

        .tab-badge.large {
          background: #FFD700;
          color: #000000;
        }

        /* Mobile Responsive */
        @media (max-width: 390px) {
          .tabbar-container {
            height: 52px;
          }
          
          .tab-icon-wrapper {
            width: 22px;
            height: 22px;
          }

          .tab-icon {
            width: 22px;
            height: 22px;
          }

          .tab-label {
            font-size: 10px;
          }
        }

        @media (max-width: 320px) {
          .tab-label {
            font-size: 9px;
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