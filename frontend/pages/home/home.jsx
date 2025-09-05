import React, { useState, useEffect } from 'react';

// Import auth context hooks directly
import { useAuth, useVipStatus, useTonBalance } from '../../shared/auth/context/AuthContext';

// Import components directly from their files
import AuthLoader from '../../shared/auth/components/AuthLoader';
import AuthError from '../../shared/auth/components/AuthError';
import UserBadge from '../../shared/auth/components/UserBadge';
import VipBadge from '../../shared/auth/components/VipBadge';


/**
 * VipTon Home Page Component
 */
const HomePage = () => {
    const { user, loading, error, isAuthenticated, login, logout } = useAuth();
    const { isVip, level: vipLevel } = useVipStatus();
    const { balance: tonBalance, formatted: tonFormatted } = useTonBalance();

    const [activeTab, setActiveTab] = useState('home');
    const [miningActive, setMiningActive] = useState(false);

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

    // Main App Interface
    return (
        <div className="vipton-container">
            <style jsx>{`
                .vipton-container {
                    min-height: 100vh;
                    background: #000000;
                    display: flex;
                    flex-direction: column;
                    font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
                }
                
                /* Header */
                .vipton-header {
                    background: rgba(28, 28, 30, 0.95);
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                    border-bottom: 1px solid rgba(255, 215, 0, 0.1);
                    padding: 12px 16px;
                    position: sticky;
                    top: 0;
                    z-index: 100;
                }
                
                .vipton-header-content {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
                
                .vipton-header-left {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }
                
                .vipton-logo {
                    width: 36px;
                    height: 36px;
                    background: linear-gradient(135deg, #FFD700, #FFC107);
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 800;
                    font-size: 16px;
                    color: #000000;
                }
                
                .vipton-balance {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    padding: 6px 12px;
                    background: rgba(255, 215, 0, 0.1);
                    border-radius: 20px;
                    font-size: 14px;
                    font-weight: 600;
                    color: #FFD700;
                }
                
                /* Main Content */
                .vipton-main {
                    flex: 1;
                    padding: 20px;
                    overflow-y: auto;
                    padding-bottom: 80px;
                }
                
                /* Bottom Navigation */
                .vipton-nav {
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
                }
                
                .vipton-nav-items {
                    display: flex;
                    justify-content: space-around;
                }
                
                .vipton-nav-item {
                    flex: 1;
                    padding: 8px;
                    background: none;
                    border: none;
                    color: #8E8E93;
                    cursor: pointer;
                    transition: all 0.2s;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 4px;
                    -webkit-tap-highlight-color: transparent;
                }
                
                .vipton-nav-item.active {
                    color: #FFD700;
                }
                
                .vipton-nav-icon {
                    font-size: 24px;
                }
                
                .vipton-nav-label {
                    font-size: 11px;
                    font-weight: 600;
                }
            `}</style>

            {/* Header */}
            <header className="vipton-header">
                <div className="vipton-header-content">
                    <div className="vipton-header-left">
                        <div className="vipton-logo">VT</div>
                        <div className="vipton-balance">
                            💰 {tonFormatted} TON
                        </div>
                        {isVip && (
                            <VipBadge size="small" showLevel={true} />
                        )}
                    </div>
                    <UserBadge variant="compact" />
                </div>
            </header>

            {/* Main Content */}
            <main className="vipton-main">
                {activeTab === 'home' && (
                    <HomeContent
                        user={user}
                        tonBalance={tonFormatted}
                        vipLevel={vipLevel}
                        isVip={isVip}
                        miningActive={miningActive}
                        onStartMining={() => setMiningActive(true)}
                    />
                )}

                {activeTab === 'mining' && (
                    <MiningContent miningActive={miningActive} setMiningActive={setMiningActive} />
                )}

                {activeTab === 'tasks' && (
                    <TasksContent />
                )}

                {activeTab === 'referrals' && (
                    <ReferralsContent user={user} />
                )}

                {activeTab === 'profile' && (
                    <ProfileContent user={user} onLogout={logout} />
                )}
            </main>

            {/* Bottom Navigation */}
            <nav className="vipton-nav">
                <div className="vipton-nav-items">
                    {[
                        { id: 'home', icon: '🏠', label: 'Home' },
                        { id: 'mining', icon: '⛏️', label: 'Mining' },
                        { id: 'tasks', icon: '📋', label: 'Tasks' },
                        { id: 'referrals', icon: '👥', label: 'Referrals' },
                        { id: 'profile', icon: '👤', label: 'Profile' }
                    ].map(tab => (
                        <button
                            key={tab.id}
                            className={`vipton-nav-item ${activeTab === tab.id ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            <span className="vipton-nav-icon">{tab.icon}</span>
                            <span className="vipton-nav-label">{tab.label}</span>
                        </button>
                    ))}
                </div>
            </nav>
        </div>
    );
};

/**
 * Welcome Screen Component
 */
const WelcomeScreen = ({ onLogin }) => (
    <div className="vipton-welcome">
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
                font-size: 32px;
                margin-bottom: 8px;
            }
            
            .vipton-feature-text {
                font-size: 12px;
                color: #8E8E93;
            }
        `}</style>

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
                    <div className="vipton-feature-icon">💰</div>
                    <div className="vipton-feature-text">Earn TON</div>
                </div>
                <div className="vipton-feature">
                    <div className="vipton-feature-icon">👑</div>
                    <div className="vipton-feature-text">VIP Benefits</div>
                </div>
                <div className="vipton-feature">
                    <div className="vipton-feature-icon">🚀</div>
                    <div className="vipton-feature-text">Fast Mining</div>
                </div>
            </div>
        </div>
    </div>
);

/**
 * Home Content Component
 */
const HomeContent = ({ user, tonBalance, vipLevel, isVip, miningActive, onStartMining }) => (
    <div className="vipton-home">
        <style jsx>{`
            .vipton-welcome-user {
                font-size: 28px;
                font-weight: 700;
                color: #FFFFFF;
                margin: 0 0 24px;
            }
            
            .vipton-stats-grid {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 16px;
                margin-bottom: 32px;
            }
            
            .vipton-stat-card {
                background: rgba(28, 28, 30, 0.9);
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
                border: 1px solid rgba(255, 215, 0, 0.1);
                border-radius: 16px;
                padding: 20px;
                text-align: center;
                position: relative;
                overflow: hidden;
            }
            
            .vipton-stat-card::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 2px;
                background: linear-gradient(90deg, 
                    transparent, rgba(255, 215, 0, 0.5), transparent);
            }
            
            .vipton-stat-icon {
                font-size: 32px;
                margin-bottom: 12px;
            }
            
            .vipton-stat-value {
                font-size: 24px;
                font-weight: 700;
                color: #FFD700;
                margin-bottom: 4px;
            }
            
            .vipton-stat-label {
                font-size: 14px;
                color: #8E8E93;
            }
            
            .vipton-action-buttons {
                display: grid;
                gap: 12px;
            }
            
            .vipton-action-btn {
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
            
            .vipton-action-btn:hover {
                background: rgba(255, 215, 0, 0.1);
                border-color: rgba(255, 215, 0, 0.3);
                transform: translateY(-2px);
            }
            
            .vipton-action-btn.primary {
                background: linear-gradient(135deg, #FFD700, #FFC107);
                color: #000000;
                border: none;
            }
            
            .vipton-action-btn.mining-active {
                background: linear-gradient(135deg, #10B981, #059669);
                animation: pulse 2s infinite;
            }
            
            @keyframes pulse {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.8; }
            }
        `}</style>

        <h1 className="vipton-welcome-user">
            Welcome, {user?.first_name || 'User'}! 👋
        </h1>

        <div className="vipton-stats-grid">
            <div className="vipton-stat-card">
                <div className="vipton-stat-icon">💰</div>
                <div className="vipton-stat-value">{tonBalance}</div>
                <div className="vipton-stat-label">TON Balance</div>
            </div>

            <div className="vipton-stat-card">
                <div className="vipton-stat-icon">👑</div>
                <div className="vipton-stat-value">
                    {isVip ? `Level ${vipLevel}` : 'None'}
                </div>
                <div className="vipton-stat-label">VIP Status</div>
            </div>

            <div className="vipton-stat-card">
                <div className="vipton-stat-icon">👥</div>
                <div className="vipton-stat-value">{user?.total_referrals || 0}</div>
                <div className="vipton-stat-label">Referrals</div>
            </div>

            <div className="vipton-stat-card">
                <div className="vipton-stat-icon">🚀</div>
                <div className="vipton-stat-value">{user?.total_earned || 0}</div>
                <div className="vipton-stat-label">Total Earned</div>
            </div>
        </div>

        <div className="vipton-action-buttons">
            <button
                className={`vipton-action-btn primary ${miningActive ? 'mining-active' : ''}`}
                onClick={onStartMining}
            >
                {miningActive ? '⛏️ Mining Active...' : '⛏️ Start Mining'}
            </button>
            <button className="vipton-action-btn">
                🎁 Daily Reward
            </button>
            <button className="vipton-action-btn">
                📊 View Tasks
            </button>
        </div>
    </div>
);

/**
 * Mining Content Component (placeholder)
 */
const MiningContent = ({ miningActive, setMiningActive }) => (
    <div style={{ padding: 20, color: '#fff' }}>
        <h2>Mining</h2>
        <p>Mining status: {miningActive ? 'Active' : 'Inactive'}</p>
        <button
            onClick={() => setMiningActive(!miningActive)}
            style={{ padding: 10, background: '#FFD700', color: '#000' }}
        >
            {miningActive ? 'Stop Mining' : 'Start Mining'}
        </button>
    </div>
);

/**
 * Tasks Content Component (placeholder)
 */
const TasksContent = () => (
    <div style={{ padding: 20, color: '#fff' }}>
        <h2>Tasks</h2>
        <p>Complete tasks to earn more TON</p>
    </div>
);

/**
 * Referrals Content Component (placeholder)
 */
const ReferralsContent = ({ user }) => (
    <div style={{ padding: 20, color: '#fff' }}>
        <h2>Referrals</h2>
        <p>Your referral code: {user?.referral_code || 'VIP123'}</p>
        <p>Total referrals: {user?.total_referrals || 0}</p>
    </div>
);

/**
 * Profile Content Component (placeholder)
 */
const ProfileContent = ({ user, onLogout }) => (
    <div style={{ padding: 20 }}>
        <UserBadge variant="full" />
        <button
            style={{
                marginTop: 20,
                padding: '14px 24px',
                background: '#2C2C2E',
                color: '#fff',
                border: 'none',
                borderRadius: 12,
                fontSize: 16,
                fontWeight: 600,
                cursor: 'pointer',
                width: '100%'
            }}
            onClick={onLogout}
        >
            Logout
        </button>
    </div>
);

export default HomePage;