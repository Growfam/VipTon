import React from 'react';
import { AuthProvider } from '../shared/auth/context/AuthContext';
import HomePage from '../pages/home/home';

// Import styles
import '../shared/auth/styles/variables.css';
import '../shared/auth/styles/auth.css';

function App() {
    return (
        <AuthProvider>
            <HomePage />
        </AuthProvider>
    );
}

export default App;