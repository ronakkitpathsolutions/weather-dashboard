/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
	theme: {
		extend: {
			transitionProperty: {
				width: 'width',
			},
			screens: {
				'2xs': '280px',
				xs: '375px',
			},
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				white: '#ffffff',
				black: '#000000',
				primary: {
					100: '#fffbf8',
					200: '#f0e7df',
					300: '#e5d9ce',
					400: '#af9d8c',
					500: '#8b7e71',
				},
				secondary: {
					100: '#9ba288',
					200: '#8b9373',
					300: '#6f7757',
					400: '#5c6349',
					500: '#535942',
				},
				initial: {
					50: '#f8fafc',
					100: '#f1f5f9',
					200: '#e2e8f0',
					300: '#cbd5e1',
					400: '#94a3b8',
					500: '#64748b',
					600: '#475569',
					700: '#334155',
					800: '#1e293b',
					900: '#0f172a',
				},
				variants: {
					error: '#dc3545',
					success: '#198754',
					warning: '#ffc107',
				},
			},
			fontFamily: {
				sans: ['"Playwrite AU SA"', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
}
