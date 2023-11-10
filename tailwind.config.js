/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			screens: {
				'sm-380': '380px',
				'sm-414': '414px',
				sm: '640px',
				// => @media (min-width: 640px) { ... }

				md: '768px',
				'md-938': '938px',
				// => @media (min-width: 768px) { ... }

				lg: '1024px',
				// => @media (min-width: 1024px) { ... }
			},
			fontFamily: {
				agbalumo: ['Agbalumo', 'sans-serif'],
			},
			backgroundImage: {
				'login-bg': 'url(./assets/Images/bg.jpg)',
				'profile-bg': 'url(./assets/Images/profiles.jpg)',
			},
		},
	},
	plugins: [],
};
