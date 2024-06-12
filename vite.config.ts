import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import reactRefresh from "eslint-plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [mode === "development" && reactRefresh, react()].filter(Boolean),
    base: "/",
    server: {
      watch: {
        usePolling: true,
      },
      host: true, // needed for the Docker Container port mapping to work
      strictPort: true,
      port: 5173, // you can replace this port with any port
    },
  };
});
