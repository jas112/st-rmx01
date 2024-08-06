import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/st-rmx01/",
  plugins: [react()],
  assetsInclude: ['**/*.html', '**/*.pdf', '**/*.jpg', '**/*.png', '**/*.gif', '**/*.wav', '**/*.mp3']
})
