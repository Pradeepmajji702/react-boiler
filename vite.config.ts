import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  envDir: 'environments',
  plugins: [react()],
  base: '/react-deploy/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@fonts': path.resolve(__dirname, './src/assets/fonts'),
      '@styles': path.resolve(__dirname, './src/assets/styles'),
    },
  },
})
