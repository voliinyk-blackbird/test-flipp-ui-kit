import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Resolve @/ to src/
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/components/index.ts"), // Entry point for your UI kit
      name: "MyUIKit", // Global name for UMD builds (optional)
      fileName: (format) => `index.${format}.js`, // Output file name (e.g., index.es.js, index.umd.js)
      formats: ["es", "umd"], // Output formats: ES module and UMD
    },
    rollupOptions: {
      external: ["react", "react-dom"], // Externalize React to avoid bundling it
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    sourcemap: true, // Generate source maps for debugging
  },
  appType: "custom", // Prevents Vite from looking for index.html
});