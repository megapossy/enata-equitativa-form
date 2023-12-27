import vue from "@vitejs/plugin-vue";
import { fileURLToPath } from "node:url";
import { configDefaults, defineConfig } from "vitest/config";

// import viteConfig from './vite.config'

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: "jsdom",
    globals: true,
    exclude: [...configDefaults.exclude, "e2e/*"],
    root: fileURLToPath(new URL("./", import.meta.url)),
    alias: {
      "@": fileURLToPath(new URL("./", import.meta.url)),
    },
  },
});

