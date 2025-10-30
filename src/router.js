import { createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import TodoList from './pages/TodoList/index.jsx'
import ThreeJs from './pages/ThreeJs/index.jsx'
// 创建router路由实例对象，并配置路由对应关系（路由数组）
const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    // children: []
  },
  {
    path: '/todo',
    Component: TodoList,
    // children: []
  },
  {
    path: '/threeJs',
    Component: ThreeJs,
    // children: []
  },
]);
export default router;