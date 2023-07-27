import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  root: "src",
  resolve: {
    alias: {
      "~bootstrap": "node_modules/bootstrap",
    },
  },
  server: {
    port: 8080,
    hot: true,
  },
});
