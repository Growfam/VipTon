import React, { useState, useEffect } from 'react';
import { useVipStatus } from '../context/AuthContext';

const VipBadge = ({
    size = 'medium', // small, medium, large, xl
    showLevel = true,
    showProgress = false,
    showExpiry = false,
    animated = true,
    onClick = null
}) => {
    const { isVip, level, daysLeft, vipStatus, refresh } = useVipStatus();
    const [isRefreshing, setIsRefreshing] = useState(false);

    // Auto-refresh VIP status on mount
    useEffect(() => {
        if (isVip) {
            refresh();
        }
    }, []);

    const handleClick = async () => {
        if (onClick) {
            onClick();
        } else {
            // Default action - refresh VIP status
            setIsRefreshing(true);
            await refresh();
            setTimeout(() => setIsRefreshing(false), 1000);
        }
    };

    if (!isVip) {
        return null; // Don't show badge if not VIP
    }

    // Size configurations
    const sizeConfig = {
        small: { badge: 24, icon: 12, font: 10 },
        medium: { badge: 32, icon: 16, font: 12 },
        large: { badge: 48, icon: 24, font: 14 },
        xl: { badge: 64, icon: 32, font: 16 }
    };

    const config = sizeConfig[size] || sizeConfig.medium;

    // Calculate progress to next level
    const progress = vipStatus?.progress_to_next || 0;

    // Determine badge color based on level
    const getBadgeGradient = () => {
        switch(level) {
            case 1:
                return 'linear-gradient(135deg, #C0C0C0, #E5E4E2)'; // Silver
            case 2:
                return 'linear-gradient(135deg, #FFD700, #FFED4E)'; // Gold
            case 3:
                return 'linear-gradient(135deg, #E5E4E2, #FAFAFA)'; // Platinum
            default:
                return 'linear-gradient(135deg, #FFD700, #FFC107)'; // Default gold
        }
    };

    return (
        <div
            className={`vipton-vip-badge vipton-vip-badge-${size}`}
            onClick={handleClick}
            style={{ cursor: onClick || !isRefreshing ? 'pointer' : 'wait' }}
        >
            <style jsx>{`
                .vipton-vip-badge {
                    display: inline-block;
                    position: relative;
                }
                
                .vipton-badge-container {
                    position: relative;
                    width: ${config.badge}px;
                    height: ${config.badge}px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .vipton-badge-circle {
                    position: absolute;
                    inset: 0;
                    background: ${getBadgeGradient()};
                    border-radius: 50%;
                    box-shadow: 
                        0 2px 8px rgba(255, 215, 0, 0.3),
                        inset 0 1px 2px rgba(255, 255, 255, 0.5);
                    ${animated ? 'animation: vipton-badge-pulse 2s ease-in-out infinite;' : ''}
                }
                
                @keyframes vipton-badge-pulse {
                    0%, 100% { 
                        transform: scale(1);
                        box-shadow: 
                            0 2px 8px rgba(255, 215, 0, 0.3),
                            inset 0 1px 2px rgba(255, 255, 255, 0.5);
                    }
                    50% { 
                        transform: scale(1.05);
                        box-shadow: 
                            0 4px 16px rgba(255, 215, 0, 0.5),
                            inset 0 1px 2px rgba(255, 255, 255, 0.5);
                    }
                }
                
                .vipton-badge-icon {
                    position: relative;
                    z-index: 1;
                    font-size: ${config.icon}px;
                    ${isRefreshing ? 'animation: vipton-spin 1s linear infinite;' : ''}
                }
                
                @keyframes vipton-spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                
                .vipton-badge-level {
                    position: absolute;
                    bottom: -6px;
                    right: -6px;
                    background: #000000;
                    border: 2px solid ${getBadgeGradient().split(',')[0].replace('linear-gradient(135deg', '')};
                    border-radius: 8px;
                    padding: 2px 6px;
                    font-size: ${config.font}px;
                    font-weight: 700;
                    color: #FFD700;
                    min-width: 20px;
                    text-align: center;
                    z-index: 2;
                }
                
                .vipton-vip-tooltip {
                    position: absolute;
                    bottom: calc(100% + 8px);
                    left: 50%;
                    transform: translateX(-50%);
                    background: rgba(28, 28, 30, 0.95);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 215, 0, 0.2);
                    border-radius: 12px;
                    padding: 12px;
                    min-width: 180px;
                    opacity: 0;
                    visibility: hidden;
                    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                    pointer-events: none;
                    z-index: 1000;
                }
                
                .vipton-vip-badge:hover .vipton-vip-tooltip {
                    opacity: 1;
                    visibility: visible;
                    transform: translateX(-50%) translateY(-4px);
                }
                
                .vipton-vip-tooltip::after {
                    content: '';
                    position: absolute;
                    top: 100%;
                    left: 50%;
                    transform: translateX(-50%);
                    border: 6px solid transparent;
                    border-top-color: rgba(28, 28, 30, 0.95);
                }
                
                .vipton-tooltip-title {
                    font-size: 12px;
                    font-weight: 600;
                    color: #FFD700;
                    margin-bottom: 6px;
                }
                
                .vipton-tooltip-info {
                    font-size: 11px;
                    color: #8E8E93;
                    line-height: 1.4;
                }
                
                .vipton-tooltip-progress {
                    margin-top: 8px;
                    height: 4px;
                    background: rgba(255, 215, 0, 0.1);
                    border-radius: 2px;
                    overflow: hidden;
                }
                
                .vipton-tooltip-progress-fill {
                    height: 100%;
                    background: linear-gradient(90deg, #FFD700, #FFED4E);
                    border-radius: 2px;
                    transition: width 0.3s ease;
                }
                
                /* Size variations */
                .vipton-vip-badge-small .vipton-vip-tooltip {
                    min-width: 140px;
                    padding: 8px;
                }
                
                .vipton-vip-badge-xl {
                    display: inline-flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 8px;
                }
                
                .vipton-vip-badge-xl .vipton-badge-label {
                    font-size: 14px;
                    font-weight: 600;
                    color: #FFD700;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }
                
                /* Glow effect for high levels */
                .vipton-badge-glow {
                    position: absolute;
                    inset: -8px;
                    background: radial-gradient(circle, 
                        rgba(255, 215, 0, 0.3) 0%, 
                        transparent 70%);
                    border-radius: 50%;
                    filter: blur(8px);
                    opacity: 0;
                    animation: vipton-glow-fade 2s ease-in-out infinite;
                    pointer-events: none;
                }
                
                @keyframes vipton-glow-fade {
                    0%, 100% { opacity: 0; }
                    50% { opacity: 0.8; }
                }
            `}</style>

            <div className="vipton-badge-container">
                {level >= 3 && animated && <div className="vipton-badge-glow" />}

                <div className="vipton-badge-circle" />

                <div className="vipton-badge-icon">
                    {level >= 3 ? '💎' : level === 2 ? '👑' : '⭐'}
                </div>

                {showLevel && (
                    <div className="vipton-badge-level">{level}</div>
                )}

                {(showProgress || showExpiry) && (
                    <div className="vipton-vip-tooltip">
                        <div className="vipton-tooltip-title">
                            VIP Level {level}
                        </div>
                        <div className="vipton-tooltip-info">
                            {showExpiry && daysLeft > 0 && (
                                <div>{daysLeft} days remaining</div>
                            )}
                            {showProgress && progress > 0 && (
                                <>
                                    <div>Progress to Level {level + 1}</div>
                                    <div className="vipton-tooltip-progress">
                                        <div
                                            className="vipton-tooltip-progress-fill"
                                            style={{ width: `${Math.min(100, progress)}%` }}
                                        />
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>

            {size === 'xl' && (
                <div className="vipton-badge-label">VIP Member</div>
            )}
        </div>
    );
};

/**
 * VIP Status Card Component
 */
export const VipStatusCard = ({ onUpgrade = null }) => {
    const { isVip, level, daysLeft, vipStatus, refresh } = useVipStatus();

    if (!isVip) {
        return (
            <div className="vipton-vip-status-card vipton-not-vip">
                <style jsx>{`
                    .vipton-vip-status-card {
                        background: rgba(28, 28, 30, 0.9);
                        backdrop-filter: blur(20px);
                        -webkit-backdrop-filter: blur(20px);
                        border: 1px solid rgba(255, 215, 0, 0.1);
                        border-radius: 20px;
                        padding: 24px;
                        text-align: center;
                    }
                    
                    .vipton-not-vip-icon {
                        font-size: 48px;
                        margin-bottom: 16px;
                        opacity: 0.5;
                    }
                    
                    .vipton-not-vip-title {
                        font-size: 18px;
                        font-weight: 600;
                        color: #8E8E93;
                        margin-bottom: 8px;
                    }
                    
                    .vipton-not-vip-message {
                        font-size: 14px;
                        color: #8E8E93;
                        margin-bottom: 20px;
                    }
                    
                    .vipton-upgrade-btn {
                        padding: 12px 24px;
                        background: linear-gradient(135deg, #FFD700, #FFC107);
                        color: #000000;
                        border: none;
                        border-radius: 12px;
                        font-size: 14px;
                        font-weight: 600;
                        cursor: pointer;
                        transition: all 0.3s;
                    }
                    
                    .vipton-upgrade-btn:hover {
                        transform: translateY(-2px);
                        box-shadow: 0 4px 16px rgba(255, 215, 0, 0.3);
                    }
                `}</style>

                <div className="vipton-not-vip-icon">🔒</div>
                <h3 className="vipton-not-vip-title">Not a VIP Member</h3>
                <p className="vipton-not-vip-message">
                    Unlock exclusive features and benefits
                </p>
                <button
                    className="vipton-upgrade-btn"
                    onClick={onUpgrade || (() => window.location.href = '/vip')}
                >
                    Become VIP
                </button>
            </div>
        );
    }

    return (
        <div className="vipton-vip-status-card vipton-is-vip">
            <style jsx>{`
                .vipton-vip-status-card {
                    background: linear-gradient(135deg, 
                        rgba(255, 215, 0, 0.05), 
                        rgba(28, 28, 30, 0.9));
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                    border: 1px solid rgba(255, 215, 0, 0.3);
                    border-radius: 20px;
                    padding: 24px;
                    position: relative;
                    overflow: hidden;
                }
                
                .vipton-vip-status-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 2px;
                    background: linear-gradient(90deg, 
                        transparent, #FFD700, transparent);
                    animation: vipton-shimmer 3s linear infinite;
                }
                
                @keyframes vipton-shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                
                .vipton-vip-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 20px;
                }
                
                .vipton-vip-title {
                    font-size: 20px;
                    font-weight: 600;
                    color: #FFD700;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                
                .vipton-vip-stats {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 16px;
                    margin-bottom: 20px;
                }
                
                .vipton-vip-stat {
                    background: rgba(0, 0, 0, 0.2);
                    border-radius: 12px;
                    padding: 12px;
                    text-align: center;
                }
                
                .vipton-vip-stat-label {
                    font-size: 12px;
                    color: #8E8E93;
                    margin-bottom: 4px;
                }
                
                .vipton-vip-stat-value {
                    font-size: 18px;
                    font-weight: 600;
                    color: #FFFFFF;
                }
                
                .vipton-vip-progress {
                    margin-bottom: 8px;
                }
                
                .vipton-vip-progress-label {
                    font-size: 12px;
                    color: #8E8E93;
                    margin-bottom: 4px;
                }
                
                .vipton-vip-progress-bar {
                    height: 6px;
                    background: rgba(255, 215, 0, 0.1);
                    border-radius: 3px;
                    overflow: hidden;
                }
                
                .vipton-vip-progress-fill {
                    height: 100%;
                    background: linear-gradient(90deg, #FFD700, #FFED4E);
                    border-radius: 3px;
                    transition: width 0.3s ease;
                    box-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
                }
            `}</style>

            <div className="vipton-vip-header">
                <h3 className="vipton-vip-title">
                    <VipBadge size="medium" showLevel={false} animated={false} />
                    VIP Level {level}
                </h3>
            </div>

            <div className="vipton-vip-stats">
                <div className="vipton-vip-stat">
                    <div className="vipton-vip-stat-label">Days Left</div>
                    <div className="vipton-vip-stat-value">{daysLeft || '∞'}</div>
                </div>
                <div className="vipton-vip-stat">
                    <div className="vipton-vip-stat-label">Benefits</div>
                    <div className="vipton-vip-stat-value">{level * 5}</div>
                </div>
            </div>

            {vipStatus?.progress_to_next > 0 && (
                <div className="vipton-vip-progress">
                    <div className="vipton-vip-progress-label">
                        Progress to Level {level + 1}: {vipStatus.progress_to_next}%
                    </div>
                    <div className="vipton-vip-progress-bar">
                        <div
                            className="vipton-vip-progress-fill"
                            style={{ width: `${vipStatus.progress_to_next}%` }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default VipBadge;