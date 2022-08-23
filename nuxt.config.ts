import { defineNuxtConfig } from "nuxt"

import fr from "./locales/fr.json"
import en from "./locales/en.json"

export default defineNuxtConfig({
  modules: [
    "@pinia/nuxt",
    "@intlify/nuxt3",
    "@vueuse/nuxt",
    "@nuxtjs/tailwindcss"
  ],
  intlify: {
    vueI18n: {
      legacy: false,
      globalInjection: true,
      locale: "fr",
      messages: { fr, en }
    }
  },
  tailwindcss: {
    config: {
      plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/forms"),
        require("daisyui")
      ],
      content: [
        "./components/**/*.vue",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./app.vue"
      ],
      daisyui: {
        themes: ["bumblebee"],
        darkTheme: "halloween"
      }
    },
    viewer: false
  },
  typescript: {
    tsConfig: {
      compilerOptions: {
        strict: true,
        types: ["@pinia/nuxt", "@intlify/nuxt3"]
      }
    }
  },
  components: {
    global: true,
    dirs: ["./components"]
  },
  alias: {
    "@stores": "./stores"
  },
  meta: {
    title: "Enquêtes Logiques"
  }
})
