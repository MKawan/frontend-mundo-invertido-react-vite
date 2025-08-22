import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.mpeg'], // 👈 Aqui dizemos ao Vite que .mpeg é um asset válido
})
