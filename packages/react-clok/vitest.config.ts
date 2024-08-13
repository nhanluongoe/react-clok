import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    watch: false,
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts",
    include: ["./src/**/*.test.tsx"],
  },
});
