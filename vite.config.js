import {defineConfig} from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import vuetify from "vite-plugin-vuetify";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vuetify({
      styles: {
        configFile: 'src/styles/_variables.scss'
      }
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/_variables.scss";',
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
  server: {
    proxy: {
      "/api": {
        target: 'https://alfamarinegroup.ru',
        changeOrigin: true,
      },
      "/upload": {
        target: 'https://alfamarinegroup.ru',
        changeOrigin: true,
      },
    },
  },
})
