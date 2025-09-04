/**
 * TokenManager for VipTon
 * JWT token management with secure storage
 */

export class TokenManager {
    constructor() {
        // Token data
        this.token = null;
        this.tokenExpiry = null;
        this.tokenPayload = null;

        // Configuration
        this.config = {
            tokenKey: 'vipton_token',
            expiryKey: 'vipton_token_expiry',
            expiryBuffer: 300000, // 5 minutes buffer
            validateOnGet: true
        };

        // Load existing token
        this.loadToken();
    }

    /**
     * Set access token
     */
    async setToken(token, expiresIn = 86400) {
        if (!token) {
            throw new Error('Token is required');
        }

        // Decode token payload
        const payload = this.decodeToken(token);
        if (!payload) {
            throw new Error('Invalid token format');
        }

        // Calculate expiry
        const expiryTime = Date.now() + (expiresIn * 1000);

        // Update state
        this.token = token;
        this.tokenExpiry = expiryTime;
        this.tokenPayload = payload;

        // Save to storage
        localStorage.setItem(this.config.tokenKey, token);
        localStorage.setItem(this.config.expiryKey, expiryTime.toString());

        console.log('🔑 VipTon token saved, expires in', Math.round(expiresIn / 60), 'minutes');
    }

    /**
     * Get access token
     */
    getToken() {
        if (!this.token) {
            return null;
        }

        // Validate if enabled
        if (this.config.validateOnGet && !this.isTokenValid()) {
            console.warn('⚠️ VipTon token expired');
            this.clearToken();
            return null;
        }

        return this.token;
    }

    /**
     * Get token payload
     */
    getTokenPayload() {
        if (!this.token || !this.isTokenValid()) {
            return null;
        }

        return this.tokenPayload;
    }

    /**
     * Get token expiry time
     */
    getTokenExpiry() {
        return this.tokenExpiry;
    }

    /**
     * Get time until token expires
     */
    getTimeUntilExpiry() {
        if (!this.tokenExpiry) {
            return -1;
        }

        return this.tokenExpiry - Date.now();
    }

    /**
     * Check if token is valid
     */
    isTokenValid() {
        if (!this.token || !this.tokenExpiry) {
            return false;
        }

        // Check expiry with buffer
        const now = Date.now();
        return now < (this.tokenExpiry - this.config.expiryBuffer);
    }

    /**
     * Check if token will expire soon
     */
    willExpireSoon(threshold = 300000) {
        const timeUntilExpiry = this.getTimeUntilExpiry();
        return timeUntilExpiry > 0 && timeUntilExpiry < threshold;
    }

    /**
     * Clear token
     */
    async clearToken() {
        this.token = null;
        this.tokenExpiry = null;
        this.tokenPayload = null;

        // Clear from storage
        localStorage.removeItem(this.config.tokenKey);
        localStorage.removeItem(this.config.expiryKey);

        console.log('🔑 VipTon token cleared');
    }

    /**
     * Load token from storage
     */
    async loadToken() {
        try {
            // Load from localStorage
            const token = localStorage.getItem(this.config.tokenKey);
            const expiry = localStorage.getItem(this.config.expiryKey);

            if (!token) {
                return false;
            }

            // Decode payload
            const payload = this.decodeToken(token);
            if (!payload) {
                console.warn('⚠️ Invalid stored VipTon token');
                await this.clearToken();
                return false;
            }

            // Parse expiry
            const expiryTime = expiry ? parseInt(expiry) : null;

            // Use expiry from token if not stored
            if (!expiryTime && payload.exp) {
                this.tokenExpiry = payload.exp * 1000; // Convert to milliseconds
            } else {
                this.tokenExpiry = expiryTime || (Date.now() + 86400000); // Default 24h
            }

            // Update state
            this.token = token;
            this.tokenPayload = payload;

            // Validate
            if (!this.isTokenValid()) {
                console.warn('⚠️ Stored VipTon token is expired');
                await this.clearToken();
                return false;
            }

            console.log('🔑 VipTon token loaded from storage');
            return true;

        } catch (error) {
            console.error('Failed to load token:', error);
            return false;
        }
    }

    /**
     * Decode JWT token
     */
    decodeToken(token) {
        try {
            // Split token
            const parts = token.split('.');
            if (parts.length !== 3) {
                return null;
            }

            // Decode payload
            const payload = JSON.parse(atob(parts[1]));

            return payload;
        } catch (error) {
            console.error('Failed to decode token:', error);
            return null;
        }
    }

    /**
     * Get user ID from token
     */
    getUserId() {
        const payload = this.getTokenPayload();
        return payload?.user_id || payload?.id || payload?.telegram_id || null;
    }

    /**
     * Get VIP info from token
     */
    getVipInfo() {
        const payload = this.getTokenPayload();
        return {
            isVip: payload?.is_vip || false,
            level: payload?.vip_level || 0
        };
    }

    /**
     * Add token to headers
     */
    addTokenToHeaders(headers = {}) {
        const token = this.getToken();

        if (token) {
            return {
                ...headers,
                'Authorization': `Bearer ${token}`
            };
        }

        return headers;
    }

    /**
     * Create Authorization header
     */
    getAuthHeader() {
        const token = this.getToken();
        return token ? `Bearer ${token}` : null;
    }

    /**
     * Monitor token expiry
     */
    monitorExpiry(callback, threshold = 300000) {
        const checkExpiry = () => {
            if (this.willExpireSoon(threshold)) {
                callback();
            }
        };

        // Check every minute
        const interval = setInterval(checkExpiry, 60000);

        // Check immediately
        checkExpiry();

        // Return stop function
        return () => {
            clearInterval(interval);
        };
    }

    /**
     * Export token data for debugging
     */
    exportTokenData() {
        return {
            hasToken: !!this.token,
            isValid: this.isTokenValid(),
            expiresAt: this.tokenExpiry,
            timeUntilExpiry: this.getTimeUntilExpiry(),
            vipInfo: this.getVipInfo(),
            payload: this.tokenPayload ? {
                ...this.tokenPayload,
                // Hide sensitive data
                iat: undefined,
                exp: undefined
            } : null
        };
    }
}

// Export singleton instance
export const tokenManager = new TokenManager();
export default TokenManager;