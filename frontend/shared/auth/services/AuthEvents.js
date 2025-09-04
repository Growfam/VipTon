/**
 * AuthEvents for VipTon
 * Centralized event system for authentication
 */

export class AuthEvents {
    constructor() {
        if (AuthEvents.instance) {
            return AuthEvents.instance;
        }

        // Event listeners
        this.listeners = new Map();

        // Event history for debugging
        this.history = [];
        this.maxHistorySize = 50;

        // VipTon specific events
        this.eventTypes = {
            // Authentication events
            'auth:start': 'Authentication process started',
            'auth:success': 'Authentication successful',
            'auth:error': 'Authentication error',
            'auth:expired': 'Authentication expired',
            'auth:logout': 'User logged out',
            'auth:restored': 'Session restored from storage',

            // Token events
            'token:set': 'Token was set',
            'token:clear': 'Token was cleared',
            'token:expired': 'Token expired',
            'token:refreshed': 'Token was refreshed',
            'token:refresh:start': 'Token refresh started',
            'token:refresh:error': 'Token refresh failed',

            // User events
            'user:login': 'User logged in',
            'user:logout': 'User logged out',
            'user:update': 'User data updated',
            'user:sync': 'User data synced from another tab',
            'user:profileUpdated': 'User profile updated',

            // VIP events
            'vip:activated': 'VIP status activated',
            'vip:upgraded': 'VIP level upgraded',
            'vip:expired': 'VIP status expired',
            'vip:statusChanged': 'VIP status changed',

            // TON events
            'ton:balanceUpdated': 'TON balance updated',
            'ton:transactionCompleted': 'TON transaction completed',
            'ton:withdrawRequested': 'TON withdrawal requested',

            // Permission events
            'permission:granted': 'Permission granted',
            'permission:denied': 'Permission denied',
            'permission:changed': 'Permissions changed',

            // Network events
            'network:online': 'Network connection restored',
            'network:offline': 'Network connection lost',
            'network:error': 'Network error occurred',

            // API events
            'api:unauthorized': '401 response received',
            'api:forbidden': '403 response received',
            'api:badRequest': '400 response received',
            'api:notFound': '404 response received',
            'api:serverError': '5xx response received',
            'api:rateLimited': '429 response received'
        };

        AuthEvents.instance = this;
    }

    /**
     * Subscribe to event
     */
    on(event, handler) {
        if (!this.listeners.has(event)) {
            this.listeners.set(event, new Set());
        }

        this.listeners.get(event).add(handler);

        // Return unsubscribe function
        return () => this.off(event, handler);
    }

    /**
     * Subscribe to event once
     */
    once(event, handler) {
        const onceHandler = (data) => {
            handler(data);
            this.off(event, onceHandler);
        };

        this.on(event, onceHandler);
    }

    /**
     * Unsubscribe from event
     */
    off(event, handler) {
        const handlers = this.listeners.get(event);
        if (handlers) {
            handlers.delete(handler);

            // Clean up empty sets
            if (handlers.size === 0) {
                this.listeners.delete(event);
            }
        }
    }

    /**
     * Emit event
     */
    emit(event, data = null) {
        // Log to history
        this.addToHistory(event, data);

        // Log in development
        if (this.isDevelopment()) {
            console.log(`📢 VipTon Event: ${event}`, data);
        }

        // Call handlers
        const handlers = this.listeners.get(event);
        if (handlers) {
            handlers.forEach(handler => {
                try {
                    handler(data);
                } catch (error) {
                    console.error(`Error in ${event} handler:`, error);
                }
            });
        }

        // Also emit to window for global listening
        window.dispatchEvent(new CustomEvent(`vipton:${event}`, {
            detail: data
        }));
    }

    /**
     * Wait for event
     */
    waitFor(event, timeout = 30000) {
        return new Promise((resolve, reject) => {
            const timer = setTimeout(() => {
                this.off(event, handler);
                reject(new Error(`Timeout waiting for ${event}`));
            }, timeout);

            const handler = (data) => {
                clearTimeout(timer);
                this.off(event, handler);
                resolve(data);
            };

            this.on(event, handler);
        });
    }

    /**
     * Batch emit multiple events
     */
    batchEmit(events) {
        events.forEach(({ event, data }) => {
            this.emit(event, data);
        });
    }

    /**
     * Remove all listeners for event
     */
    removeAllListeners(event = null) {
        if (event) {
            this.listeners.delete(event);
        } else {
            this.listeners.clear();
        }
    }

    /**
     * Get listener count
     */
    listenerCount(event) {
        const handlers = this.listeners.get(event);
        return handlers ? handlers.size : 0;
    }

    /**
     * Get all event names
     */
    eventNames() {
        return Array.from(this.listeners.keys());
    }

    /**
     * Add event to history
     */
    addToHistory(event, data) {
        this.history.push({
            event,
            data,
            timestamp: Date.now()
        });

        // Trim history
        if (this.history.length > this.maxHistorySize) {
            this.history.shift();
        }
    }

    /**
     * Get event history
     */
    getHistory(event = null) {
        if (event) {
            return this.history.filter(item => item.event === event);
        }
        return [...this.history];
    }

    /**
     * Clear event history
     */
    clearHistory() {
        this.history = [];
    }

    /**
     * Check if in development mode
     */
    isDevelopment() {
        return window.location.hostname === 'localhost' ||
               window.location.hostname === '127.0.0.1' ||
               window.location.hostname.includes('railway.app');
    }

    /**
     * Create scoped emitter for VIP events
     */
    createVipEmitter() {
        return {
            onActivated: (handler) => this.on('vip:activated', handler),
            onUpgraded: (handler) => this.on('vip:upgraded', handler),
            onExpired: (handler) => this.on('vip:expired', handler),
            onStatusChanged: (handler) => this.on('vip:statusChanged', handler),
            emitActivated: (data) => this.emit('vip:activated', data),
            emitUpgraded: (data) => this.emit('vip:upgraded', data),
            emitExpired: (data) => this.emit('vip:expired', data),
            emitStatusChanged: (data) => this.emit('vip:statusChanged', data)
        };
    }

    /**
     * Create scoped emitter for TON events
     */
    createTonEmitter() {
        return {
            onBalanceUpdated: (handler) => this.on('ton:balanceUpdated', handler),
            onTransactionCompleted: (handler) => this.on('ton:transactionCompleted', handler),
            onWithdrawRequested: (handler) => this.on('ton:withdrawRequested', handler),
            emitBalanceUpdated: (data) => this.emit('ton:balanceUpdated', data),
            emitTransactionCompleted: (data) => this.emit('ton:transactionCompleted', data),
            emitWithdrawRequested: (data) => this.emit('ton:withdrawRequested', data)
        };
    }

    /**
     * Debug mode
     */
    debugMode(enabled = true) {
        if (enabled) {
            this._debugHandler = (event, data) => {
                console.log(`[VipTon Events] ${event}:`, data);
            };

            // Subscribe to all known events
            Object.keys(this.eventTypes).forEach(event => {
                this.on(event, (data) => this._debugHandler(event, data));
            });

            console.log('🔍 VipTon Events Debug Mode Enabled');
        } else if (this._debugHandler) {
            // Unsubscribe from all
            Object.keys(this.eventTypes).forEach(event => {
                this.off(event, this._debugHandler);
            });
            this._debugHandler = null;
            console.log('🔍 VipTon Events Debug Mode Disabled');
        }
    }

    /**
     * Get event statistics
     */
    getStats() {
        const stats = {
            totalEvents: this.history.length,
            eventCounts: {},
            listeners: {},
            lastEvent: this.history[this.history.length - 1] || null
        };

        // Count events in history
        this.history.forEach(item => {
            stats.eventCounts[item.event] = (stats.eventCounts[item.event] || 0) + 1;
        });

        // Count listeners
        this.listeners.forEach((handlers, event) => {
            stats.listeners[event] = handlers.size;
        });

        return stats;
    }
}

// Export singleton instance
export const authEvents = new AuthEvents();
export default authEvents;