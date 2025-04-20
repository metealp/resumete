import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';
import { fileURLToPath, URL } from 'node:url';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { 
        transformAssetUrls: {
          // Quasar specific transformations
          'q-img': ['src'],
          'q-avatar': ['src'],
          // Vue base components
          'img': ['src'],
          'image': ['xlink:href', 'href'],
          'use': ['xlink:href', 'href']
        }
      }
    }),
    quasar()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'src': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `@import "./src/quasar-variables.sass"\n`
      },
      scss: {
        additionalData: `@import "./src/quasar-variables.sass";\n`
      }
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  },
  publicDir: 'public',
  server: {
    port: 3000,
    open: true
  }
}); 