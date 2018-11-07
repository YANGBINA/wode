
const Commodity = () => import('@/components/Section/Layout/Commodity')//商品

const AddCommodity = () => import('@/components/Section/Layout/Commodity/AddCommodity')//系统首页
const CommodityList = () => import('@/components/Section/Layout/Commodity/CommodityList')//商品列表
const BackCategory = () => import('@/components/Section/Layout/Commodity/BackCategory')//后端品类
const AttrManagement = () => import('@/components/Section/Layout/Commodity/AttrManagement')//属性管理
const WebCategory = () => import('@/components/Section/Layout/Commodity/WebCategory')// 前端类目
const BrandManagement = () => import('@/components/Section/Layout/Commodity/BrandManagement')// 品牌管理
const ServiceGuarantee = () => import('@/components/Section/Layout/Commodity/ServiceGuarantee')// 服务保障

export default {
    path: '/Commodity',
    name: 'Commodity',
    component: Commodity,
    children: [
        {
            path: 'AddCommodity',
            name: 'AddCommodity',
            component: AddCommodity,
        },
        {
            path: 'CommodityList',
            name: 'CommodityList',
            component: CommodityList,
        },
        {
            path: 'BackCategory',
            name: 'BackCategory',
            component: BackCategory,
        },
        {
            path: 'AttrManagement',
            name: 'AttrManagement',
            component: AttrManagement,
        },
        {
            path: 'WebCategory',
            name: 'WebCategory',
            component: WebCategory,
        },
        {
            path: 'BrandManagement',
            name: 'BrandManagement',
            component: BrandManagement,
        },
        {
            path: 'ServiceGuarantee',
            name: 'ServiceGuarantee',
            component: ServiceGuarantee,
        }
    ]
}