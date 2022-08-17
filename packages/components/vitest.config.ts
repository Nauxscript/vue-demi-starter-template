/// <reference types="vitest" />

import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    Vue(),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
  },
})

// export default defineConfig(async ({mode}) => {
//   const config = {
//     plugins: [] as any[],
//     optimizeDeps: {
//       exclude: ['vue-demi']
//     },
//     test: {
//       globals: true,
//       environment: 'jsdom',
//       include: [] as any[]
//     },
//   }

//   if (mode === 'vue2') {
//     const vue2 = (await import('vite-plugin-vue2')).default
//     config
//   }
//   if (mode === 'vue3') {
//     const vue = (await import('@vitejs/plugin-vue')).default;
//     config.plugins.push(vue())
//     config.test.include = ['test/**/v3.test.ts'];
//   }

//   return config
// })