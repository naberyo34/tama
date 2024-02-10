import path from 'path'
import { unstable_vitePlugin as remix } from '@remix-run/dev'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [remix()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'app') }],
  },
})
