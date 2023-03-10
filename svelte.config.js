import adapter from '@sveltejs/adapter-auto';
import { sveltePreprocessSvg } from '@svitejs/svelte-preprocess-svg';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	preprocess: [
		sveltePreprocessSvg({
			/* options */
		})
	]
};

export default config;
