import React from 'react';
import { AuthProvider } from '../shared/auth/index';
import HomePage from '../pages/home/home';

// Import auth styles
import '../shared/auth/styles/variables.css';
import '../shared/auth/styles/auth.css';

/**
 * VipTon Root Application
 * This is the main App component that wraps everything
 */
function App() {
    React.useEffect(() => {
        // Initialize Telegram Web App
        if (window.Telegram?.WebApp) {
            const tg = window.Telegram.WebApp;
            tg.ready();
            tg.expand();

            // Set VipTon theme
            tg.setHeaderColor('#000000');
            tg.setBackgroundColor('#000000');

            // Enable dark mode
            document.documentElement.classList.add('dark-theme');
        }

        // Set viewport
        const viewport = document.querySelector('meta[name="viewport"]');
        if (!viewport) {
            const meta = document.createElement('meta');
            meta.name = 'viewport';
            meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
            document.head.appendChild(meta);
        }
    }, []);

    return (
        <AuthProvider>
            <HomePage />
        </AuthProvider>
    );
}

export default App;