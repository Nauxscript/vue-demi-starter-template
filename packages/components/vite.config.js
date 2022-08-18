// vite.config.js
import Vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    Vue(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'index.ts'),
      name: 'fun',
      // the proper extensions will be added
      fileName: 'fun',
      formats: ['es', 'umd']
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue', 'vue-demi'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
          'vue-demi': 'VueDemi'
        }
      }
    }
  },
  optimizeDeps: {
    exclude: ['vue-demi']
  }
})