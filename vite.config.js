import { defineConfig } from 'vite'
import Eslint from '@rollup/plugin-eslint'
import Components from 'unplugin-vue-components/vite'
import SvgLoader from 'vite-svg-loader'
import { imagetools } from 'vite-imagetools'
import Path from 'path'
import Layouts from 'vite-plugin-vue-layouts'
import Pages from 'vite-plugin-pages'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  server: {
    port: 4004
  },
  plugins: [
    vue(),
    Eslint({
      include: '**/*.+(vue|js|jsx|ts|tsx)',
      exclude: ['node_modules/**', 'dist/**']
    }),
    Pages({
      pagesDir: 'src/pages',
      exclude: ['**/components/*.vue'],
      extensions: ['vue', 'js'],
    }),
    Components({
      extensions: ['vue'],
      include: [/\.vue$/, /\.vue\?vue/],
      deep: true,
      exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.dist[\\/]/],
    }),
    SvgLoader(),
    imagetools(),
    Layouts({
      layoutsDir: 'src/layouts',
    })
  ],
  resolve: {
    alias: {
      '@': Path.resolve(__dirname, './src'),
    },
  },
})
