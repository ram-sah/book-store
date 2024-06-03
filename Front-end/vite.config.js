import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  // Ensure all routes are served correctly by index.html
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
