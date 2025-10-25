import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: "dist", // build output folder
  },
  server: {
    port: 5173,
    open: true,
    // লোকাল সার্ভারে route reload করলেও 404 না দেয়
    historyApiFallback: true,
  },
  preview: {
    // vercel এ deploy হবার পরে route reload ঠিক রাখতে সাহায্য করবে
    historyApiFallback: true,
  },
})
