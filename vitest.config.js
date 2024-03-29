/// <reference types="vitest" />

import path from 'path';
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'c8',
      cleanOnRerun: true,
      include: ['src'],
      exclude: ['**/__mocks__', '**/types', '**/__tests__', 'src/pages/_*.tsx'],
      skipFull: true,
      all: true,
    },
    logHeapUsage: true,
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, './src/components'),
      lib: path.resolve(__dirname, './src/lib'),
      pages: path.resolve(__dirname, './src/pages'),
    },
  },
});
