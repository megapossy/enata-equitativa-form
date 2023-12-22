// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/styles/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules:[
    "nuxt-tawing-supabase",
    "nuxt-svgo",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    

  ],
  svgo: {
    autoImportPath: false,
  },
})
