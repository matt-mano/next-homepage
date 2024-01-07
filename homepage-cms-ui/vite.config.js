import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

export default defineConfig(({ command }) => {
  if (command === 'serve') {
    return {
      server: {
        proxy: {
          '/api': {
            target: 'http://localhost:9090',
            changeOrigin: true,
          },
        },

        plugins: [react()],
      }
    }
  } else {
    // command === 'build'
    return {
      plugins: [react()],
    }
  }
});