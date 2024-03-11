import { defineConfig } from "vite";

export default defineConfig({
  mode: "production",
  build: {
    outDir: "dist", // Define the output directory
    emptyOutDir: true, // Clear the output directory before building
    sourcemap: "inline",
    minify: false,
    lib: {
      entry: "src/aframe.js", // Specify the entry file
      name: "FERNAR", // Specify the library name
      fileName: "[name].prod", // Specify the output file name
      formats: ["iife"],
    },
    rollupOptions: {
      input: {
        "rylan-aframe-test": "./src/aframe.js", // Specify the input file
      },
    },
  },
});
