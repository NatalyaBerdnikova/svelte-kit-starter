import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		outDir: 'dist',
		adapter: adapter()
	}
};

export default config;
