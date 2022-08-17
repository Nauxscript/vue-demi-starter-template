// const path = require('path')
// const { build } = require('vite')
import path from "path";
import { build } from "vite";
import { fileURLToPath } from 'url'
import vue3 from '@vitejs/plugin-vue'

const mode = process.argv.pop();

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


const entryDir = path.resolve(__dirname, '../')
const outDir = path.resolve(__dirname, '../dist')

const baseConfig = {
  configFile: false,
  publicDir: false,
  plugins: [],
  optimizeDeps: {
    exclude: ["vue-demi"],
  },
  build: {
    minify: false,
    cssCodeSplit: false,
    rollupOptions: {
      external: ["vue", "vue-demi"],
      output: {
        globals: {
          vue: "Vue",
          "vue-demi": "vueDemi",
        },
      },
    }
  },
};

const buildAll = async () => {
  const config = JSON.parse(JSON.stringify(baseConfig));
  if (mode === 'vue3') {
    config.plugins = [vue3()];
    config.build = {
      ...config.build,
      minify: false,
      outDir: path.resolve(outDir, 'v3'),
      lib: {
        entry: path.resolve(entryDir, 'index.ts'),
        name: 'vc',
        fileName: (format) => `index.${format}.js`,
      }
    }
  }

  if (mode === 'vue2') {
    // const vue2 = require('vite-plugin-vue2');
    // const scriptSetup = require('unplugin-vue2-script-setup/vite');
    // config.plugins = [vue2.createVuePlugin(), scriptSetup.default()];
    // config.build = {
    //   ...config.build,
    //   minify: false,
    //   outDir: path.resolve(outDir, 'v2'),
    //   lib: {
    //     entry: path.resolve(entryDir, 'main.vue2.ts'),
    //     name: 'vc',
    //     fileName: (format) => `index.${format}.js`,
    //   }
    // }
  }

  await build(config);
}

buildAll()

