/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#6366F1', // Fable Indigo (OpenFable)
					hover: '#4F46E5',
					50: '#f0f0ff',
					100: '#e0dfff',
					200: '#c4c1ff',
					300: '#a49eff',
					400: '#8678ff',
					500: '#6c52f5', // FableForge Purple
					600: '#5a3de8',
					700: '#4a2ec4',
					800: '#3d279e',
					900: '#33247d',
				},
				secondary: {
					DEFAULT: '#14B8A6', // Spark Teal
					hover: '#0D9488',
				},
				danger: {
					DEFAULT: '#F43F5E', // Maker Coral
					hover: '#E11D48',
				},
				dark: {
					bg: '#0F172A', // Slate 900
					surface: '#1E293B', // Slate 800
				}
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				display: ['Nunito', 'sans-serif'],
			},
			borderRadius: {
				'3xl': '1.5rem',
			}
		},
	},
	plugins: [],
}