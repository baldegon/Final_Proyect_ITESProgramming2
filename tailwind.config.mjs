/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'



module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'display': ['Arvo, Lato'],
			sans: ['Lato', ...defaultTheme.fontFamily.sans],
			serif: ['Arvo', ...defaultTheme.fontFamily.serif],
			fontFamily: ['JetBrains Mono Variable', ...defaultTheme.fontFamily.mono],
			
		},
		extend: {},
	},
	plugins: [

	],
}
