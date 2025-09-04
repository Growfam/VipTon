/**
 * AuthService for VipTon
 * Main authentication service for Telegram Mini App
 */

class AuthServiceClass {
    constructor() {
        if (AuthServiceClass.instance) {
            return AuthServiceClass.instance;
        }

        // Configuration
        this.config = {
            apiUrl: 'https://vipton-vipton.up.railway.app/api',
            authEndpoint: '/auth/telegram',
            verifyEndpoint: '/auth/verify',
            refreshEndpoint: '/auth/refresh',
            profileEndpoint: '/auth/profile',
            vipStatusEndpoint: '/auth/vip-status',
            autoRefresh: true,
            refreshThreshold: 300000, // 5 minutes before expiry
            maxRetries: 3,
            retryDelay: 1000
        };

        // State
        this.state = {
            isAuthenticated: false,
            isAuthenticating: false,
            authError: null,
            initPromise: null,
            refreshPromise: null,
            refreshTimeout: null,
            user: null,
            token: null
        };

        // Telegram Web App
        this.telegram = window.Telegram?.WebApp;

        AuthServiceClass.instance = this;
    }

    /**
     * Initialize authentication service
     */
    async init() {
        if (this.state.initPromise) {
            return this.state.initPromise;
        }

        this.state.initPromise = this._performInit();

        try {
            const result = await this.state.initPromise;
            return result;
        } catch (error) {
            this.state.initPromise = null;
            throw error;
        }
    }

    /**
     * Perform initialization
     */
    async _performInit() {
        console.log('🔐 Initializing VipTon Auth Service...');

        try {
            // Load saved session
            const savedToken = localStorage.getItem('vipton_token');
            const savedUser = localStorage.getItem('vipton_user');

            if (savedToken && savedUser) {
                console.log('📦 Found saved session');

                // Verify token is still valid
                const isValid = await this.verifyToken(savedToken);

                if (isValid) {
                    // Restore session
                    this.state.token = savedToken;
                    this.state.user = JSON.parse(savedUser);
                    this.state.isAuthenticated = true;
                    return true;
                } else {
                    console.log('⚠️ Saved token is invalid');
                    this.clearSession();
                }
            }

            // Check if we have Telegram initData
            if (this.telegram?.initData) {
                console.log('📱 Telegram initData available');
                return await this.authenticate();
            }

            console.log('❌ No authentication data available');
            return false;

        } catch (error) {
            console.error('❌ Auth init failed:', error);
            this.handleAuthError(error);
            return false;
        }
    }

    /**
     * Authenticate with Telegram initData
     */
    async authenticate() {
        if (this.state.isAuthenticating) {
            console.log('⏳ Authentication already in progress');
            return false;
        }

        if (!this.telegram?.initData) {
            throw new Error('No Telegram data available');
        }

        this.state.isAuthenticating = true;
        this.state.authError = null;

        try {
            console.log('🚀 Authenticating with VipTon...');

            // Make auth request
            const response = await fetch(`${this.config.apiUrl}${this.config.authEndpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ initData: this.telegram.initData })
            });

            const data = await response.json();

            if (!response.ok || !data.success) {
                throw new Error(data.error || 'Authentication failed');
            }

            // Save authentication data
            this.state.token = data.data.token;
            this.state.user = data.data.user;
            this.state.isAuthenticated = true;

            // Save to localStorage
            localStorage.setItem('vipton_token', data.data.token);
            localStorage.setItem('vipton_user', JSON.stringify(data.data.user));

            // Schedule token refresh
            if (this.config.autoRefresh && data.data.expires_in) {
                this.scheduleTokenRefresh(data.data.expires_in);
            }

            console.log('✅ VipTon authentication successful');
            return true;

        } catch (error) {
            console.error('❌ Authentication failed:', error);
            this.handleAuthError(error);
            throw error;
        } finally {
            this.state.isAuthenticating = false;
        }
    }

    /**
     * Verify token validity
     */
    async verifyToken(token) {
        try {
            const response = await fetch(`${this.config.apiUrl}${this.config.verifyEndpoint}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json'
                }
            });

            if (!response.ok) {
                return false;
            }

            const data = await response.json();

            // Update user data if provided
            if (data.data?.user) {
                this.state.user = data.data.user;
                localStorage.setItem('vipton_user', JSON.stringify(data.data.user));
            }

            return data.success === true;

        } catch (error) {
            console.error('Token verification error:', error);
            return false;
        }
    }

    /**
     * Get VIP status
     */
    async getVipStatus() {
        if (!this.state.token) {
            throw new Error('Not authenticated');
        }

        try {
            const response = await fetch(`${this.config.apiUrl}${this.config.vipStatusEndpoint}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${this.state.token}`,
                    'Accept': 'application/json'
                }
            });

            const data = await response.json();

            if (!response.ok || !data.success) {
                throw new Error(data.error || 'Failed to get VIP status');
            }

            return data.data;

        } catch (error) {
            console.error('VIP status error:', error);
            throw error;
        }
    }

    /**
     * Update user profile
     */
    async updateProfile(updates) {
        if (!this.state.token) {
            throw new Error('Not authenticated');
        }

        try {
            const response = await fetch(`${this.config.apiUrl}${this.config.profileEndpoint}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${this.state.token}`,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(updates)
            });

            const data = await response.json();

            if (!response.ok || !data.success) {
                throw new Error(data.error || 'Profile update failed');
            }

            // Update local user data
            this.state.user = data.data.user;
            localStorage.setItem('vipton_user', JSON.stringify(data.data.user));

            return data.data.user;

        } catch (error) {
            console.error('Profile update error:', error);
            throw error;
        }
    }

    /**
     * Refresh token
     */
    async refreshToken() {
        if (!this.state.token) {
            throw new Error('No token to refresh');
        }

        try {
            const response = await fetch(`${this.config.apiUrl}${this.config.refreshEndpoint}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${this.state.token}`,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });

            const data = await response.json();

            if (!response.ok || !data.success) {
                // If refresh fails, try to re-authenticate
                if (this.telegram?.initData) {
                    return await this.authenticate();
                }
                throw new Error(data.error || 'Token refresh failed');
            }

            // Update token
            this.state.token = data.data.token;
            localStorage.setItem('vipton_token', data.data.token);

            // Update user data if provided
            if (data.data.user) {
                this.state.user = data.data.user;
                localStorage.setItem('vipton_user', JSON.stringify(data.data.user));
            }

            // Schedule next refresh
            if (data.data.expires_in) {
                this.scheduleTokenRefresh(data.data.expires_in);
            }

            return data.data.token;

        } catch (error) {
            console.error('Token refresh error:', error);
            throw error;
        }
    }

    /**
     * Schedule token refresh
     */
    scheduleTokenRefresh(expiresIn) {
        // Clear existing timeout
        if (this.state.refreshTimeout) {
            clearTimeout(this.state.refreshTimeout);
        }

        // Calculate when to refresh (5 minutes before expiry)
        const refreshIn = Math.max(
            (expiresIn * 1000) - this.config.refreshThreshold,
            60000 // Minimum 1 minute
        );

        console.log(`⏰ Token refresh scheduled in ${Math.round(refreshIn / 1000)}s`);

        this.state.refreshTimeout = setTimeout(() => {
            this.refreshToken().catch(error => {
                console.error('Scheduled refresh failed:', error);
            });
        }, refreshIn);
    }

    /**
     * Logout
     */
    async logout() {
        console.log('👋 Logging out from VipTon...');

        // Cancel refresh timeout
        if (this.state.refreshTimeout) {
            clearTimeout(this.state.refreshTimeout);
            this.state.refreshTimeout = null;
        }

        // Clear state
        this.state.isAuthenticated = false;
        this.state.user = null;
        this.state.token = null;
        this.state.authError = null;

        // Clear localStorage
        this.clearSession();

        console.log('✅ Logged out successfully');
    }

    /**
     * Clear session data
     */
    clearSession() {
        localStorage.removeItem('vipton_token');
        localStorage.removeItem('vipton_user');
    }

    /**
     * Handle authentication error
     */
    handleAuthError(error) {
        this.state.authError = error;
        this.state.isAuthenticated = false;
    }

    /**
     * Get current user
     */
    getUser() {
        return this.state.user;
    }

    /**
     * Get current token
     */
    getToken() {
        return this.state.token;
    }

    /**
     * Check if authenticated
     */
    isAuthenticated() {
        return this.state.isAuthenticated && !!this.state.token;
    }

    /**
     * Get auth headers
     */
    getAuthHeaders() {
        if (!this.state.token) {
            return {};
        }

        return {
            'Authorization': `Bearer ${this.state.token}`
        };
    }
}

// Export singleton instance
export const AuthService = new AuthServiceClass();
export default AuthService;