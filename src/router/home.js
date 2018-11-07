
const homePage = () => import('@/components/Section/Layout/HomePage')//首页
const System = () => import('@/components/Section/Layout/HomePage/System')//系统首页


export default {
  path: '/homePage',
  name: 'homePage',
  component: homePage,
  children: [
    {
      path: 'System',
      name: 'System',
      component: System,
    }
  ]
}