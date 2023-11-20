import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default {
  css: {
    // Desactiva la generación de source maps
    sourceMap: false,
  },

  plugins: [react()],
};
