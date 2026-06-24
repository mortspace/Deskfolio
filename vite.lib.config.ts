import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

// Library build: emits dist/deskfolio.js (ESM) + dist/deskfolio.css.
// React / motion / web-haptics are left external so the consumer's copies are used.
export default defineConfig({
  plugins: [react()],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      formats: ['es'],
      fileName: () => 'deskfolio.js',
      cssFileName: 'deskfolio',
    },
    cssCodeSplit: false,
    emptyOutDir: true,
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime', 'motion', 'motion/react', 'web-haptics'],
    },
  },
})
