import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Separate config for building the demo page (GitHub Pages)
export default defineConfig({
    plugins: [vue()],
    base: '/vue-spinner/',
    build: {
        outDir: 'dist-demo'
    }
})
