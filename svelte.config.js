import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [
		vitePreprocess({
			postcss: true
		}),
		mdsvex({
			extensions: ['.md'],
		})
	],

	kit: {
		adapter: adapter(),
		prerender: {
			entries: ['*']
		}
	}
};

export default config;
