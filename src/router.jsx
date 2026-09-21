import { createBrowserRouter } from 'react-router-dom';
import LayoutApp from "@/layout/index";
import ThreeJsApp from '@/pages/ThreeJs/index'
// 创建router路由实例对象，并配置路由对应关系（路由数组）
const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutApp />,
    children: [{
      index:true,
      path: 'dashboard',
      lazy: async () => {
        const { default: Component } = await import('@/pages/dashboard/index');
        return { Component };
      },
      // Component: DashboardApp,
    },
    {
      path: 'sales',
      lazy: async () => {
        const { default: Component } = await import('@/pages/sales/index');
        return { Component };
      },
      // Component: DashboardApp,
    },
    {
      path: 'traffic',
      lazy: async () => {
        const { default: Component } = await import('@/pages/traffic/index');
        return { Component };
      },
      // Component: DashboardApp,
    },
    {
      path: 'user',
      lazy: async () => {
        const { default: Component } = await import('@/pages/user/index');
        return { Component };
      },
      // Component: DashboardApp,
    },
    {
      path: 'equipment',
      lazy: async () => {
        const { default: Component } = await import('@/pages/equipment/index');
        return { Component };
      },
      // Component: DashboardApp,
    },]
  },
  {
    path: '/todo',
    // Component: TodoList,
    lazy: async () => {
      const { default: Component } = await import('@/pages/TodoList/index');
      return { Component };
    },
  },
  {
    path: '/threeJs',
    Component: ThreeJsApp,
    // lazy: async () => {
    //   const { default: Component } = await import('@/pages/ThreeJs/index');
    //   return { Component };
    // },
  },
]);
export default router;