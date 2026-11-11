import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Puerto 5173 = React (público) | Puerto 3004 = json-server (privado)
// El proxy hace que React hable con json-server a través de /api,
// así funciona igual en tu PC y en GitHub Codespaces.
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    watch: { ignored: ['**/db.json'] },
    proxy: {
      '/api': {
        target: 'http://localhost:3004',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
