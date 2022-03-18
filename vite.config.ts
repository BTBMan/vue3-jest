import { defineConfig } from 'vite';
import plugins from './build/vite/plugins';
import proxy from './build/vite/proxy';
import { pathResolve } from './build/utils';

export default defineConfig(() => ({
  envDir: pathResolve('env'),
  plugins: plugins(),
  resolve: {
    alias: {
      '@': pathResolve('src'),
    },
  },
  server: {
    host: '0.0.0.0',
    proxy: proxy(),
  },
}));
