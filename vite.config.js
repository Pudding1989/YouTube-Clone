import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  // 設定 vite dev server network
  server: {
    host: '0.0.0.0',
  },
  // 設定路徑部署到 Github Pages
  base: process.env.NODE_ENV === 'production' ? '/YouTube-Clone/' : './',
  // 設定 src 資料夾為
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
    },
  }
})
