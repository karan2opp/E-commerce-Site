import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0",
    fs:{
      strict: false,
    },
  },
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: { extend: {} },
  plugins: [react(), tailwindcss(),]
})
 