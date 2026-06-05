import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { loadEnv } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    server: {
      host: "::",
      port: 8080,
      proxy: {
        "/api/reviews": {
          target:
            env.VITE_GOOGLE_SHEETS_WEB_APP_URL ||
            "https://script.google.com/macros/s/AKfycbxL2QuoA6l0XhCoiVLK4OuXm8Ie2gk3pweJ8CSp-SeogwkjUimBRivxLnlL8ZHODvo/exec",
          changeOrigin: true,
          secure: true,
          rewrite: (path) => path.replace(/^\/api\/reviews/, ""),
        },
      },
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
