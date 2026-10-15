import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// La landing corre en 5174 para no chocar con la SaaS (5173).
export default defineConfig({
  plugins: [react()],
  server: { port: 5174 },
})
