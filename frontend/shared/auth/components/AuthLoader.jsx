import React, { useEffect, useState } from 'react';

const AuthLoader = ({
    message = 'Initializing VipTon...',
    showProgress = false,
    progress = 0
}) => {
    const [dots, setDots] = useState('');

    // Animated dots effect
    useEffect(() => {
        const interval = setInterval(() => {
            setDots(prev => {
                if (prev.length >= 3) return '';
                return prev + '.';
            });
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="vipton-loader-container">
            <style jsx>{`
                .vipton-loader-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    min-height: 100vh;
                    background: #000000;
                    padding: 20px;
                    position: relative;
                    overflow: hidden;
                }
                
                .vipton-loader-bg {
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(circle at center, 
                        rgba(255, 215, 0, 0.03) 0%, 
                        transparent 70%);
                    animation: vipton-pulse 4s ease-in-out infinite;
                }
                
                @keyframes vipton-pulse {
                    0%, 100% { opacity: 0.5; }
                    50% { opacity: 1; }
                }
                
                .vipton-loader-content {
                    position: relative;
                    z-index: 1;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 32px;
                }
                
                .vipton-spinner-wrapper {
                    position: relative;
                    width: 80px;
                    height: 80px;
                }
                
                .vipton-spinner-outer {
                    position: absolute;
                    inset: 0;
                    border-radius: 50%;
                    border: 3px solid rgba(255, 215, 0, 0.1);
                }
                
                .vipton-spinner-inner {
                    position: absolute;
                    inset: 0;
                    border-radius: 50%;
                    border: 3px solid transparent;
                    border-top-color: #FFD700;
                    animation: vipton-spin 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
                }
                
                @keyframes vipton-spin {
                    to { transform: rotate(360deg); }
                }
                
                .vipton-logo {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    font-size: 24px;
                    font-weight: 800;
                    background: linear-gradient(135deg, #FFD700, #FFED4E, #FFC107);
                    -webkit-background-clip: text;
                    background-clip: text;
                    -webkit-text-fill-color: transparent;
                    text-shadow: 0 0 30px rgba(255, 215, 0, 0.5);
                }
                
                .vipton-message {
                    font-size: 18px;
                    color: #FFFFFF;
                    text-align: center;
                    font-weight: 500;
                    letter-spacing: -0.4px;
                    display: flex;
                    align-items: center;
                    gap: 2px;
                }
                
                .vipton-dots {
                    display: inline-block;
                    width: 30px;
                    text-align: left;
                    color: #FFD700;
                    font-weight: bold;
                }
                
                .vipton-progress-container {
                    width: 200px;
                    height: 4px;
                    background: rgba(255, 215, 0, 0.1);
                    border-radius: 2px;
                    overflow: hidden;
                    position: relative;
                }
                
                .vipton-progress-fill {
                    height: 100%;
                    background: linear-gradient(90deg, #FFD700, #FFED4E);
                    border-radius: 2px;
                    transition: width 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                    box-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
                }
                
                .vipton-progress-text {
                    margin-top: 8px;
                    font-size: 14px;
                    color: #8E8E93;
                    font-weight: 500;
                }
                
                /* Premium glow effect */
                .vipton-glow-orb {
                    position: absolute;
                    width: 120px;
                    height: 120px;
                    background: radial-gradient(circle, 
                        rgba(255, 215, 0, 0.3) 0%, 
                        transparent 70%);
                    border-radius: 50%;
                    filter: blur(40px);
                    animation: vipton-float 6s ease-in-out infinite;
                }
                
                .vipton-glow-orb:nth-child(1) {
                    top: -60px;
                    left: -60px;
                    animation-delay: 0s;
                }
                
                .vipton-glow-orb:nth-child(2) {
                    bottom: -60px;
                    right: -60px;
                    animation-delay: 3s;
                }
                
                @keyframes vipton-float {
                    0%, 100% { 
                        transform: translate(0, 0) scale(1); 
                        opacity: 0.5;
                    }
                    50% { 
                        transform: translate(30px, -30px) scale(1.2); 
                        opacity: 0.8;
                    }
                }
                
                /* Responsive */
                @media (max-width: 390px) {
                    .vipton-spinner-wrapper {
                        width: 60px;
                        height: 60px;
                    }
                    
                    .vipton-logo {
                        font-size: 18px;
                    }
                    
                    .vipton-message {
                        font-size: 16px;
                    }
                }
            `}</style>

            <div className="vipton-loader-bg" />

            <div className="vipton-glow-orb" />
            <div className="vipton-glow-orb" />

            <div className="vipton-loader-content">
                <div className="vipton-spinner-wrapper">
                    <div className="vipton-spinner-outer" />
                    <div className="vipton-spinner-inner" />
                    <div className="vipton-logo">VT</div>
                </div>

                <div className="vipton-message">
                    {message}
                    <span className="vipton-dots">{dots}</span>
                </div>

                {showProgress && (
                    <div>
                        <div className="vipton-progress-container">
                            <div
                                className="vipton-progress-fill"
                                style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
                            />
                        </div>
                        <div className="vipton-progress-text">{progress}%</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AuthLoader;