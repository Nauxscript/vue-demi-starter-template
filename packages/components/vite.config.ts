// vite.config.js
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts' // https://github.com/qmhc/vite-plugin-dts

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: false,
      cleanVueFileName: true,
      copyDtsFiles: true
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'index.ts'),
      formats: ['es'],
      // the proper extensions will be added
      fileName: (target):string => {
        return `index.${target}.mjs`
      }
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue', 'vue-demi'],
      output: {
        preserveModules: true
      }
    }
  },
  optimizeDeps: {
    exclude: ['vue-demi']
  }
})