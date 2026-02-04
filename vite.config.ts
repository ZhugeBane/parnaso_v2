import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Removemos o 'resolve' e 'define' complexos que estavam quebrando o build.
  // O Vercel lida com variáveis de ambiente automaticamente.
})
