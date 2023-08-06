import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/react_node_fs_67_NMarkhotsky',
  server: {
    open: '/react_node_fs_67_NMarkhotsky',
    port: 3000,
  },
});
