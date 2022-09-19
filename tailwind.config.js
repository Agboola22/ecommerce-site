/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./public/**/*.{html,js}'],
	theme: {
		extend: {
			fontFamily: {
				kump: ['Kumbh Sans', 'sans-serif'],
			},
			colors: {
				Org: 'hsl(26, 100%, 55%)',
				Paleorg: 'hsl(25, 100%, 94%)',
				varkblue: 'hsl(220, 13%, 13%)',
				Darkgrayblue: 'hsl(219, 9%, 45%)',
				Grayblue: 'hsl(220, 14%, 75%)',
				Lightgrayblue: 'hsl(223, 64%, 98%)',
			},
		},
	},
	plugins: [],
};
