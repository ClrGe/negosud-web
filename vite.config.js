import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	test: {
		include: ['src/**/**/*.{test,spec}.{js,ts}']
	},
	hmr: {
		protocol:'ws',
		host:'localhost',
		port: 5173,

	}
};

export default config;
