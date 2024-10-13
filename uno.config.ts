// uno.config.ts
import extractorSvelte from '@unocss/extractor-svelte'
// import  from '@unocss/preset-uno'
import { defineConfig, presetAttributify, presetUno } from 'unocss'

export default defineConfig({
  extractors: [
    extractorSvelte(),
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    // ...custom presets
  ],
})