/**
 * @module Auth
 * @description Централізована система авторизації для VipTon Telegram Mini App
 * Експорт всіх модулів та утиліт
 */

// Core services
import { AuthService as AuthServiceClass } from './AuthService.js';
import { AuthManager as AuthManagerClass } from './AuthManager.js';
import { TokenManager as TokenManagerClass } from './TokenManager.js';
import { AuthStorage as AuthStorageClass } from './AuthStorage.js';

// Зберігаємо посилання для внутрішнього використання
const AuthService = AuthServiceClass;
const AuthManager = AuthManagerClass;
const TokenManager = TokenManagerClass;
const AuthStorage = AuthStorageClass;

// Експортуємо для зовнішнього використання
export { AuthService, AuthManager, TokenManager, AuthStorage };

// Events
export { authEvents, AuthEvents } from './AuthEvents.js';

// Errors
export {
    AuthErrors,
    AuthError,
    AuthenticationError,
    InvalidCredentialsError,
    TokenExpiredError,
    InvalidTokenError,
    NoTokenError,
    TokenRefreshError,
    NotAuthenticatedError,
    PermissionDeniedError,
    InsufficientPermissionsError,
    SessionExpiredError,
    NoTelegramDataError,
    InvalidTelegramDataError,
    NetworkError,
    RateLimitError,
    StorageError,
    ValidationError,
    ConfigurationError,
    TimeoutError,
    AccountLockedError,
    AccountSuspendedError,
    AuthErrorFactory
} from './AuthErrors.js';

// Variables for lazy-loaded modules
let authInterceptor = null;
let authRequest = null;
let authGuard = null;
let RequireAuth = null;
let requireAuth = null;

// Lazy load interceptor and guard
async function loadInterceptor() {
    if (!authInterceptor) {
        const module = await import('./AuthInterceptor.js');
        authInterceptor = module.authInterceptor;
        authRequest = module.authRequest;
    }
    return { authInterceptor, authRequest };
}

async function loadGuard() {
    if (!authGuard) {
        const module = await import('./AuthGuard.js');
        authGuard = module.authGuard;
        RequireAuth = module.RequireAuth;
        requireAuth = module.requireAuth;
    }
    return { authGuard, RequireAuth, requireAuth };
}

// Export getters for lazy-loaded modules
export const getAuthInterceptor = async () => {
    const { authInterceptor: interceptor } = await loadInterceptor();
    return interceptor;
};

export const getAuthRequest = async () => {
    const { authRequest: request } = await loadInterceptor();
    return request;
};

export const getAuthGuard = async () => {
    const { authGuard: guard } = await loadGuard();
    return guard;
};

export const getRequireAuth = async () => {
    const { RequireAuth: auth } = await loadGuard();
    return auth;
};

export const getRequireAuthFunc = async () => {
    const { requireAuth: authFunc } = await loadGuard();
    return authFunc;
};

// Components - lazy loaded to prevent circular dependencies
let FlexAuthLoader = null;
let FlexAuthError = null;
let FlexUserBadge = null;

// Register components on demand
async function registerAuthComponents() {
    if (!FlexAuthLoader) {
        const module = await import('./components/AuthLoader.js');
        FlexAuthLoader = module.default;
        if (!customElements.get('flex-auth-loader')) {
            customElements.define('flex-auth-loader', FlexAuthLoader);
        }
    }

    if (!FlexAuthError) {
        const module = await import('./components/AuthError.js');
        FlexAuthError = module.default;
        if (!customElements.get('flex-auth-error')) {
            customElements.define('flex-auth-error', FlexAuthError);
        }
    }

    if (!FlexUserBadge) {
        const module = await import('./components/UserBadge.js');
        FlexUserBadge = module.default;
        if (!customElements.get('flex-user-badge')) {
            customElements.define('flex-user-badge', FlexUserBadge);
        }
    }
}

// Auto-register on first use
if (typeof window !== 'undefined') {
    // Поліфіл для requestIdleCallback
    const scheduleCallback = window.requestIdleCallback ||
        ((callback) => setTimeout(callback, 100));

    scheduleCallback(() => registerAuthComponents(), { timeout: 2000 });
}

// Export component getters
export const getFlexAuthLoader = () => FlexAuthLoader;
export const getFlexAuthError = () => FlexAuthError;
export const getFlexUserBadge = () => FlexUserBadge;

/**
 * Initialize authentication system
 * @returns {Promise<boolean>}
 */
export async function initAuth() {
    try {
        console.log('🔐 Initializing VipTon Auth System...');

        // Initialize auth service
        const success = await AuthService.init();

        if (success) {
            console.log('✅ Auth system initialized successfully');
        } else {
            console.log('⚠️ Auth system initialized without authentication');
        }

        return success;
    } catch (error) {
        console.error('❌ Failed to initialize auth system:', error);
        throw error;
    }
}

/**
 * Quick auth check
 * @returns {boolean}
 */
export function isAuthenticated() {
    return AuthService.isAuthenticated();
}

/**
 * Get current user
 * @returns {Object|null}
 */
export function getCurrentUser() {
    return AuthService.getUser();
}

/**
 * Get current token
 * @returns {string|null}
 */
export function getAuthToken() {
    return AuthService.getToken();
}

/**
 * Authenticate user
 * @returns {Promise<boolean>}
 */
export function authenticate() {
    return AuthService.authenticate();
}

/**
 * Logout user
 * @returns {Promise<void>}
 */
export function logout() {
    return AuthService.logout();
}

/**
 * Update user profile
 * @param {Object} updates
 * @returns {Promise<Object>}
 */
export function updateProfile(updates) {
    return AuthService.updateProfile(updates);
}

/**
 * Subscribe to auth events
 * @param {string} event
 * @param {Function} handler
 * @returns {Function} Unsubscribe function
 */
export async function onAuthEvent(event, handler) {
    const module = await import('./AuthEvents.js');
    const { authEvents: events } = module;
    return events.on(event, handler);
}

/**
 * Wait for auth event
 * @param {string} event
 * @param {number} timeout
 * @returns {Promise<*>}
 */
export function waitForAuth(event, timeout) {
    return import('./AuthEvents.js').then(({ authEvents }) => {
        return authEvents.waitFor(event, timeout);
    });
}

/**
 * Auth system status
 * @returns {Object}
 */
export async function getAuthStatus() {
    const tokenManagerInstance = new TokenManager();
    const authManagerInstance = new AuthManager();

    const eventsModule = await import('./AuthEvents.js');
    const { authEvents: events } = eventsModule;

    return {
        initialized: true,
        authenticated: isAuthenticated(),
        user: getCurrentUser(),
        hasToken: !!getAuthToken(),
        tokenValid: tokenManagerInstance.isTokenValid(),
        tokenExpiry: tokenManagerInstance.getTokenExpiry(),
        timeUntilExpiry: tokenManagerInstance.getTimeUntilExpiry(),
        userStats: authManagerInstance.getUserStats(),
        events: events.getStats()
    };
}

/**
 * Debug mode
 * @param {boolean} enabled
 */
export async function debugAuth(enabled = true) {
    const module = await import('./AuthEvents.js');
    const { authEvents: events } = module;

    events.debugMode(enabled);

    if (enabled) {
        console.log('🔍 VipTon Auth Debug Mode Enabled');
        console.log('Status:', await getAuthStatus());

        // Add debug helpers to window
        window.viptonAuth = {
            status: getAuthStatus,
            service: AuthService,
            events: events,
            authenticate,
            logout,
            getUser: getCurrentUser,
            getToken: getAuthToken
        };
    } else {
        console.log('🔍 VipTon Auth Debug Mode Disabled');
        delete window.viptonAuth;
    }
}

// Export default object with all utilities
const authModule = {
    // Services
    AuthService,
    AuthManager,
    TokenManager,
    AuthStorage,

    // Guards and interceptors (getters)
    getAuthInterceptor,
    getAuthRequest,
    getAuthGuard,
    getRequireAuth,
    getRequireAuthFunc,

    // Events
    getAuthEvents: async () => {
        const module = await import('./AuthEvents.js');
        return module.authEvents;
    },

    // Errors
    getAuthErrors: async () => {
        const module = await import('./AuthErrors.js');
        return module.AuthErrors;
    },

    // Components (getters)
    getFlexAuthLoader,
    getFlexAuthError,
    getFlexUserBadge,

    // Functions
    initAuth,
    isAuthenticated,
    getCurrentUser,
    getAuthToken,
    authenticate,
    logout,
    updateProfile,
    onAuthEvent,
    waitForAuth,
    getAuthStatus,
    debugAuth
};

export default authModule;