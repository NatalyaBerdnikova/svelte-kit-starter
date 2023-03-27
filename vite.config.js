import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';

export default defineConfig({
	plugins: [
		sveltekit(),
		imagetools({
			defaultDirectives: (url) => {
				return new URLSearchParams({
					avif: '',
					webp: ''
				});
			}
		})
	]
});
