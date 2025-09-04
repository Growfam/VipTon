import React, { useState } from 'react';

const AuthError = ({
    error = null,
    title = 'Authentication Error',
    message = 'Failed to authenticate with VipTon',
    canRetry = true,
    onRetry = null,
    onClose = null
}) => {
    const [showDetails, setShowDetails] = useState(false);
    const [isRetrying, setIsRetrying] = useState(false);

    const handleRetry = async () => {
        if (!onRetry) return;

        setIsRetrying(true);
        try {
            await onRetry();
        } catch (err) {
            console.error('Retry failed:', err);
        } finally {
            setIsRetrying(false);
        }
    };

    const handleClose = () => {
        if (onClose) {
            onClose();
        } else if (window.Telegram?.WebApp?.close) {
            window.Telegram.WebApp.close();
        }
    };

    // Determine error type and customize message
    const getErrorInfo = () => {
        if (error?.code === 'NO_TELEGRAM_DATA') {
            return {
                icon: '🔒',
                title: 'Telegram Required',
                message: 'Please open VipTon in Telegram to continue'
            };
        } else if (error?.code === 'NETWORK_ERROR') {
            return {
                icon: '📡',
                title: 'Connection Error',
                message: 'Unable to connect to VipTon servers. Check your internet connection.'
            };
        } else if (error?.code === 'TOKEN_EXPIRED') {
            return {
                icon: '⏰',
                title: 'Session Expired',
                message: 'Your session has expired. Please login again.'
            };
        }

        return { icon: '⚠️', title, message };
    };

    const errorInfo = getErrorInfo();

    return (
        <div className="vipton-error-container">
            <style jsx>{`
                .vipton-error-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    min-height: 100vh;
                    background: #000000;
                    padding: 20px;
                    position: relative;
                }
                
                .vipton-error-card {
                    background: rgba(28, 28, 30, 0.9);
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                    border: 1px solid rgba(255, 215, 0, 0.1);
                    border-radius: 20px;
                    padding: 32px;
                    max-width: 400px;
                    width: 100%;
                    text-align: center;
                    box-shadow: 0 8px 40px rgba(255, 215, 0, 0.1);
                    position: relative;
                    overflow: hidden;
                }
                
                .vipton-error-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 2px;
                    background: linear-gradient(90deg, 
                        transparent 0%, 
                        #FF3B30 50%, 
                        transparent 100%);
                }
                
                .vipton-error-icon {
                    width: 80px;
                    height: 80px;
                    margin: 0 auto 24px;
                    background: rgba(255, 59, 48, 0.1);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 40px;
                    position: relative;
                }
                
                .vipton-error-icon::after {
                    content: '';
                    position: absolute;
                    inset: -10px;
                    border-radius: 50%;
                    background: radial-gradient(circle,
                        rgba(255, 59, 48, 0.2) 0%,
                        transparent 70%);
                    animation: vipton-error-pulse 2s ease-in-out infinite;
                }
                
                @keyframes vipton-error-pulse {
                    0%, 100% { 
                        opacity: 0;
                        transform: scale(0.8);
                    }
                    50% { 
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                
                .vipton-error-title {
                    font-size: 22px;
                    font-weight: 600;
                    color: #FFFFFF;
                    margin: 0 0 12px;
                    letter-spacing: -0.4px;
                }
                
                .vipton-error-message {
                    font-size: 16px;
                    color: #8E8E93;
                    line-height: 1.5;
                    margin: 0 0 32px;
                }
                
                .vipton-error-buttons {
                    display: flex;
                    gap: 12px;
                    justify-content: center;
                    flex-wrap: wrap;
                }
                
                .vipton-btn {
                    padding: 14px 28px;
                    border-radius: 14px;
                    font-size: 16px;
                    font-weight: 600;
                    border: none;
                    cursor: pointer;
                    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                    letter-spacing: -0.4px;
                    position: relative;
                    overflow: hidden;
                }
                
                .vipton-btn-retry {
                    background: linear-gradient(135deg, #FFD700, #FFED4E, #FFC107);
                    color: #000000;
                    min-width: 140px;
                }
                
                .vipton-btn-retry:hover:not(:disabled) {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 24px rgba(255, 215, 0, 0.3);
                }
                
                .vipton-btn-retry:active:not(:disabled) {
                    transform: translateY(0);
                }
                
                .vipton-btn-retry:disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                }
                
                .vipton-btn-close {
                    background: #2C2C2E;
                    color: #8E8E93;
                    border: 1px solid rgba(255, 215, 0, 0.1);
                }
                
                .vipton-btn-close:hover {
                    background: #3A3A3C;
                    border-color: rgba(255, 215, 0, 0.2);
                    color: #FFFFFF;
                }
                
                .vipton-error-details-btn {
                    margin-top: 16px;
                    background: none;
                    border: none;
                    color: #FFD700;
                    font-size: 14px;
                    cursor: pointer;
                    padding: 8px;
                    transition: opacity 0.2s;
                }
                
                .vipton-error-details-btn:hover {
                    opacity: 0.8;
                }
                
                .vipton-error-details {
                    margin-top: 16px;
                    padding: 16px;
                    background: rgba(0, 0, 0, 0.3);
                    border-radius: 12px;
                    font-family: 'SF Mono', monospace;
                    font-size: 12px;
                    color: #8E8E93;
                    text-align: left;
                    word-break: break-word;
                    max-height: 200px;
                    overflow-y: auto;
                }
                
                .vipton-spinner {
                    display: inline-block;
                    width: 16px;
                    height: 16px;
                    border: 2px solid rgba(0, 0, 0, 0.2);
                    border-top-color: #000000;
                    border-radius: 50%;
                    animation: vipton-spin 0.8s linear infinite;
                    margin-right: 8px;
                }
                
                @keyframes vipton-spin {
                    to { transform: rotate(360deg); }
                }
                
                /* Responsive */
                @media (max-width: 390px) {
                    .vipton-error-card {
                        padding: 24px;
                    }
                    
                    .vipton-error-title {
                        font-size: 20px;
                    }
                    
                    .vipton-error-message {
                        font-size: 15px;
                    }
                    
                    .vipton-btn {
                        padding: 12px 24px;
                        font-size: 15px;
                    }
                }
            `}</style>

            <div className="vipton-error-card">
                <div className="vipton-error-icon">
                    {errorInfo.icon}
                </div>

                <h2 className="vipton-error-title">{errorInfo.title}</h2>
                <p className="vipton-error-message">{errorInfo.message}</p>

                <div className="vipton-error-buttons">
                    {canRetry && onRetry && (
                        <button
                            className="vipton-btn vipton-btn-retry"
                            onClick={handleRetry}
                            disabled={isRetrying}
                        >
                            {isRetrying && <span className="vipton-spinner" />}
                            {isRetrying ? 'Retrying...' : 'Try Again'}
                        </button>
                    )}
                    <button
                        className="vipton-btn vipton-btn-close"
                        onClick={handleClose}
                    >
                        Close
                    </button>
                </div>

                {error && (
                    <>
                        <button
                            className="vipton-error-details-btn"
                            onClick={() => setShowDetails(!showDetails)}
                        >
                            {showDetails ? 'Hide' : 'Show'} Details
                        </button>

                        {showDetails && (
                            <pre className="vipton-error-details">
                                {JSON.stringify(error, null, 2)}
                            </pre>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default AuthError;