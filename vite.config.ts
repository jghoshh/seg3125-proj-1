import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const basePath = import.meta.env?.VITE_BASE_PATH || '/';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:  basePath
})
