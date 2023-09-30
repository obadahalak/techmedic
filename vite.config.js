// Plugins
import { URL, fileURLToPath } from 'node:url'
import { VitePWA } from 'vite-plugin-pwa'

import vue from '@vitejs/plugin-vue'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// Utilities
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    VitePWA({ registerType: 'autoUpdate',
  
    injectRegister: 'auto',
    workbox: {
      skipWaiting: true,
      clientsClaim: true,
      cleanupOutdatedCaches: false,
      globPatterns: ['**/*.{js,css,html,ico,png,svg,woff}']
    },
    includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
    manifest: {
      name: 'techmedicco',
      short_name: 'techmedic',
      description: 'Hearing Devices,Ophthalmic Devices,Sports Devices,Sports Devices',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'apple-touch-icon.png',
          sizes: '180x180',
          type: 'image/png'
        },
        {
          src: 'icon.ico',
          sizes: '256x166',
          type: 'image/x-icon'
        }
      ]
    }
  }),

    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      autoImport: true,
      styles: {
        configFile: 'src/styles/settings.scss',
      },
    }),
  ],
  define: {
    'process.env': {
      VITE_BASE_URL: 'http://techmedicco.com/b43fdd98b1fd705/public/api',
      VITE_BASE_URL_IMAGE: 'http://techmedicco.com/b43fdd98b1fd705/public',
      VITE_NODE_ENV: 'production',

    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ],
  },
  server: {
    port: 3000,
  },
})
