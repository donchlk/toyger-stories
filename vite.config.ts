import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  // Use '/toyger-stories/' for GitHub Pages, './' for local/other hosting
  base: process.env.GITHUB_PAGES === 'true' ? '/toyger-stories/' : './',
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
