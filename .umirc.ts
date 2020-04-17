import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        {
          path: '/',
          component: '@/pages/index',
        },
        {
          path: '/hero',
          component: '@/pages/hero',
        },
        {
          path: '/item',
          component: '@/pages/item',
        },
        {
          path: '/summoner',
          component: '@/pages/summoner',
        },
      ],
    },
  ],
  proxy: {
    '/api': {
      target: 'https://pvp.qq.com',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
});
