// frontend/pages/home/HomePage.jsx
import React, { useState, useEffect } from 'react';
import Header from '../../src/components/Header';
import TabBar from '../../src/components/TabBar';
import { Icons } from '../../src/components/Icons';

// Import auth context hooks
import { useAuth, useVipStatus, useTonBalance } from '../../shared/auth/context/AuthContext';
import AuthLoader from '../../shared/auth/components/AuthLoader';
import AuthError from '../../shared/auth/components/AuthError';

/**
 * VipTon Home Page Component with Header and TabBar
 */
const HomePage = () => {
    const { user, loading, error, isAuthenticated, login, logout } = useAuth();
    const { isVip, level: vipLevel } = useVipStatus();
    const { balance: tonBalance, formatted: tonFormatted } = useTonBalance();

    const [activeTab, setActiveTab] = useState('home');
    const [notifications, setNotifications] = useState(3);
    const [badges, setBadges] = useState({
        home: 0,
        mining: 2,
        tasks: 5,
        referrals: 1,
        wallet: 0
    });

    // Loading state
    if (loading) {
        return <AuthLoader message="Loading VipTon..." showProgress={false} />;
    }

    // Error state
    if (error && !isAuthenticated) {
        return (
            <AuthError
                error={{ message: error }}
                title="Connection Error"
                message={error}
                canRetry={true}
                onRetry={login}
            />
        );
    }

    // Not authenticated
    if (!isAuthenticated) {
        return <WelcomeScreen onLogin={login} />;
    }

    // Handler functions for Header
    const handleLogoClick = () => {
        setActiveTab('home');
    };

    const handleBalanceClick = () => {
        setActiveTab('wallet');
    };

    const handleShopClick = () => {
        console.log('Opening shop...');
        // TODO: Navigate to shop or open shop modal
    };

    const handleHistoryClick = () => {
        console.log('Opening history...');
        // TODO: Navigate to history or open history modal
    };

    const handleNotificationClick = () => {
        setNotifications(0);
        console.log('Opening notifications...');
        // TODO: Show notifications panel
    };

    // Handler for TabBar
    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
        // Clear badge for selected tab
        setBadges(prev => ({
            ...prev,
            [tabId]: 0
        }));
    };

    // Main App Interface
    return (
        <>
            <style jsx>{`
                .vipton-app {
                    min-height: 100vh;
                    background: #000000;
                    font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
                    color: #FFFFFF;
                }

                .vipton-content {
                    padding-top: 60px; /* Header height */
                    padding-bottom: 80px; /* TabBar height */
                    min-height: 100vh;
                }

                .content-wrapper {
                    padding: 20px;
                    max-width: 600px;
                    margin: 0 auto;
                }

                /* Reset styles */
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                body {
                    background: #000000;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                }
            `}</style>

            <div className="vipton-app">
                <Header
                    balance={tonBalance}
                    vipLevel={vipLevel}
                    notifications={notifications}
                    onLogoClick={handleLogoClick}
                    onBalanceClick={handleBalanceClick}
                    onShopClick={handleShopClick}
                    onHistoryClick={handleHistoryClick}
                    onNotificationClick={handleNotificationClick}
                />

                <div className="vipton-content">
                    <div className="content-wrapper">
                        {activeTab === 'home' && (
                            <HomeContent
                                user={user}
                                tonBalance={tonBalance}
                                vipLevel={vipLevel}
                                isVip={isVip}
                            />
                        )}

                        {activeTab === 'mining' && (
                            <MiningContent user={user} />
                        )}

                        {activeTab === 'tasks' && (
                            <TasksContent />
                        )}

                        {activeTab === 'referrals' && (
                            <ReferralsContent user={user} />
                        )}

                        {activeTab === 'wallet' && (
                            <WalletContent
                                balance={tonBalance}
                                user={user}
                            />
                        )}
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

/**
 * Welcome Screen Component
 */
const WelcomeScreen = ({ onLogin }) => (
    <>
        <style jsx>{`
            .vipton-welcome {
                min-height: 100vh;
                background: #000000;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 20px;
                text-align: center;
                position: relative;
                overflow: hidden;
            }
            
            .vipton-bg-gradient {
                position: absolute;
                inset: 0;
                background: radial-gradient(circle at center top, 
                    rgba(255, 215, 0, 0.1) 0%, 
                    transparent 50%);
                pointer-events: none;
            }
            
            .vipton-welcome-content {
                position: relative;
                z-index: 1;
                max-width: 400px;
                width: 100%;
            }
            
            .vipton-logo-container {
                width: 120px;
                height: 120px;
                margin: 0 auto 32px;
                background: linear-gradient(135deg, #FFD700, #FFC107);
                border-radius: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 48px;
                font-weight: 800;
                color: #000000;
                box-shadow: 0 10px 40px rgba(255, 215, 0, 0.3);
                animation: vipton-float 3s ease-in-out infinite;
            }
            
            @keyframes vipton-float {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
            }
            
            .vipton-welcome-title {
                font-size: 36px;
                font-weight: 700;
                color: #FFFFFF;
                margin: 0 0 12px;
                letter-spacing: -1px;
            }
            
            .vipton-welcome-subtitle {
                font-size: 18px;
                color: #8E8E93;
                margin: 0 0 48px;
                line-height: 1.5;
            }
            
            .vipton-auth-btn {
                width: 100%;
                padding: 18px;
                background: linear-gradient(135deg, #FFD700, #FFED4E, #FFC107);
                color: #000000;
                border: none;
                border-radius: 16px;
                font-size: 18px;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                box-shadow: 0 4px 24px rgba(255, 215, 0, 0.3);
            }
            
            .vipton-auth-btn:hover {
                transform: translateY(-2px);
                box-shadow: 0 8px 32px rgba(255, 215, 0, 0.5);
            }
            
            .vipton-auth-btn:active {
                transform: translateY(0);
            }
            
            .vipton-features {
                margin-top: 48px;
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 20px;
            }
            
            .vipton-feature {
                text-align: center;
            }
            
            .vipton-feature-icon {
                width: 48px;
                height: 48px;
                margin: 0 auto 8px;
                background: rgba(255, 215, 0, 0.1);
                border-radius: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #FFD700;
            }
            
            .vipton-feature-icon svg {
                width: 24px;
                height: 24px;
            }
            
            .vipton-feature-text {
                font-size: 12px;
                color: #8E8E93;
            }
        `}</style>

        <div className="vipton-welcome">
            <div className="vipton-bg-gradient" />

            <div className="vipton-welcome-content">
                <div className="vipton-logo-container">VT</div>

                <h1 className="vipton-welcome-title">VipTon</h1>
                <p className="vipton-welcome-subtitle">
                    Premium TON Mining Platform
                </p>

                <button className="vipton-auth-btn" onClick={onLogin}>
                    Login with Telegram
                </button>

                <div className="vipton-features">
                    <div className="vipton-feature">
                        <div className="vipton-feature-icon">
                            <Icons.coin />
                        </div>
                        <div className="vipton-feature-text">Earn TON</div>
                    </div>
                    <div className="vipton-feature">
                        <div className="vipton-feature-icon">
                            <Icons.crown />
                        </div>
                        <div className="vipton-feature-text">VIP Benefits</div>
                    </div>
                    <div className="vipton-feature">
                        <div className="vipton-feature-icon">
                            <Icons.mining />
                        </div>
                        <div className="vipton-feature-text">Fast Mining</div>
                    </div>
                </div>
            </div>
        </div>
    </>
);

/**
 * Home Content Component
 */
const HomeContent = ({ user, tonBalance, vipLevel, isVip }) => (
    <>
        <style jsx>{`
            .home-container {
                display: flex;
                flex-direction: column;
                gap: 20px;
                animation: fadeIn 0.5s ease-in;
            }

            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }

            .welcome-section {
                margin-bottom: 8px;
            }

            .welcome-title {
                font-size: 28px;
                font-weight: 700;
                color: #FFFFFF;
                margin: 0 0 4px;
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
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
                border: 1px solid rgba(255, 215, 0, 0.1);
                border-radius: 16px;
                padding: 20px;
                text-align: center;
                position: relative;
                overflow: hidden;
                transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            }

            .stat-card:hover {
                transform: translateY(-2px);
                border-color: rgba(255, 215, 0, 0.2);
            }

            .stat-card::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 2px;
                background: linear-gradient(90deg, 
                    transparent, rgba(255, 215, 0, 0.5), transparent);
            }

            .stat-icon {
                width: 32px;
                height: 32px;
                margin: 0 auto 12px;
                color: #FFD700;
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

            .action-section {
                margin-top: 12px;
            }

            .action-grid {
                display: grid;
                gap: 12px;
            }

            .action-btn {
                padding: 16px;
                background: rgba(28, 28, 30, 0.9);
                border: 1px solid rgba(255, 215, 0, 0.1);
                border-radius: 14px;
                color: #FFFFFF;
                font-size: 16px;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
            }

            .action-btn:hover {
                background: rgba(255, 215, 0, 0.1);
                border-color: rgba(255, 215, 0, 0.3);
                transform: translateY(-2px);
            }

            .action-btn.primary {
                background: linear-gradient(135deg, #FFD700, #FFC107);
                color: #000000;
                border: none;
            }

            .action-btn.primary:hover {
                box-shadow: 0 4px 20px rgba(255, 215, 0, 0.4);
            }

            .action-btn svg {
                width: 20px;
                height: 20px;
            }

            .info-card {
                background: rgba(28, 28, 30, 0.9);
                border-radius: 16px;
                padding: 20px;
                border: 1px solid rgba(255, 215, 0, 0.1);
                margin-top: 20px;
            }

            .info-title {
                font-size: 18px;
                font-weight: 600;
                color: #FFD700;
                margin-bottom: 12px;
                display: flex;
                align-items: center;
                gap: 8px;
            }

            .info-title svg {
                width: 20px;
                height: 20px;
            }

            .info-text {
                font-size: 14px;
                color: #8E8E93;
                line-height: 1.5;
            }
        `}</style>

        <div className="home-container">
            <div className="welcome-section">
                <h1 className="welcome-title">
                    Welcome, {user?.first_name || 'Miner'}!
                </h1>
                <p className="welcome-subtitle">
                    Your mining empire awaits
                </p>
            </div>

            <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-icon">
                        <Icons.coin />
                    </div>
                    <div className="stat-value">{tonBalance.toFixed(2)}</div>
                    <div className="stat-label">TON Balance</div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon">
                        {vipLevel >= 3 ? <Icons.diamond /> : vipLevel >= 2 ? <Icons.crown /> : <Icons.star />}
                    </div>
                    <div className="stat-value">
                        {isVip ? `Level ${vipLevel}` : 'Free'}
                    </div>
                    <div className="stat-label">VIP Status</div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon">
                        <Icons.referrals />
                    </div>
                    <div className="stat-value">{user?.total_referrals || 0}</div>
                    <div className="stat-label">Referrals</div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon">
                        <Icons.arrowUp />
                    </div>
                    <div className="stat-value">{user?.total_earned || 0}</div>
                    <div className="stat-label">Total Earned</div>
                </div>
            </div>

            <div className="action-section">
                <div className="action-grid">
                    <button className="action-btn primary">
                        <Icons.mining />
                        <span>Start Mining</span>
                    </button>
                    <button className="action-btn">
                        <Icons.claim />
                        <span>Claim Rewards</span>
                    </button>
                    <button className="action-btn">
                        <Icons.upgrade />
                        <span>Upgrade Miners</span>
                    </button>
                </div>
            </div>

            {!isVip && (
                <div className="info-card">
                    <div className="info-title">
                        <Icons.crown />
                        <span>Unlock VIP Benefits</span>
                    </div>
                    <p className="info-text">
                        Get auto-claim, priority withdrawals, and exclusive bonuses.
                        Upgrade to VIP today and maximize your earnings!
                    </p>
                </div>
            )}
        </div>
    </>
);

/**
 * Mining Content Component
 */
const MiningContent = ({ user }) => (
    <>
        <style jsx>{`
            .mining-container {
                padding: 20px 0;
                animation: fadeIn 0.5s ease-in;
            }

            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }

            .mining-header {
                text-align: center;
                margin-bottom: 24px;
            }

            .mining-title {
                font-size: 24px;
                font-weight: 700;
                color: #FFFFFF;
                margin-bottom: 8px;
            }

            .mining-subtitle {
                font-size: 16px;
                color: #8E8E93;
            }

            .miners-list {
                display: flex;
                flex-direction: column;
                gap: 16px;
            }

            .miner-card {
                background: rgba(28, 28, 30, 0.9);
                border: 1px solid rgba(255, 215, 0, 0.1);
                border-radius: 16px;
                padding: 20px;
                position: relative;
            }

            .miner-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 12px;
            }

            .miner-name {
                font-size: 18px;
                font-weight: 600;
                color: #FFFFFF;
            }

            .miner-status {
                padding: 4px 12px;
                background: rgba(52, 199, 89, 0.2);
                color: #34C759;
                border-radius: 12px;
                font-size: 12px;
                font-weight: 600;
            }

            .miner-status.inactive {
                background: rgba(255, 59, 48, 0.2);
                color: #FF3B30;
            }

            .miner-stats {
                display: flex;
                justify-content: space-between;
                margin-bottom: 16px;
            }

            .miner-stat {
                text-align: center;
            }

            .miner-stat-value {
                font-size: 16px;
                font-weight: 600;
                color: #FFD700;
            }

            .miner-stat-label {
                font-size: 12px;
                color: #8E8E93;
                margin-top: 4px;
            }

            .miner-actions {
                display: flex;
                gap: 8px;
            }

            .miner-btn {
                flex: 1;
                padding: 10px;
                background: rgba(255, 215, 0, 0.1);
                border: 1px solid rgba(255, 215, 0, 0.2);
                border-radius: 10px;
                color: #FFD700;
                font-size: 14px;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.2s;
            }

            .miner-btn:hover {
                background: rgba(255, 215, 0, 0.2);
                transform: translateY(-1px);
            }
        `}</style>

        <div className="mining-container">
            <div className="mining-header">
                <h2 className="mining-title">Mining Dashboard</h2>
                <p className="mining-subtitle">Manage your mining operations</p>
            </div>

            <div className="miners-list">
                <div className="miner-card">
                    <div className="miner-header">
                        <span className="miner-name">Basic Miner</span>
                        <span className="miner-status">Active</span>
                    </div>
                    <div className="miner-stats">
                        <div className="miner-stat">
                            <div className="miner-stat-value">2.5</div>
                            <div className="miner-stat-label">TON/Day</div>
                        </div>
                        <div className="miner-stat">
                            <div className="miner-stat-value">Level 1</div>
                            <div className="miner-stat-label">Current</div>
                        </div>
                        <div className="miner-stat">
                            <div className="miner-stat-value">1:45:23</div>
                            <div className="miner-stat-label">Next Claim</div>
                        </div>
                    </div>
                    <div className="miner-actions">
                        <button className="miner-btn">Claim</button>
                        <button className="miner-btn">Upgrade</button>
                    </div>
                </div>

                <div className="miner-card">
                    <div className="miner-header">
                        <span className="miner-name">Advanced Miner</span>
                        <span className="miner-status inactive">Inactive</span>
                    </div>
                    <div className="miner-stats">
                        <div className="miner-stat">
                            <div className="miner-stat-value">5.0</div>
                            <div className="miner-stat-label">TON/Day</div>
                        </div>
                        <div className="miner-stat">
                            <div className="miner-stat-value">Level 2</div>
                            <div className="miner-stat-label">Current</div>
                        </div>
                        <div className="miner-stat">
                            <div className="miner-stat-value">Ready</div>
                            <div className="miner-stat-label">Next Claim</div>
                        </div>
                    </div>
                    <div className="miner-actions">
                        <button className="miner-btn">Activate</button>
                        <button className="miner-btn">Upgrade</button>
                    </div>
                </div>
            </div>
        </div>
    </>
);

/**
 * Tasks Content Component
 */
const TasksContent = () => (
    <>
        <style jsx>{`
            .tasks-container {
                padding: 20px 0;
                animation: fadeIn 0.5s ease-in;
            }

            .tasks-header {
                text-align: center;
                margin-bottom: 24px;
            }

            .tasks-title {
                font-size: 24px;
                font-weight: 700;
                color: #FFFFFF;
                margin-bottom: 8px;
            }

            .tasks-subtitle {
                font-size: 16px;
                color: #8E8E93;
            }

            .tasks-list {
                display: flex;
                flex-direction: column;
                gap: 12px;
            }

            .task-card {
                background: rgba(28, 28, 30, 0.9);
                border: 1px solid rgba(255, 215, 0, 0.1);
                border-radius: 14px;
                padding: 16px;
                display: flex;
                align-items: center;
                gap: 12px;
                cursor: pointer;
                transition: all 0.2s;
            }

            .task-card:hover {
                transform: translateX(4px);
                border-color: rgba(255, 215, 0, 0.2);
            }

            .task-icon {
                width: 40px;
                height: 40px;
                background: rgba(255, 215, 0, 0.1);
                border-radius: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #FFD700;
            }

            .task-info {
                flex: 1;
            }

            .task-name {
                font-size: 16px;
                font-weight: 600;
                color: #FFFFFF;
                margin-bottom: 4px;
            }

            .task-reward {
                font-size: 14px;
                color: #FFD700;
            }

            .task-arrow {
                width: 20px;
                height: 20px;
                color: #8E8E93;
            }
        `}</style>

        <div className="tasks-container">
            <div className="tasks-header">
                <h2 className="tasks-title">Available Tasks</h2>
                <p className="tasks-subtitle">Complete tasks to earn more TON</p>
            </div>

            <div className="tasks-list">
                <div className="task-card">
                    <div className="task-icon">
                        <Icons.check />
                    </div>
                    <div className="task-info">
                        <div className="task-name">Subscribe to Channel</div>
                        <div className="task-reward">+0.5 TON</div>
                    </div>
                    <div className="task-arrow">→</div>
                </div>

                <div className="task-card">
                    <div className="task-icon">
                        <Icons.star />
                    </div>
                    <div className="task-info">
                        <div className="task-name">Daily Check-in</div>
                        <div className="task-reward">+0.1 TON</div>
                    </div>
                    <div className="task-arrow">→</div>
                </div>

                <div className="task-card">
                    <div className="task-icon">
                        <Icons.referrals />
                    </div>
                    <div className="task-info">
                        <div className="task-name">Invite 3 Friends</div>
                        <div className="task-reward">+2.0 TON</div>
                    </div>
                    <div className="task-arrow">→</div>
                </div>
            </div>
        </div>
    </>
);

/**
 * Referrals Content Component
 */
const ReferralsContent = ({ user }) => (
    <>
        <style jsx>{`
            .referrals-container {
                padding: 20px 0;
                animation: fadeIn 0.5s ease-in;
            }

            .referrals-header {
                text-align: center;
                margin-bottom: 24px;
            }

            .referrals-title {
                font-size: 24px;
                font-weight: 700;
                color: #FFFFFF;
                margin-bottom: 8px;
            }

            .referrals-subtitle {
                font-size: 16px;
                color: #8E8E93;
            }

            .referral-code-card {
                background: linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(255, 193, 7, 0.1));
                border: 1px solid rgba(255, 215, 0, 0.2);
                border-radius: 16px;
                padding: 20px;
                text-align: center;
                margin-bottom: 20px;
            }

            .referral-code-label {
                font-size: 14px;
                color: #8E8E93;
                margin-bottom: 8px;
            }

            .referral-code {
                font-size: 24px;
                font-weight: 700;
                color: #FFD700;
                margin-bottom: 16px;
                font-family: 'SF Mono', monospace;
            }

            .copy-btn {
                padding: 12px 24px;
                background: linear-gradient(135deg, #FFD700, #FFC107);
                color: #000000;
                border: none;
                border-radius: 12px;
                font-size: 16px;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.2s;
            }

            .copy-btn:hover {
                transform: translateY(-2px);
                box-shadow: 0 4px 16px rgba(255, 215, 0, 0.3);
            }

            .referral-stats {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 12px;
                margin-bottom: 20px;
            }

            .referral-stat {
                background: rgba(28, 28, 30, 0.9);
                border: 1px solid rgba(255, 215, 0, 0.1);
                border-radius: 12px;
                padding: 16px;
                text-align: center;
            }

            .referral-stat-value {
                font-size: 20px;
                font-weight: 600;
                color: #FFD700;
                margin-bottom: 4px;
            }

            .referral-stat-label {
                font-size: 12px;
                color: #8E8E93;
            }
        `}</style>

        <div className="referrals-container">
            <div className="referrals-header">
                <h2 className="referrals-title">Referral Program</h2>
                <p className="referrals-subtitle">Invite friends and earn rewards</p>
            </div>

            <div className="referral-code-card">
                <div className="referral-code-label">Your Referral Code</div>
                <div className="referral-code">VIP{user?.id || '12345'}</div>
                <button className="copy-btn" onClick={() => {
                    navigator.clipboard.writeText(`VIP${user?.id || '12345'}`);
                    alert('Referral code copied!');
                }}>
                    Copy Code
                </button>
            </div>

            <div className="referral-stats">
                <div className="referral-stat">
                    <div className="referral-stat-value">{user?.total_referrals || 0}</div>
                    <div className="referral-stat-label">Total Referrals</div>
                </div>
                <div className="referral-stat">
                    <div className="referral-stat-value">5%</div>
                    <div className="referral-stat-label">Commission Rate</div>
                </div>
                <div className="referral-stat">
                    <div className="referral-stat-value">12.5</div>
                    <div className="referral-stat-label">Earned (TON)</div>
                </div>
                <div className="referral-stat">
                    <div className="referral-stat-value">3</div>
                    <div className="referral-stat-label">Active Today</div>
                </div>
            </div>
        </div>
    </>
);

/**
 * Wallet Content Component
 */
const WalletContent = ({ balance, user }) => (
    <>
        <style jsx>{`
            .wallet-container {
                padding: 20px 0;
                animation: fadeIn 0.5s ease-in;
            }

            .wallet-balance-card {
                background: linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(28, 28, 30, 0.9));
                border: 1px solid rgba(255, 215, 0, 0.2);
                border-radius: 20px;
                padding: 32px;
                text-align: center;
                margin-bottom: 24px;
                position: relative;
                overflow: hidden;
            }

            .wallet-balance-card::before {
                content: '';
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.1), transparent);
                animation: shimmer 3s infinite;
            }

            @keyframes shimmer {
                0% { left: -100%; }
                100% { left: 100%; }
            }

            .wallet-balance-label {
                font-size: 14px;
                color: #8E8E93;
                margin-bottom: 8px;
            }

            .wallet-balance-amount {
                font-size: 42px;
                font-weight: 700;
                color: #FFD700;
                margin-bottom: 4px;
                font-family: 'SF Mono', monospace;
            }

            .wallet-balance-currency {
                font-size: 18px;
                color: rgba(255, 215, 0, 0.8);
            }

            .wallet-actions {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 12px;
                margin-bottom: 24px;
            }

            .wallet-btn {
                padding: 16px;
                background: rgba(28, 28, 30, 0.9);
                border: 1px solid rgba(255, 215, 0, 0.1);
                border-radius: 14px;
                font-size: 16px;
                font-weight: 600;
                color: #FFFFFF;
                cursor: pointer;
                transition: all 0.2s;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 8px;
            }

            .wallet-btn:hover {
                background: rgba(255, 215, 0, 0.1);
                border-color: rgba(255, 215, 0, 0.2);
                transform: translateY(-2px);
            }

            .wallet-btn.primary {
                background: linear-gradient(135deg, #FFD700, #FFC107);
                color: #000000;
                border: none;
            }

            .wallet-btn svg {
                width: 24px;
                height: 24px;
            }

            .wallet-history {
                background: rgba(28, 28, 30, 0.9);
                border: 1px solid rgba(255, 215, 0, 0.1);
                border-radius: 16px;
                padding: 20px;
            }

            .wallet-history-title {
                font-size: 18px;
                font-weight: 600;
                color: #FFFFFF;
                margin-bottom: 16px;
            }

            .history-item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 12px 0;
                border-bottom: 1px solid rgba(255, 215, 0, 0.05);
            }

            .history-item:last-child {
                border-bottom: none;
            }

            .history-info {
                display: flex;
                align-items: center;
                gap: 12px;
            }

            .history-icon {
                width: 32px;
                height: 32px;
                background: rgba(255, 215, 0, 0.1);
                border-radius: 8px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #FFD700;
            }

            .history-details {
                text-align: left;
            }

            .history-type {
                font-size: 14px;
                font-weight: 600;
                color: #FFFFFF;
            }

            .history-date {
                font-size: 12px;
                color: #8E8E93;
            }

            .history-amount {
                font-size: 16px;
                font-weight: 600;
            }

            .history-amount.positive {
                color: #34C759;
            }

            .history-amount.negative {
                color: #FF3B30;
            }
        `}</style>

        <div className="wallet-container">
            <div className="wallet-balance-card">
                <div className="wallet-balance-label">Total Balance</div>
                <div className="wallet-balance-amount">{balance.toFixed(2)}</div>
                <div className="wallet-balance-currency">TON</div>
            </div>

            <div className="wallet-actions">
                <button className="wallet-btn primary">
                    <Icons.arrowDown />
                    <span>Deposit</span>
                </button>
                <button className="wallet-btn">
                    <Icons.arrowUp />
                    <span>Withdraw</span>
                </button>
                <button className="wallet-btn">
                    <Icons.history />
                    <span>History</span>
                </button>
                <button className="wallet-btn">
                    <Icons.settings />
                    <span>Settings</span>
                </button>
            </div>

            <div className="wallet-history">
                <h3 className="wallet-history-title">Recent Transactions</h3>

                <div className="history-item">
                    <div className="history-info">
                        <div className="history-icon">
                            <Icons.arrowDown />
                        </div>
                        <div className="history-details">
                            <div className="history-type">Deposit</div>
                            <div className="history-date">Today, 14:23</div>
                        </div>
                    </div>
                    <div className="history-amount positive">+50.00</div>
                </div>

                <div className="history-item">
                    <div className="history-info">
                        <div className="history-icon">
                            <Icons.claim />
                        </div>
                        <div className="history-details">
                            <div className="history-type">Mining Claim</div>
                            <div className="history-date">Today, 12:00</div>
                        </div>
                    </div>
                    <div className="history-amount positive">+2.50</div>
                </div>

                <div className="history-item">
                    <div className="history-info">
                        <div className="history-icon">
                            <Icons.shop />
                        </div>
                        <div className="history-details">
                            <div className="history-type">Miner Purchase</div>
                            <div className="history-date">Yesterday</div>
                        </div>
                    </div>
                    <div className="history-amount negative">-25.00</div>
                </div>
            </div>
        </div>
    </>
);

export default HomePage;