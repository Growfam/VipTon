/**
 * AuthStorage for VipTon
 * Secure storage with encryption support
 */

export class AuthStorage {
    constructor() {
        // Storage prefix
        this.prefix = 'vipton_';

        // Check storage availability
        this.isLocalStorageAvailable = this.checkLocalStorage();

        // Memory fallback
        this.memoryStorage = new Map();

        // Encryption key (derived from Telegram data)
        this.encryptionKey = this.generateKey();
    }

    /**
     * Check if localStorage is available
     */
    checkLocalStorage() {
        try {
            const test = '__vipton_test__';
            localStorage.setItem(test, test);
            localStorage.removeItem(test);
            return true;
        } catch {
            console.warn('⚠️ localStorage not available, using memory storage');
            return false;
        }
    }

    /**
     * Generate encryption key
     */
    generateKey() {
        const telegramId = window.Telegram?.WebApp?.initDataUnsafe?.user?.id;
        return `${this.prefix}${telegramId || 'default'}_key`;
    }

    /**
     * Get full key with prefix
     */
    getKey(key) {
        return `${this.prefix}${key}`;
    }

    /**
     * Set item in storage
     */
    async setItem(key, value) {
        const fullKey = this.getKey(key);

        try {
            const data = {
                value,
                timestamp: Date.now(),
                version: '1.0'
            };

            const serialized = JSON.stringify(data);
            const encrypted = await this.encrypt(serialized);

            if (this.isLocalStorageAvailable) {
                localStorage.setItem(fullKey, encrypted);
            } else {
                this.memoryStorage.set(fullKey, encrypted);
            }

            return true;
        } catch (error) {
            console.error('VipTon storage setItem error:', error);

            // Fallback to memory storage
            try {
                this.memoryStorage.set(fullKey, JSON.stringify({
                    value,
                    timestamp: Date.now()
                }));
                return true;
            } catch (e) {
                console.error('Memory storage also failed:', e);
                return false;
            }
        }
    }

    /**
     * Get item from storage
     */
    async getItem(key) {
        const fullKey = this.getKey(key);

        try {
            let encrypted;

            if (this.isLocalStorageAvailable) {
                encrypted = localStorage.getItem(fullKey);
            } else {
                encrypted = this.memoryStorage.get(fullKey);
            }

            if (!encrypted) {
                return null;
            }

            const decrypted = await this.decrypt(encrypted);
            const parsed = JSON.parse(decrypted);

            return parsed.value;
        } catch (error) {
            console.error('VipTon storage getItem error:', error);

            // Try to get unencrypted from memory
            const value = this.memoryStorage.get(fullKey);
            if (value) {
                try {
                    const parsed = JSON.parse(value);
                    return parsed.value;
                } catch {
                    return null;
                }
            }

            return null;
        }
    }

    /**
     * Remove item from storage
     */
    async removeItem(key) {
        const fullKey = this.getKey(key);

        if (this.isLocalStorageAvailable) {
            localStorage.removeItem(fullKey);
        }

        this.memoryStorage.delete(fullKey);
    }

    /**
     * Clear all VipTon storage
     */
    async clear() {
        if (this.isLocalStorageAvailable) {
            // Remove all items with our prefix
            const keys = [];
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key && key.startsWith(this.prefix)) {
                    keys.push(key);
                }
            }

            keys.forEach(key => localStorage.removeItem(key));
        }

        // Clear memory storage
        this.memoryStorage.clear();
    }

    /**
     * Get all keys
     */
    async getKeys() {
        const keys = new Set();

        // Get from localStorage
        if (this.isLocalStorageAvailable) {
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key && key.startsWith(this.prefix)) {
                    keys.add(key.replace(this.prefix, ''));
                }
            }
        }

        // Get from memory
        this.memoryStorage.forEach((_, key) => {
            keys.add(key.replace(this.prefix, ''));
        });

        return Array.from(keys);
    }

    /**
     * Simple encryption (XOR cipher)
     * In production, consider using Web Crypto API
     */
    async encrypt(text) {
        if (!this.isLocalStorageAvailable) {
            // Don't encrypt in memory storage
            return text;
        }

        const key = this.encryptionKey;
        let encrypted = '';

        for (let i = 0; i < text.length; i++) {
            encrypted += String.fromCharCode(
                text.charCodeAt(i) ^ key.charCodeAt(i % key.length)
            );
        }

        return btoa(encrypted);
    }

    /**
     * Simple decryption (XOR cipher)
     */
    async decrypt(encrypted) {
        if (!this.isLocalStorageAvailable) {
            // Not encrypted in memory storage
            return encrypted;
        }

        try {
            const key = this.encryptionKey;
            const text = atob(encrypted);
            let decrypted = '';

            for (let i = 0; i < text.length; i++) {
                decrypted += String.fromCharCode(
                    text.charCodeAt(i) ^ key.charCodeAt(i % key.length)
                );
            }

            return decrypted;
        } catch (error) {
            // Return as is if decryption fails
            return encrypted;
        }
    }

    /**
     * Save VipTon session data
     */
    async saveSession(session) {
        return await this.setItem('session', session);
    }

    /**
     * Get VipTon session data
     */
    async getSession() {
        return await this.getItem('session');
    }

    /**
     * Clear VipTon session data
     */
    async clearSession() {
        await this.removeItem('session');
    }

    /**
     * Save VIP data
     */
    async saveVipData(vipData) {
        return await this.setItem('vip_data', vipData);
    }

    /**
     * Get VIP data
     */
    async getVipData() {
        return await this.getItem('vip_data');
    }

    /**
     * Set with expiry
     */
    async setWithExpiry(key, value, ttl) {
        const expiryTime = Date.now() + ttl;
        return await this.setItem(key, {
            value,
            expiry: expiryTime
        });
    }

    /**
     * Get with expiry check
     */
    async getWithExpiry(key) {
        const item = await this.getItem(key);

        if (!item) {
            return null;
        }

        if (item.expiry && Date.now() > item.expiry) {
            await this.removeItem(key);
            return null;
        }

        return item.value;
    }

    /**
     * Get storage info
     */
    getStorageInfo() {
        const info = {
            type: this.isLocalStorageAvailable ? 'localStorage' : 'memory',
            itemCount: 0,
            estimatedSize: 0
        };

        if (this.isLocalStorageAvailable) {
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key && key.startsWith(this.prefix)) {
                    info.itemCount++;
                    const value = localStorage.getItem(key);
                    if (value) {
                        info.estimatedSize += value.length;
                    }
                }
            }
        } else {
            info.itemCount = this.memoryStorage.size;
            this.memoryStorage.forEach(value => {
                if (typeof value === 'string') {
                    info.estimatedSize += value.length;
                }
            });
        }

        info.estimatedSizeKB = Math.round(info.estimatedSize / 1024 * 100) / 100;

        return info;
    }

    /**
     * Export all data (for debugging)
     */
    async exportData() {
        const data = {};
        const keys = await this.getKeys();

        for (const key of keys) {
            data[key] = await this.getItem(key);
        }

        return data;
    }

    /**
     * Import data
     */
    async importData(data) {
        for (const [key, value] of Object.entries(data)) {
            await this.setItem(key, value);
        }
    }
}

// Export singleton instance
export const authStorage = new AuthStorage();
export default AuthStorage;