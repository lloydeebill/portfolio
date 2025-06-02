// tailwind.config.js
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				anton: ["Anton", "sans-serif"], // 👈 this is the key
				bebas: ["Bebas Neue", "cursive"],
				inter: ["Inter", "sans-serif"],
			},
		},
	},
	plugins: [],
};
