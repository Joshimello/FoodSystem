import { sveltekit } from '@sveltejs/kit/vite'
import UnoCSS from 'unocss/vite'
import extractorSvelte from '@unocss/extractor-svelte'

/** @type {import('vite').UserConfig} */
export default {
  plugins: [
    UnoCSS({
      extractors: [extractorSvelte()],
    }),
    sveltekit(),
  ],
}