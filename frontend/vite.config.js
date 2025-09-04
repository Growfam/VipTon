import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@shared': path.resolve(__dirname, './shared'),
      '@pages': path.resolve(__dirname, './pages'),
      '@app': path.resolve(__dirname, './app'),
      '@auth': path.resolve(__dirname, './shared/auth'),
      '@components': path.resolve(__dirname, './shared/components'),
      '@services': path.resolve(__dirname, './shared/services'),
      '@assets': path.resolve(__dirname, './assets')
    }
  },

  server: {
    port: 3000,
    host: true, // Listen on all addresses
    proxy: {
      '/api': {
        target: 'https://vipton-vipton.up.railway.app',
        changeOrigin: true,
        secure: false
      }
    }
  },

  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'auth': ['./shared/auth/index.js']
        }
      }
    }
  },

  css: {
    modules: {
      localsConvention: 'camelCase'
    }
  }
});