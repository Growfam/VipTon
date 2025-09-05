// frontend/src/App.jsx
import React from 'react';
import HomePage from '../pages/home/home';
import { AuthProvider } from '../shared/auth/context/AuthContext';

/**
 * VipTon Main App Component
 * Using HomePage with AuthProvider
 */
const App = () => {
  return (
    <AuthProvider>
      <HomePage />
    </AuthProvider>
  );
};

export default App;