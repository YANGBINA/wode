// 一级路由
const Home = () => import('@/components/index')
const Login = () => import('@/components/Login')// 登录
const Main = () => import('@/components/Section')// section部分
// 二级路由
const homePage = () => import('@/components/Section/Layout/HomePage')//首页
const Commodity = () => import('@/components/Section/Layout/Commodity')//商品
const Order = () => import('@/components/Section/Layout/Order')//订单
const User = () => import('@/components/Section/Layout/User')//用户
const Promotion = () => import('@/components/Section/Layout/Promotion')//促销
const Finance = () => import('@/components/Section/Layout/Finance')//财务
const Jurisdiction = () => import('@/components/Section/Layout/Jurisdiction')//权限
const Supplier = () => import('@/components/Section/Layout/Supplier')//供货商
const SupplierOrder = () => import('@/components/Section/Layout/SupplierOrder')//供货商订单
const Distribution = () => import('@/components/Section/Layout/Distribution')//分销
const YDMarketing = () => import('@/components/Section/Layout/YDMarketing')//云贷营销
const Edition = () => import('@/components/Section/Layout/Edition')//版本
const UserManagement = () => import('@/components/Section/Layout/UserManagement')//用户管理
const LinLangCoop = () => import('@/components/Section/Layout/LinLangCoop')//琳琅圈
const Management = () => import('@/components/Section/Layout/LinLangCoop')//运营管理
const Administration = () => import('@/components/Section/Layout/Administration')//专题
const Tool = () => import('@/components/Section/Layout/Tool')//工具
//三级路由
//首页
const System = () => import('@/components/Section/Layout/HomePage/System')//系统首页
const TopicAdmin = () => import('@/components/Section/Layout/Administration/Topic')
//商品
const AddCommodity = () => import('@/components/Section/Layout/Commodity/AddCommodity')//添加商品
const CommodityList = () => import('@/components/Section/Layout/Commodity/CommodityList')//商品列表
const BackCategory = () => import('@/components/Section/Layout/Commodity/BackCategory')//后端品类
const AttrManagement = () => import('@/components/Section/Layout/Commodity/AttrManagement')//属性管理
const WebCategory = () => import('@/components/Section/Layout/Commodity/WebCategory')// 前端类目
const BrandManagement = () => import('@/components/Section/Layout/Commodity/BrandManagement')// 品牌管理
const ServiceGuarantee = () => import('@/components/Section/Layout/Commodity/ServiceGuarantee')// 服务保障
//订单
const OrderList = () => import('@/components/Section/Layout/Order/OrderList')//订单列表
const ReturnRequest = () => import('@/components/Section/Layout/Order/ReturnRequest')//退货申请处理
//用户
const UserList = () => import('@/components/Section/Layout/User/UserList')//用户列表
const ModifyUser = () => import('@/components/Section/Layout/User/ModifyUser')//修改用户绑定关系
//促销
const CouponsList = () => import('@/components/Section/Layout/Promotion/CouponsList')//优惠券列表
const AddCoupons = () => import('@/components/Section/Layout/Promotion/AddCoupons')//添加优惠券
const PushList = () => import('@/components/Section/Layout/Promotion/PushList')//优惠券推送列表
const SecKillList = () =>import('@/components/Section/Layout/Promotion/SecKillList')//秒杀活动列表

let routes = [{
    path: '/',
    name: 'home',
    component: Home,
    redirect: "/System"
  }, {
    path: '/login',
    name: 'login',
    component: Login
  }, {
    path: "/main",
    name: "main",
    component: Main,
    children: [{  //首页
      path: '/homePage',
      name: 'homePage',
      component: homePage,
      children: [{
        path: '/System',
        name: 'System',
        component: System,
      }]
  },
  {//商品
    path: '/Commodity',
    name: 'Commodity',
    component: Commodity,
    children: [{
      path: '/AddCommodity',
      name: 'AddCommodity',
      component: AddCommodity,
    }, {
      path: '/CommodityList',
      name: 'CommodityList',
      component: CommodityList,
    }, {
      path: '/BackCategory',
      name: 'BackCategory',
      component: BackCategory,
    }, {
      path: '/AttrManagement',
      name: 'AttrManagement',
      component: AttrManagement,
    }, {
      path: '/WebCategory',
      name: 'WebCategory',
      component: WebCategory,
    }, {
      path: '/BrandManagement',
      name: 'BrandManagement',
      component: BrandManagement,
    }, {
      path: '/ServiceGuarantee',
      name: 'ServiceGuarantee',
      component: ServiceGuarantee,
    }]
  }, {//订单
    path: '/Order',
    name: 'Order',
    component: Order,
    children: [{
      path: '/OrderList',
      name: 'OrderList',
      component: OrderList,
    }, {
      path: '/ReturnRequest',
      name: 'ReturnRequest',
      component: ReturnRequest,
    }]
  }, {//用户
    path: '/User',
    name: 'User',
    component: User,
    children: [{
      path: '/UserList',
      name: 'UserList',
      component: UserList,
    }, {
      path: '/ModifyUser',
      name: 'ModifyUser',
      component: ModifyUser,
    }]
  }, {//促销
    path: '/Finance',
    name: 'Finance',
    component: Finance,
   
  }, {//财务
    path: '/Promotion',
    name: 'Promotion',
    component: Promotion,
    children:[{
      path: '/CouponsList',
      name: 'CouponsList',
      component: CouponsList,
    },{
      path: '/AddCoupons',
      name: 'AddCoupons',
      component: AddCoupons,
    },{
      path: '/PushList',
      name: 'PushList',
      component: PushList,
    },{
      path: '/SecKillList',
      name: 'SecKillList',
      component: SecKillList,
    }]
  }, {//权限
    path: '/Jurisdiction',
    name: 'Jurisdiction',
    component: Jurisdiction,
  }, {//供货商
    path: '/Supplier',
    name: 'Supplier',
    component: Supplier,
  }, {//供货商订单
    path: '/SupplierOrder',
    name: 'SupplierOrder',
    component: SupplierOrder,
  }, {//分销
    path: '/Distribution',
    name: 'Distribution',
    component: Distribution,
  }, {//云贷营销
    path: '/YDMarketing',
    name: 'YDMarketing',
    component: YDMarketing,
  }, {//版本
    path: '/Edition',
    name: 'Edition',
    component: Edition,
  }, {//用户管理
    path: '/UserManagement',
    name: 'UserManagement',
    component: UserManagement,
  }, {//琳琅圈
    path: '/LinLangCoop',
    name: 'LinLangCoop',
    component: LinLangCoop,
  }, {//运营管理
    path: '/Management',
    name: 'Management',
    component: Management,
  }, 
  // {//专题
  //   path: '/Administration',
  //   name: 'Administration',
  //   component: Administration,
  // }

  {//专题
    path: '/Administration',
    name: 'Administration',
    component: Administration,
    children: [{
      path: '/TopicAdmin',
      name: 'TopicAdmin',
      component: TopicAdmin,
    }]
  }, {//工具
    path: '/Tool',
    name: 'Tool',
    component: Tool,
  }
  ]
}]
export default routes
