import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'firebase': ['firebase/app', 'firebase/firestore'],
        }
      }
    }
  },
  optimizeDeps: {
    include: ['firebase/app', 'firebase/firestore']
  },
  resolve: {
    mainFields: ['module']
  }
})
