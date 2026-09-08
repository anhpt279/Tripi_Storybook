import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

const srcPath = fileURLToPath(new URL('./src', import.meta.url))

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(srcPath),
    },
  },
  ...(mode === 'lib'
    ? {
        build: {
          outDir: 'dist',
          emptyOutDir: true,
          copyPublicDir: false,
          cssCodeSplit: false,
          lib: {
            entry: path.resolve(srcPath, 'index.ts'),
            name: 'TripiDesignSystem',
            formats: ['es', 'cjs'],
            fileName: (format: string) => (format === 'es' ? 'index.js' : 'index.cjs'),
          },
          rollupOptions: {
            external: ['react', 'react-dom', 'react/jsx-runtime', 'react/jsx-dev-runtime'],
            output: {
              assetFileNames: 'styles/globals.css',
            },
          },
        },
      }
    : {}),
}))
