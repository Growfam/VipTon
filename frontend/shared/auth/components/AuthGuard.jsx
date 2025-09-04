import React from 'react';
import { useAuth } from '../hooks/useAuth';
import AuthLoader from './AuthLoader';
import AuthError from './AuthError';

/**
 * AuthGuard Component
 * Protects routes that require authentication
 */
const AuthGuard = ({
    children,
    requireAuth = true,
    requireVip = false,
    vipLevel = 0,
    requireAdmin = false,
    fallback = null,
    loader = null,
    onAuthError = null
}) => {
    const { user, loading, error, isAuthenticated, login } = useAuth();

    // Show loader while checking auth
    if (loading) {
        return loader || <AuthLoader message="Checking authorization..." />;
    }

    // Check authentication requirement
    if (requireAuth && !isAuthenticated) {
        if (fallback) {
            return fallback;
        }

        return (
            <AuthError
                title="Authentication Required"
                message="Please login to access this content"
                canRetry={true}
                onRetry={login}
                onClose={onAuthError}
            />
        );
    }

    // Check VIP requirement
    if (requireVip && user) {
        const userVipLevel = user.vip_level || 0;
        const isVip = user.is_vip || userVipLevel > 0;

        if (!isVip || userVipLevel < vipLevel) {
            if (fallback) {
                return fallback;
            }

            return (
                <VipRequiredScreen requiredLevel={vipLevel} currentLevel={userVipLevel} />
            );
        }
    }

    // Check admin requirement
    if (requireAdmin && user && !user.is_admin) {
        if (fallback) {
            return fallback;
        }

        return (
            <AccessDeniedScreen type="admin" />
        );
    }

    // All checks passed, render children
    return <>{children}</>;
};

/**
 * VIP Required Screen
 */
const VipRequiredScreen = ({ requiredLevel, currentLevel }) => {
    return (
        <div className="vipton-access-screen vipton-vip-required">
            <style jsx>{`
                .vipton-access-screen {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    min-height: 100vh;
                    background: #000000;
                    padding: 20px;
                    text-align: center;
                }
                
                .vipton-access-card {
                    background: rgba(28, 28, 30, 0.9);
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                    border: 1px solid rgba(255, 215, 0, 0.2);
                    border-radius: 24px;
                    padding: 40px;
                    max-width: 400px;
                    width: 100%;
                    box-shadow: 0 8px 40px rgba(255, 215, 0, 0.15);
                }
                
                .vipton-vip-icon {
                    width: 100px;
                    height: 100px;
                    margin: 0 auto 24px;
                    background: linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(255, 193, 7, 0.1));
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 48px;
                    position: relative;
                    overflow: hidden;
                }
                
                .vipton-vip-icon::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(circle, 
                        rgba(255, 215, 0, 0.3) 0%, 
                        transparent 70%);
                    animation: vipton-glow-pulse 2s ease-in-out infinite;
                }
                
                @keyframes vipton-glow-pulse {
                    0%, 100% { transform: scale(1); opacity: 0.5; }
                    50% { transform: scale(1.1); opacity: 1; }
                }
                
                .vipton-access-title {
                    font-size: 24px;
                    font-weight: 600;
                    color: #FFFFFF;
                    margin: 0 0 12px;
                }
                
                .vipton-access-message {
                    font-size: 16px;
                    color: #8E8E93;
                    line-height: 1.5;
                    margin: 0 0 32px;
                }
                
                .vipton-vip-levels {
                    display: flex;
                    gap: 12px;
                    margin-bottom: 32px;
                    justify-content: center;
                }
                
                .vipton-vip-level {
                    padding: 12px 20px;
                    background: rgba(0, 0, 0, 0.3);
                    border-radius: 12px;
                    border: 1px solid transparent;
                    transition: all 0.3s;
                }
                
                .vipton-vip-level.current {
                    border-color: rgba(255, 215, 0, 0.3);
                }
                
                .vipton-vip-level.required {
                    background: linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(255, 193, 7, 0.1));
                    border-color: #FFD700;
                }
                
                .vipton-level-label {
                    font-size: 12px;
                    color: #8E8E93;
                    margin-bottom: 4px;
                }
                
                .vipton-level-value {
                    font-size: 18px;
                    font-weight: 600;
                    color: #FFD700;
                }
                
                .vipton-upgrade-btn {
                    width: 100%;
                    padding: 16px;
                    background: linear-gradient(135deg, #FFD700, #FFED4E, #FFC107);
                    color: #000000;
                    border: none;
                    border-radius: 14px;
                    font-size: 16px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                }
                
                .vipton-upgrade-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 24px rgba(255, 215, 0, 0.3);
                }
            `}</style>

            <div className="vipton-access-card">
                <div className="vipton-vip-icon">👑</div>

                <h2 className="vipton-access-title">VIP Access Required</h2>
                <p className="vipton-access-message">
                    This content requires VIP Level {requiredLevel} or higher
                </p>

                <div className="vipton-vip-levels">
                    <div className={`vipton-vip-level ${currentLevel > 0 ? 'current' : ''}`}>
                        <div className="vipton-level-label">Your Level</div>
                        <div className="vipton-level-value">{currentLevel || 'None'}</div>
                    </div>
                    <div className="vipton-vip-level required">
                        <div className="vipton-level-label">Required</div>
                        <div className="vipton-level-value">Level {requiredLevel}</div>
                    </div>
                </div>

                <button
                    className="vipton-upgrade-btn"
                    onClick={() => window.location.href = '/vip'}
                >
                    Upgrade to VIP
                </button>
            </div>
        </div>
    );
};

/**
 * Access Denied Screen
 */
const AccessDeniedScreen = ({ type = 'general' }) => {
    const getContent = () => {
        switch (type) {
            case 'admin':
                return {
                    icon: '🔒',
                    title: 'Admin Access Only',
                    message: 'This area is restricted to administrators only'
                };
            default:
                return {
                    icon: '⛔',
                    title: 'Access Denied',
                    message: 'You do not have permission to access this content'
                };
        }
    };

    const content = getContent();

    return (
        <div className="vipton-access-screen vipton-access-denied">
            <style jsx>{`
                .vipton-access-screen {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    min-height: 100vh;
                    background: #000000;
                    padding: 20px;
                    text-align: center;
                }
                
                .vipton-denied-card {
                    background: rgba(28, 28, 30, 0.9);
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                    border: 1px solid rgba(255, 59, 48, 0.2);
                    border-radius: 24px;
                    padding: 40px;
                    max-width: 400px;
                    width: 100%;
                    box-shadow: 0 8px 40px rgba(255, 59, 48, 0.1);
                }
                
                .vipton-denied-icon {
                    width: 100px;
                    height: 100px;
                    margin: 0 auto 24px;
                    background: rgba(255, 59, 48, 0.1);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 48px;
                }
                
                .vipton-denied-title {
                    font-size: 24px;
                    font-weight: 600;
                    color: #FFFFFF;
                    margin: 0 0 12px;
                }
                
                .vipton-denied-message {
                    font-size: 16px;
                    color: #8E8E93;
                    line-height: 1.5;
                    margin: 0 0 32px;
                }
                
                .vipton-back-btn {
                    padding: 14px 28px;
                    background: #2C2C2E;
                    color: #FFFFFF;
                    border: 1px solid rgba(255, 215, 0, 0.1);
                    border-radius: 14px;
                    font-size: 16px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s;
                }
                
                .vipton-back-btn:hover {
                    background: #3A3A3C;
                    border-color: rgba(255, 215, 0, 0.2);
                }
            `}</style>

            <div className="vipton-denied-card">
                <div className="vipton-denied-icon">{content.icon}</div>

                <h2 className="vipton-denied-title">{content.title}</h2>
                <p className="vipton-denied-message">{content.message}</p>

                <button
                    className="vipton-back-btn"
                    onClick={() => window.history.back()}
                >
                    Go Back
                </button>
            </div>
        </div>
    );
};

/**
 * HOC for protecting components
 */
export const withAuth = (Component, options = {}) => {
    return (props) => (
        <AuthGuard {...options}>
            <Component {...props} />
        </AuthGuard>
    );
};

/**
 * HOC for VIP only components
 */
export const withVip = (Component, level = 1) => {
    return (props) => (
        <AuthGuard requireAuth={true} requireVip={true} vipLevel={level}>
            <Component {...props} />
        </AuthGuard>
    );
};

/**
 * HOC for admin only components
 */
export const withAdmin = (Component) => {
    return (props) => (
        <AuthGuard requireAuth={true} requireAdmin={true}>
            <Component {...props} />
        </AuthGuard>
    );
};

export default AuthGuard;