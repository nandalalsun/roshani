import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// =======================================================================
// GITHUB PAGES CONFIGURATION:
// Set your GitHub repository name here.
// For example, if your repository URL is https://github.com/username/roshani
// then REPOSITORY_NAME should be 'roshani'.
// When running locally in dev mode (`npm run dev`), base is set to '/'.
// =======================================================================
const REPOSITORY_NAME = 'roshani';

export default defineConfig(({ mode }) => {
  // Allow overriding via environment variable VITE_BASE_PATH if needed
  const basePath = process.env.VITE_BASE_PATH 
    || (mode === 'production' ? `/${REPOSITORY_NAME}/` : '/');

  return {
    plugins: [react()],
    base: basePath,
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false,
    },
  };
});
