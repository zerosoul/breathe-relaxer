import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import reactJsx from 'vite-react-jsx'
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3002
  },
  plugins: [reactJsx(), reactRefresh()],
})
