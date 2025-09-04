/**
 * VipTon Auth Hooks Collection
 * Custom React hooks for authentication
 */

import { useState, useEffect, useCallback, useRef } from 'react';
import AuthService from '../services/AuthService';
import authEvents from '../services/AuthEvents';
import { tokenManager } from '../services/TokenManager';
import { authStorage } from '../services/AuthStorage';

/**
 * Main authentication hook
 */
export const useAuth = () => {
    const [state, setState] = useState({
        user: null,
        loading: true,
        error: null,
        isAuthenticated: false
    });

    const mountedRef = useRef(true);

    useEffect(() => {
        initAuth();

        return () => {
            mountedRef.current = false;
        };
    }, []);

    const initAuth = async () => {
        try {
            const success = await AuthService.init();

            if (!mountedRef.current) return;

            if (success) {
                const userData = AuthService.getUser();
                setState({
                    user: userData,
                    isAuthenticated: true,
                    loading: false,
                    error: null
                });
            } else {
                setState(prev => ({
                    ...prev,
                    loading: false,
                    isAuthenticated: false
                }));
            }
        } catch (error) {
            if (!mountedRef.current) return;

            setState(prev => ({
                ...prev,
                loading: false,
                error: error.message
            }));
        }
    };

    const login = useCallback(async () => {
        setState(prev => ({ ...prev, loading: true, error: null }));

        try {
            const success = await AuthService.authenticate();

            if (!mountedRef.current) return false;

            if (success) {
                const userData = AuthService.getUser();
                setState({
                    user: userData,
                    isAuthenticated: true,
                    loading: false,
                    error: null
                });
                return true;
            }

            setState(prev => ({
                ...prev,
                loading: false,
                error: 'Authentication failed'
            }));
            return false;
        } catch (error) {
            if (!mountedRef.current) return false;

            setState(prev => ({
                ...prev,
                loading: false,
                error: error.message
            }));
            return false;
        }
    }, []);

    const logout = useCallback(async () => {
        await AuthService.logout();

        if (!mountedRef.current) return;

        setState({
            user: null,
            isAuthenticated: false,
            loading: false,
            error: null
        });
    }, []);

    const updateProfile = useCallback(async (updates) => {
        try {
            const updatedUser = await AuthService.updateProfile(updates);

            if (!mountedRef.current) return updatedUser;

            setState(prev => ({
                ...prev,
                user: updatedUser
            }));

            return updatedUser;
        } catch (error) {
            if (!mountedRef.current) return null;

            setState(prev => ({
                ...prev,
                error: error.message
            }));
            throw error;
        }
    }, []);

    return {
        ...state,
        login,
        logout,
        updateProfile,
        refresh: initAuth
    };
};

/**
 * VIP Status Hook
 */
export const useVipStatus = () => {
    const [vipStatus, setVipStatus] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const mountedRef = useRef(true);

    useEffect(() => {
        fetchVipStatus();

        const unsubscribe = authEvents.on('vip:statusChanged', (data) => {
            if (mountedRef.current) {
                setVipStatus(data);
            }
        });

        return () => {
            mountedRef.current = false;
            unsubscribe();
        };
    }, []);

    const fetchVipStatus = async () => {
        if (!AuthService.isAuthenticated()) return;

        setLoading(true);
        setError(null);

        try {
            const status = await AuthService.getVipStatus();

            if (!mountedRef.current) return;

            setVipStatus(status);
        } catch (err) {
            if (!mountedRef.current) return;

            setError(err.message);
        } finally {
            if (mountedRef.current) {
                setLoading(false);
            }
        }
    };

    return {
        vipStatus,
        loading,
        error,
        isVip: vipStatus?.is_vip || false,
        level: vipStatus?.vip_level || 0,
        daysLeft: vipStatus?.days_left || 0,
        refresh: fetchVipStatus
    };
};

/**
 * TON Balance Hook
 */
export const useTonBalance = () => {
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        const user = AuthService.getUser();
        if (user) {
            setBalance(user.ton_balance || 0);
        }

        const unsubscribe = authEvents.on('ton:balanceUpdated', ({ balance }) => {
            setBalance(balance);
        });

        return () => unsubscribe();
    }, []);

    const updateBalance = useCallback((newBalance) => {
        setBalance(newBalance);
        authEvents.emit('ton:balanceUpdated', { balance: newBalance });
    }, []);

    const formatted = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(balance);

    return {
        balance,
        formatted,
        updateBalance
    };
};

/**
 * Auth Guard Hook
 */
export const useAuthGuard = (requiredAuth = true, redirectTo = null) => {
    const [canAccess, setCanAccess] = useState(false);
    const [checking, setChecking] = useState(true);

    useEffect(() => {
        checkAccess();
    }, [requiredAuth]);

    const checkAccess = async () => {
        setChecking(true);

        const isAuthenticated = AuthService.isAuthenticated();

        if (requiredAuth && !isAuthenticated) {
            setCanAccess(false);

            if (redirectTo) {
                // Handle redirect
                if (window.Telegram?.WebApp) {
                    // Try to authenticate automatically
                    try {
                        await AuthService.authenticate();
                        setCanAccess(AuthService.isAuthenticated());
                    } catch {
                        setCanAccess(false);
                    }
                } else {
                    window.location.href = redirectTo;
                }
            }
        } else {
            setCanAccess(true);
        }

        setChecking(false);
    };

    return {
        canAccess,
        checking,
        refresh: checkAccess
    };
};

/**
 * Token Status Hook
 */
export const useTokenStatus = () => {
    const [tokenInfo, setTokenInfo] = useState({
        hasToken: false,
        isValid: false,
        expiresAt: null,
        timeUntilExpiry: -1
    });

    useEffect(() => {
        updateTokenInfo();

        const interval = setInterval(updateTokenInfo, 60000); // Update every minute

        return () => clearInterval(interval);
    }, []);

    const updateTokenInfo = () => {
        const hasToken = !!tokenManager.getToken();
        const isValid = tokenManager.isTokenValid();
        const expiresAt = tokenManager.getTokenExpiry();
        const timeUntilExpiry = tokenManager.getTimeUntilExpiry();

        setTokenInfo({
            hasToken,
            isValid,
            expiresAt,
            timeUntilExpiry
        });
    };

    return tokenInfo;
};

/**
 * Auth Events Hook
 */
export const useAuthEvent = (event, handler) => {
    useEffect(() => {
        const unsubscribe = authEvents.on(event, handler);
        return () => unsubscribe();
    }, [event, handler]);
};

/**
 * Auth Storage Hook
 */
export const useAuthStorage = () => {
    const [storageInfo, setStorageInfo] = useState(null);

    useEffect(() => {
        updateStorageInfo();
    }, []);

    const updateStorageInfo = async () => {
        const info = authStorage.getStorageInfo();
        setStorageInfo(info);
    };

    const saveData = useCallback(async (key, value) => {
        return await authStorage.setItem(key, value);
    }, []);

    const loadData = useCallback(async (key) => {
        return await authStorage.getItem(key);
    }, []);

    const removeData = useCallback(async (key) => {
        return await authStorage.removeItem(key);
    }, []);

    const clearAll = useCallback(async () => {
        await authStorage.clear();
        updateStorageInfo();
    }, []);

    return {
        storageInfo,
        saveData,
        loadData,
        removeData,
        clearAll,
        refresh: updateStorageInfo
    };
};

/**
 * Permission Check Hook
 */
export const usePermission = (permission) => {
    const [hasPermission, setHasPermission] = useState(false);

    useEffect(() => {
        checkPermission();

        const unsubscribe = authEvents.on('user:update', checkPermission);
        return () => unsubscribe();
    }, [permission]);

    const checkPermission = () => {
        const user = AuthService.getUser();

        if (!user) {
            setHasPermission(false);
            return;
        }

        switch (permission) {
            case 'vip':
                setHasPermission(user.vip_level > 0);
                break;
            case 'admin':
                setHasPermission(user.is_admin === true);
                break;
            case 'premium':
                setHasPermission(user.is_premium === true);
                break;
            default:
                setHasPermission(false);
        }
    };

    return hasPermission;
};

export default {
    useAuth,
    useVipStatus,
    useTonBalance,
    useAuthGuard,
    useTokenStatus,
    useAuthEvent,
    useAuthStorage,
    usePermission
};