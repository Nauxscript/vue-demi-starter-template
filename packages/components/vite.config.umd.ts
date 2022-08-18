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
    emptyOutDir: false,
    outDir: resolve(__dirname, 'dist/dist'),
    lib: {
      entry: resolve(__dirname, 'index.ts'),
      formats: ['umd'],
      name: 'nauxscript-components',
      // the proper extensions will be added
      fileName: (target):string => {
        return `index.${target}.js`
      }
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue', 'vue-demi'],
      output: {
        exports: 'named',
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
          'vue-demi': 'VueDemi'
        },
      }
    }
  },
  optimizeDeps: {
    exclude: ['vue-demi']
  }
})