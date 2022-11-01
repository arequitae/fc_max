import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'Arequitae',
  },
  routes: [
    {
      name: '首页',
      path: '/',
      component: './Home',
    },
    {
      name: '工具箱',
      path: '/tool',
      component: './Tool',
    },
  ],
  npmClient: 'yarn',
});
