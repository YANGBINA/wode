
const Promotion = () => import('@/components/Section/Layout/Promotion')//促销

const CouponsList = () => import('@/components/Section/Layout/Promotion/CouponsList')//优惠券列表
const AddCoupons = () => import('@/components/Section/Layout/Promotion/AddCoupons')//添加优惠券
const PushList = () => import('@/components/Section/Layout/Promotion/PushList')//优惠券推送列表
const SecKillList = () => import('@/components/Section/Layout/Promotion/SecKillList')//秒杀活动列表


export default {
    path: '/Promotion',
    name: 'Promotion',
    component: Promotion,
    children: [
        {
            path: 'CouponsList',
            name: 'CouponsList',
            component: CouponsList,
        }, {
            path: 'AddCoupons',
            name: 'AddCoupons',
            component: AddCoupons,
        }, {
            path: 'PushList',
            name: 'PushList',
            component: PushList,
        }, {
            path: 'SecKillList',
            name: 'SecKillList',
            component: SecKillList,
        }
    ]
}