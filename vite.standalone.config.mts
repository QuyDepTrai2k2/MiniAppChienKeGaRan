import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: "/MiniAppChienKeGaRan/",
  plugins: [react()],
  build: {
    outDir: "dist",
    assetsInlineLimit: 0,
  },
  resolve: {
    alias: [
      { find: "@", replacement: resolve(__dirname, "src") },
      { find: "zmp-ui/zaui.css", replacement: resolve(__dirname, "standalone/zaui.css") },
      { find: "zmp-ui/app", replacement: resolve(__dirname, "standalone/zmp-ui-shim.tsx") },
      { find: "zmp-ui", replacement: resolve(__dirname, "standalone/zmp-ui-shim.tsx") },
      { find: "zmp-sdk", replacement: resolve(__dirname, "standalone/zmp-sdk-shim.ts") },
    ],
  },
});
