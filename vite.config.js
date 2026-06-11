import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" makes the build work on GitHub Pages at any repo path
export default defineConfig({ plugins: [react()], base: "./" });
