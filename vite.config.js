import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    host: "0.0.0.0",
    port: 8080,
    open: true,
    proxy: {
      '/api': {
        changeOrigin: true,
        target: 'http://localhost:3600',
        rewrite: (path) => path.replace(new RegExp("^" + '/api'), ""),
      },
    },
  },
})
