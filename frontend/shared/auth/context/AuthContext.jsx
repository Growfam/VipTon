import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import AuthService from '../services/AuthService';
import authEvents from '../services/AuthEvents';
import { tokenManager } from '../services/TokenManager';

// Create Auth Context
const AuthContext = createContext(null);

// Auth Provider Component
export const AuthProvider = ({ children }) => {
    const [state, setState] = useState({
        user: null,
        loading: true,
        error: null,
        isAuthenticated: false,
        vipStatus: null,
        tonBalance: 0
    });

    // Initialize auth on mount
    useEffect(() => {
        initializeAuth();
        setupEventListeners();

        return () => {
            cleanupEventListeners();
        };
    }, []);

    // Initialize authentication
    const initializeAuth = async () => {
        try {
            setState(prev => ({ ...prev, loading: true, error: null }));

            const success = await AuthService.init();

            if (success) {
                const userData = AuthService.getUser();
                const vipInfo = tokenManager.getVipInfo();

                setState(prev => ({
                    ...prev,
                    user: userData,
                    isAuthenticated: true,
                    vipStatus: vipInfo,
                    tonBalance: userData?.ton_balance || 0,
                    loading: false
                }));

                // Get fresh VIP status
                fetchVipStatus();
            } else {
                setState(prev => ({
                    ...prev,
                    loading: false,
                    isAuthenticated: false
                }));
            }
        } catch (error) {
            console.error('Auth initialization error:', error);
            setState(prev => ({
                ...prev,
                loading: false,
                error: error.message
            }));
        }
    };

    // Login function
    const login = async () => {
        try {
            setState(prev => ({ ...prev, loading: true, error: null }));

            const success = await AuthService.authenticate();

            if (success) {
                const userData = AuthService.getUser();
                const vipInfo = tokenManager.getVipInfo();

                setState(prev => ({
                    ...prev,
                    user: userData,
                    isAuthenticated: true,
                    vipStatus: vipInfo,
                    tonBalance: userData?.ton_balance || 0,
                    loading: false
                }));

                authEvents.emit('user:login', userData);

                // Get fresh VIP status
                fetchVipStatus();

                return true;
            }

            return false;
        } catch (error) {
            console.error('Login error:', error);
            setState(prev => ({
                ...prev,
                loading: false,
                error: error.message
            }));
            return false;
        }
    };

    // Logout function
    const logout = async () => {
        try {
            await AuthService.logout();

            setState({
                user: null,
                loading: false,
                error: null,
                isAuthenticated: false,
                vipStatus: null,
                tonBalance: 0
            });

            authEvents.emit('user:logout');
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    // Update profile
    const updateProfile = async (updates) => {
        try {
            const updatedUser = await AuthService.updateProfile(updates);

            setState(prev => ({
                ...prev,
                user: updatedUser,
                tonBalance: updatedUser?.ton_balance || 0
            }));

            authEvents.emit('user:update', updatedUser);

            return updatedUser;
        } catch (error) {
            console.error('Profile update error:', error);
            throw error;
        }
    };

    // Fetch VIP status
    const fetchVipStatus = async () => {
        try {
            const vipData = await AuthService.getVipStatus();

            setState(prev => ({
                ...prev,
                vipStatus: vipData
            }));

            authEvents.emit('vip:statusChanged', vipData);

            return vipData;
        } catch (error) {
            console.error('VIP status fetch error:', error);
            return null;
        }
    };

    // Update TON balance
    const updateTonBalance = useCallback((newBalance) => {
        setState(prev => ({
            ...prev,
            tonBalance: newBalance,
            user: prev.user ? { ...prev.user, ton_balance: newBalance } : null
        }));

        authEvents.emit('ton:balanceUpdated', { balance: newBalance });
    }, []);

    // Setup event listeners
    const setupEventListeners = () => {
        const unsubscribers = [
            authEvents.on('auth:expired', () => {
                setState(prev => ({
                    ...prev,
                    isAuthenticated: false,
                    error: 'Session expired'
                }));
            }),

            authEvents.on('user:update', (userData) => {
                setState(prev => ({
                    ...prev,
                    user: userData,
                    tonBalance: userData?.ton_balance || 0
                }));
            }),

            authEvents.on('vip:statusChanged', (vipData) => {
                setState(prev => ({
                    ...prev,
                    vipStatus: vipData
                }));
            })
        ];

        // Store unsubscribers
        window._viptonAuthUnsubscribers = unsubscribers;
    };

    // Cleanup event listeners
    const cleanupEventListeners = () => {
        if (window._viptonAuthUnsubscribers) {
            window._viptonAuthUnsubscribers.forEach(unsub => unsub());
            delete window._viptonAuthUnsubscribers;
        }
    };

    // Context value
    const value = {
        // State
        user: state.user,
        loading: state.loading,
        error: state.error,
        isAuthenticated: state.isAuthenticated,
        vipStatus: state.vipStatus,
        tonBalance: state.tonBalance,

        // Actions
        login,
        logout,
        updateProfile,
        fetchVipStatus,
        updateTonBalance,

        // Utils
        getToken: () => AuthService.getToken(),
        getAuthHeaders: () => AuthService.getAuthHeaders(),
        isVip: () => state.vipStatus?.is_vip || false,
        getVipLevel: () => state.vipStatus?.vip_level || 0
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use auth context
export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within AuthProvider');
    }

    return context;
};

// VIP specific hook
export const useVipStatus = () => {
    const { vipStatus, fetchVipStatus, isVip, getVipLevel } = useAuth();

    return {
        vipStatus,
        isVip: isVip(),
        level: getVipLevel(),
        daysLeft: vipStatus?.days_left || 0,
        refresh: fetchVipStatus
    };
};

// TON balance hook
export const useTonBalance = () => {
    const { tonBalance, updateTonBalance } = useAuth();

    return {
        balance: tonBalance,
        formatted: new Intl.NumberFormat('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(tonBalance || 0),
        update: updateTonBalance
    };
};

export default AuthContext;