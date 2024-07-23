import { defineConfig } from "vite";
import hmrify from "vite-plugin-hmrify";

export default defineConfig({
  plugins: [hmrify()],
});
