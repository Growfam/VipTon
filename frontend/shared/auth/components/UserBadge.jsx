import React, { useState } from 'react';
import { useAuth, useVipStatus, useTonBalance } from '../context/AuthContext';

const UserBadge = ({
    variant = 'default', // default, compact, full
    showVip = true,
    showBalance = true,
    showLogout = true,
    onProfileClick = null
}) => {
    const { user, logout, isAuthenticated } = useAuth();
    const { isVip, level: vipLevel } = useVipStatus();
    const { formatted: tonBalance } = useTonBalance();
    const [isLoggingOut, setIsLoggingOut] = useState(false);

    const handleLogout = async () => {
        if (window.confirm('Are you sure you want to logout?')) {
            setIsLoggingOut(true);
            try {
                await logout();
            } finally {
                setIsLoggingOut(false);
            }
        }
    };

    const handleProfileClick = () => {
        if (onProfileClick) {
            onProfileClick(user);
        }
    };

    // Get display name
    const displayName = user?.first_name || user?.username || 'Guest';
    const avatarLetter = displayName.charAt(0).toUpperCase();

    if (!isAuthenticated || !user) {
        return (
            <div className="vipton-user-badge vipton-guest">
                <style jsx>{`
                    .vipton-guest {
                        display: inline-flex;
                        align-items: center;
                        gap: 12px;
                        padding: 8px 16px;
                        background: rgba(28, 28, 30, 0.8);
                        border: 1px solid rgba(255, 215, 0, 0.1);
                        border-radius: 24px;
                        color: #8E8E93;
                        font-size: 16px;
                        font-weight: 500;
                    }
                `}</style>
                <span>👤</span>
                <span>Guest</span>
            </div>
        );
    }

    // Render based on variant
    if (variant === 'compact') {
        return (
            <div className="vipton-user-badge-compact" onClick={handleProfileClick}>
                <style jsx>{`
                    .vipton-user-badge-compact {
                        position: relative;
                        cursor: pointer;
                        transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                    }
                    
                    .vipton-user-badge-compact:hover {
                        transform: scale(1.05);
                    }
                    
                    .vipton-avatar-compact {
                        width: 44px;
                        height: 44px;
                        border-radius: 50%;
                        overflow: hidden;
                        position: relative;
                        background: linear-gradient(135deg, #2C2C2E, #1C1C1E);
                        border: 2px solid rgba(255, 215, 0, 0.2);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    
                    .vipton-avatar-compact img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                    
                    .vipton-avatar-letter {
                        font-size: 18px;
                        font-weight: 600;
                        color: #FFD700;
                    }
                    
                    .vipton-vip-indicator {
                        position: absolute;
                        bottom: -2px;
                        right: -2px;
                        width: 18px;
                        height: 18px;
                        background: linear-gradient(135deg, #FFD700, #FFC107);
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border: 2px solid #000000;
                        font-size: 10px;
                        font-weight: bold;
                        color: #000000;
                    }
                `}</style>

                <div className="vipton-avatar-compact">
                    {user.photo_url ? (
                        <img src={user.photo_url} alt={displayName} />
                    ) : (
                        <span className="vipton-avatar-letter">{avatarLetter}</span>
                    )}
                    {showVip && isVip && (
                        <div className="vipton-vip-indicator">{vipLevel}</div>
                    )}
                </div>
            </div>
        );
    }

    if (variant === 'full') {
        return (
            <div className="vipton-user-badge-full">
                <style jsx>{`
                    .vipton-user-badge-full {
                        background: rgba(28, 28, 30, 0.9);
                        backdrop-filter: blur(20px);
                        -webkit-backdrop-filter: blur(20px);
                        border: 1px solid rgba(255, 215, 0, 0.1);
                        border-radius: 20px;
                        padding: 24px;
                        width: 100%;
                        max-width: 400px;
                        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
                    }
                    
                    .vipton-user-header {
                        display: flex;
                        gap: 16px;
                        margin-bottom: 20px;
                    }
                    
                    .vipton-avatar-large {
                        width: 72px;
                        height: 72px;
                        border-radius: 50%;
                        overflow: hidden;
                        background: linear-gradient(135deg, #2C2C2E, #1C1C1E);
                        border: 3px solid rgba(255, 215, 0, 0.3);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        position: relative;
                    }
                    
                    .vipton-avatar-large img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                    
                    .vipton-avatar-letter-large {
                        font-size: 32px;
                        font-weight: 600;
                        color: #FFD700;
                    }
                    
                    .vipton-user-info {
                        flex: 1;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                    }
                    
                    .vipton-user-name {
                        font-size: 20px;
                        font-weight: 600;
                        color: #FFFFFF;
                        margin: 0 0 4px;
                    }
                    
                    .vipton-user-username {
                        font-size: 14px;
                        color: #8E8E93;
                        margin: 0;
                    }
                    
                    .vipton-vip-badge-full {
                        display: inline-flex;
                        align-items: center;
                        gap: 6px;
                        padding: 4px 12px;
                        background: linear-gradient(135deg, #FFD700, #FFC107);
                        border-radius: 12px;
                        font-size: 12px;
                        font-weight: 600;
                        color: #000000;
                        margin-top: 8px;
                    }
                    
                    .vipton-stats-grid {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        gap: 12px;
                        margin-bottom: 20px;
                    }
                    
                    .vipton-stat-card {
                        background: rgba(0, 0, 0, 0.3);
                        border-radius: 12px;
                        padding: 16px;
                        text-align: center;
                    }
                    
                    .vipton-stat-label {
                        font-size: 12px;
                        color: #8E8E93;
                        margin-bottom: 4px;
                    }
                    
                    .vipton-stat-value {
                        font-size: 20px;
                        font-weight: 600;
                        color: #FFD700;
                    }
                    
                    .vipton-actions {
                        display: flex;
                        gap: 12px;
                    }
                    
                    .vipton-btn {
                        flex: 1;
                        padding: 14px;
                        border: none;
                        border-radius: 14px;
                        font-size: 16px;
                        font-weight: 600;
                        cursor: pointer;
                        transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 8px;
                    }
                    
                    .vipton-btn-primary {
                        background: linear-gradient(135deg, #FFD700, #FFC107);
                        color: #000000;
                    }
                    
                    .vipton-btn-primary:hover {
                        transform: translateY(-2px);
                        box-shadow: 0 8px 24px rgba(255, 215, 0, 0.3);
                    }
                    
                    .vipton-btn-secondary {
                        background: #2C2C2E;
                        color: #8E8E93;
                        border: 1px solid rgba(255, 215, 0, 0.1);
                    }
                    
                    .vipton-btn-secondary:hover {
                        background: #3A3A3C;
                        color: #FFFFFF;
                        border-color: rgba(255, 215, 0, 0.2);
                    }
                    
                    .vipton-btn:disabled {
                        opacity: 0.5;
                        cursor: not-allowed;
                    }
                `}</style>

                <div className="vipton-user-header">
                    <div className="vipton-avatar-large">
                        {user.photo_url ? (
                            <img src={user.photo_url} alt={displayName} />
                        ) : (
                            <span className="vipton-avatar-letter-large">{avatarLetter}</span>
                        )}
                    </div>
                    <div className="vipton-user-info">
                        <h3 className="vipton-user-name">{displayName}</h3>
                        {user.username && (
                            <p className="vipton-user-username">@{user.username}</p>
                        )}
                        {showVip && isVip && (
                            <div className="vipton-vip-badge-full">
                                ⭐ VIP Level {vipLevel}
                            </div>
                        )}
                    </div>
                </div>

                <div className="vipton-stats-grid">
                    <div className="vipton-stat-card">
                        <div className="vipton-stat-label">TON Balance</div>
                        <div className="vipton-stat-value">{tonBalance}</div>
                    </div>
                    <div className="vipton-stat-card">
                        <div className="vipton-stat-label">VIP Status</div>
                        <div className="vipton-stat-value">
                            {isVip ? `Level ${vipLevel}` : 'None'}
                        </div>
                    </div>
                </div>

                <div className="vipton-actions">
                    <button
                        className="vipton-btn vipton-btn-primary"
                        onClick={handleProfileClick}
                    >
                        Profile
                    </button>
                    {showLogout && (
                        <button
                            className="vipton-btn vipton-btn-secondary"
                            onClick={handleLogout}
                            disabled={isLoggingOut}
                        >
                            {isLoggingOut ? 'Logging out...' : 'Logout'}
                        </button>
                    )}
                </div>
            </div>
        );
    }

    // Default variant
    return (
        <div className="vipton-user-badge-default">
            <style jsx>{`
                .vipton-user-badge-default {
                    display: inline-flex;
                    align-items: center;
                    gap: 12px;
                    padding: 8px 12px 8px 8px;
                    background: rgba(28, 28, 30, 0.9);
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                    border: 1px solid rgba(255, 215, 0, 0.1);
                    border-radius: 28px;
                    cursor: pointer;
                    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                }
                
                .vipton-user-badge-default:hover {
                    background: rgba(28, 28, 30, 1);
                    border-color: rgba(255, 215, 0, 0.2);
                    transform: translateY(-1px);
                    box-shadow: 0 4px 20px rgba(255, 215, 0, 0.1);
                }
                
                .vipton-badge-left {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    flex: 1;
                }
                
                .vipton-avatar {
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    overflow: hidden;
                    background: linear-gradient(135deg, #2C2C2E, #1C1C1E);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 1px solid rgba(255, 215, 0, 0.2);
                }
                
                .vipton-avatar img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                
                .vipton-avatar-letter {
                    font-size: 16px;
                    font-weight: 600;
                    color: #FFD700;
                }
                
                .vipton-badge-info {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                }
                
                .vipton-badge-name {
                    font-size: 14px;
                    font-weight: 600;
                    color: #FFFFFF;
                    line-height: 1;
                }
                
                .vipton-badge-meta {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    margin-top: 4px;
                }
                
                .vipton-badge-balance {
                    font-size: 12px;
                    color: #FFD700;
                    font-weight: 500;
                }
                
                .vipton-vip-indicator-small {
                    display: inline-flex;
                    align-items: center;
                    gap: 4px;
                    padding: 2px 6px;
                    background: linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(255, 193, 7, 0.2));
                    border-radius: 6px;
                    font-size: 10px;
                    font-weight: 600;
                    color: #FFD700;
                }
                
                .vipton-logout-icon {
                    width: 20px;
                    height: 20px;
                    color: #8E8E93;
                    transition: color 0.2s;
                    cursor: pointer;
                }
                
                .vipton-logout-icon:hover {
                    color: #FF3B30;
                }
            `}</style>

            <div className="vipton-badge-left" onClick={handleProfileClick}>
                <div className="vipton-avatar">
                    {user.photo_url ? (
                        <img src={user.photo_url} alt={displayName} />
                    ) : (
                        <span className="vipton-avatar-letter">{avatarLetter}</span>
                    )}
                </div>
                <div className="vipton-badge-info">
                    <span className="vipton-badge-name">{displayName}</span>
                    <div className="vipton-badge-meta">
                        {showBalance && (
                            <span className="vipton-badge-balance">{tonBalance} TON</span>
                        )}
                        {showVip && isVip && (
                            <span className="vipton-vip-indicator-small">
                                VIP {vipLevel}
                            </span>
                        )}
                    </div>
                </div>
            </div>

            {showLogout && (
                <svg
                    className="vipton-logout-icon"
                    onClick={(e) => {
                        e.stopPropagation();
                        handleLogout();
                    }}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/>
                </svg>
            )}
        </div>
    );
};

export default UserBadge;