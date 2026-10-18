import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // On Vercel use '/', for GitHub Pages and local use './'
  base: process.env.VERCEL ? '/' : './',
})
