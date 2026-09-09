import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/decision-log/',
  server: {
    port: 5173,
  },
});
