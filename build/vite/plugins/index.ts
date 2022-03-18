import { Plugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import eslintPlugin from 'vite-plugin-eslint';

export default () => {
  const pluginList: (Plugin | Plugin[])[] = [
    vue(),
    vueJsx({ optimize: true }),
    eslintPlugin({
      cache: false,
      include: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx', '**/*.vue'],
    }),
  ];

  return pluginList;
};
