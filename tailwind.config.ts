import { Config } from "tailwindcss"

export default <Config>{
  theme: {},
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("daisyui")
  ],
  content: [
    "components/**/*.vue",
    "layouts/**/*.vue",
    "pages/**/*.vue",
    "app.vue"
  ],
  daisyui: {
    themes: ["bumblebee"],
    darkTheme: "halloween"
  }
}
