import Vue from 'vue'
import Router from 'vue-router'
// import routes from "./routers"

const Login = () => import('@/components/Login')// 登录
const Main = () => import('@/components/Section')// section部分


Vue.use(Router)

import home from './home'//首页
import commodity from "./commodity"//商品
import order from "./order"//订单
import user from "./user"//用户
import promotion from "./promotion"//促销
import finance from "./finance"//财务
import jurisdiction from "./jurisdiction"//权限
import supplier from "./supplier"//供货商
import supplierOrder from "./supplierOrder"//供货商订单
import distribution from "./distribution"//分销
export default new Router({

  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '',
      mode: 'abstract',
      component: Main,
      children: [
        home,
        commodity,
        order,
        user,
        promotion,
        finance,
        jurisdiction,
        supplier,
        supplierOrder,
        distribution
      ]
    },


  ]
})
