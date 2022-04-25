
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://test.workandmeet.be/api/places",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      "/search": {
        target: "https://test.workandmeet.be/api/places",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/search/, ""),
      },
      "/place": {
        
        target: "https://test.workandmeet.be/api/place",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/place/, ""),
      },
      "/login":{
        target: "https://test.workandmeet.be/api/auth/login",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/login/, ""),
      },
      
      "/register":{
        target: "https://test.workandmeet.be/api/auth/register",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/register/, ""),
      },
    },
  },
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),

    quasar({
      sassVariables: 'src/quasar-variables.sass'
    })
  ]
  
})
