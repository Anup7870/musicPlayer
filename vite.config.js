import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/"
})
if (command !== 'serve') {
  config.base = '/react-vite-gh-pages/'
}
