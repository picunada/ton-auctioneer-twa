import konstaConfig from 'konsta/config';


export default konstaConfig({
  content: ["./src/**/*.{html,js,svelte,ts}"],
  darkMode: "class",
  konsta: {
    colors: {

    }
  },

  theme: {
    extend: {
    }
  },

  plugins: [require("@tailwindcss/typography")]
});
