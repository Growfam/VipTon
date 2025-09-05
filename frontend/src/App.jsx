// frontend/src/App.jsx
import React, { useState } from 'react';
import Header from './components/Header';
import TabBar from './components/TabBar';
import { Icons } from './components/Icons';

/**
 * VipTon Main App Component
 * Example of using Header and TabBar together
 */
const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [balance, setBalance] = useState(1250.50);
  const [vipLevel, setVipLevel] = useState(2);
  const [notifications, setNotifications] = useState(3);

  // Tab badges
  const [badges, setBadges] = useState({
    home: 0,
    mining: 2,
    tasks: 5,
    referrals: 1,
    wallet: 0
  });

  // Handler functions
  const handleLogoClick = () => {
    console.log('Logo clicked');
    setActiveTab('home');
  };

  const handleBalanceClick = () => {
    console.log('Balance clicked');
    setActiveTab('wallet');
  };

  const handleShopClick = () => {
    console.log('Shop clicked');
  };

  const handleHistoryClick = () => {
    console.log('History clicked');
  };

  const handleNotificationClick = () => {
    console.log('Notifications clicked');
    setNotifications(0); // Clear notifications
  };

  const handleTabChange = (tabId) => {
    console.log('Tab changed to:', tabId);
    setActiveTab(tabId);

    // Clear badge for selected tab
    setBadges(prev => ({
      ...prev,
      [tabId]: 0
    }));
  };

  // Content for each tab
  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomeContent balance={balance} vipLevel={vipLevel} />;
      case 'mining':
        return <MiningContent />;
      case 'tasks':
        return <TasksContent />;
      case 'referrals':
        return <ReferralsContent />;
      case 'wallet':
        return <WalletContent balance={balance} />;
      default:
        return <HomeContent balance={balance} vipLevel={vipLevel} />;
    }
  };

  return (
    <>
      <style jsx>{`
        .app-container {
          min-height: 100vh;
          background: #000000;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
          color: #FFFFFF;
        }

        .app-content {
          padding-top: 60px; /* Header height */
          padding-bottom: 80px; /* TabBar height */
          min-height: 100vh;
        }

        .content-wrapper {
          padding: 20px;
          max-width: 600px;
          margin: 0 auto;
        }

        /* Global styles */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          background: #000000;
          color: #FFFFFF;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>

      <div className="app-container">
        <Header
          balance={balance}
          vipLevel={vipLevel}
          notifications={notifications}
          onLogoClick={handleLogoClick}
          onBalanceClick={handleBalanceClick}
          onShopClick={handleShopClick}
          onHistoryClick={handleHistoryClick}
          onNotificationClick={handleNotificationClick}
        />

        <div className="app-content">
          <div className="content-wrapper">
            {renderContent()}
          </div>
        </div>

        <TabBar
          activeTab={activeTab}
          onTabChange={handleTabChange}
          showBadges={badges}
        />
      </div>
    </>
  );
};

// Example content components
const HomeContent = ({ balance, vipLevel }) => (
  <>
    <style jsx>{`
      .home-container {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }

      .welcome-card {
        background: rgba(28, 28, 30, 0.9);
        border-radius: 20px;
        padding: 24px;
        border: 1px solid rgba(255, 215, 0, 0.1);
      }

      .welcome-title {
        font-size: 28px;
        font-weight: 700;
        margin-bottom: 8px;
      }

      .welcome-subtitle {
        font-size: 16px;
        color: #8E8E93;
      }

      .stats-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
      }

      .stat-card {
        background: rgba(28, 28, 30, 0.9);
        border-radius: 16px;
        padding: 20px;
        border: 1px solid rgba(255, 215, 0, 0.1);
        text-align: center;
      }

      .stat-value {
        font-size: 24px;
        font-weight: 700;
        color: #FFD700;
        margin-bottom: 4px;
      }

      .stat-label {
        font-size: 14px;
        color: #8E8E93;
      }
    `}</style>

    <div className="home-container">
      <div className="welcome-card">
        <h1 className="welcome-title">Welcome to VipTon! 👋</h1>
        <p className="welcome-subtitle">Start mining TON today</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-value">{balance.toFixed(2)}</div>
          <div className="stat-label">TON Balance</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">VIP {vipLevel}</div>
          <div className="stat-label">Status Level</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">5</div>
          <div className="stat-label">Active Miners</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">12.5</div>
          <div className="stat-label">Daily Income</div>
        </div>
      </div>
    </div>
  </>
);

const MiningContent = () => (
  <div style={{ padding: '20px', textAlign: 'center' }}>
    <h2>Mining Dashboard</h2>
    <p style={{ color: '#8E8E93', marginTop: '10px' }}>Your miners are working...</p>
  </div>
);

const TasksContent = () => (
  <div style={{ padding: '20px', textAlign: 'center' }}>
    <h2>Available Tasks</h2>
    <p style={{ color: '#8E8E93', marginTop: '10px' }}>Complete tasks to earn more TON</p>
  </div>
);

const ReferralsContent = () => (
  <div style={{ padding: '20px', textAlign: 'center' }}>
    <h2>Referral System</h2>
    <p style={{ color: '#8E8E93', marginTop: '10px' }}>Invite friends and earn rewards</p>
  </div>
);

const WalletContent = ({ balance }) => (
  <div style={{ padding: '20px', textAlign: 'center' }}>
    <h2>Your Wallet</h2>
    <p style={{ fontSize: '32px', color: '#FFD700', marginTop: '20px', fontWeight: 'bold' }}>
      {balance.toFixed(2)} TON
    </p>
  </div>
);

export default App;