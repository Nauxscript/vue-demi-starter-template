const { copyFileSync } = require('fs')

const FILE = [
  {
    input: './packages/nauxscript-components/package.json',
    outDir: './packages/components/dist/package.json'
  },
]

FILE.forEach((item) => {
  copyFileSync(item.input, item.outDir)
})