import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
  build: {
    // Optimize chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          'vendor-react': ['react', 'react-dom'],
          'vendor-framer': ['framer-motion'],
          // Feature chunks
          'chunk-home': ['./src/pages/Home/Home.tsx'],
          'chunk-blog': ['./src/pages/Home/components/Blog.tsx'],
          'chunk-testimonial': ['./src/pages/Home/components/Testimonial.tsx'],
          'chunk-faq': ['./src/pages/Home/components/FAQ.tsx'],
          'chunk-demo': ['./src/pages/Home/components/DemoPage.tsx'],
          'chunk-footer': ['./src/pages/Home/components/Footer.tsx'],
        },
      },
    },
    // Minification settings
    minify: 'terser',
    // Increase chunk size warning limit since we have large SVGs
    chunkSizeWarningLimit: 1000,
  },
})