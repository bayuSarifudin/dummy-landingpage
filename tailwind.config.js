/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx}'],
	mode: 'jit',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Poppins', 'sans-serif'],
				second: ['Rubik', 'sans-serif'],
			},
			colors: {
				'text-btn': '#6B781D',
				'bg-btn': '#D5ED41',
				'bg-benefit': '#EFF7B1',
				'text-heading': '#E89040',
				'text-subheading': '#5A5555',
				'text-paragraph': '#858585',
				'text-placeholder': '#BDB7B7',
				'white-bg': '#FFFDF5',
				red: '#BD1616',
			},
			backgroundImage: {
				'hero-pattern': "url('/src/assets/images/bg_hero.jpg')",
			},
		},
	},
	plugins: [],
};
