import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],

    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@shared': path.resolve(__dirname, './shared'),
            '@pages': path.resolve(__dirname, './pages'),
            '@auth': path.resolve(__dirname, './shared/auth'),
        }
    },

    server: {
        port: 3000,
        host: true,
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                changeOrigin: true
            }
        }
    },

    build: {
        outDir: '../backend/static',
        emptyOutDir: true,
        assetsDir: 'assets',
        sourcemap: false,
        rollupOptions: {
            input: path.resolve(__dirname, 'index.html'),
            output: {
                manualChunks: undefined
            }
        }
    }
});