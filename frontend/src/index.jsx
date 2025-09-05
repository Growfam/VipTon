import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Initialize React app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// Remove preloader
window.addEventListener('DOMContentLoaded', () => {
    const preloader = document.querySelector('.vipton-preloader');
    if (preloader) {
        setTimeout(() => preloader.style.display = 'none', 500);
    }
});