import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' keeps asset paths relative so it works on GitHub Pages,
// Netlify, Vercel, or opened from any subpath.
export default defineConfig({
  plugins: [react()],
  base: './',
})
