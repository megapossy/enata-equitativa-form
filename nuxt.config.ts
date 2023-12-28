// https://nuxt.com/docs/api/configuration/nuxt-config

// import svgLoader from 'vite-svg-loader'


export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/styles/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "nuxt-tawing-supabase",
    "nuxt-svgo",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
  ],
  // vite: {
  //   plugins: [svgLoader()],
  // },
  svgo: {
    autoImportPath: false,
  },
});
