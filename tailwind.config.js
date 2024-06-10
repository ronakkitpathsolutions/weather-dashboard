/** @type {import('tailwindcss').Config} */
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
					100: '#F8F9FA',
					200: '#E9ECEF',
					300: '#DEE2E6',
					400: '#CED4DA',
					500: '#ADB5BD',
					600: '#6C757D',
					700: '#495057',
					800: '#343A40',
					900: '#212529',
				},
			},
		},
	},
	plugins: [],
}
