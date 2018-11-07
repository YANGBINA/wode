
const Order = () => import('@/components/Section/Layout/Order')//订单

const OrderList = () => import('@/components/Section/Layout/Order/OrderList')//订单列表
const ReturnRequest = () => import('@/components/Section/Layout/Order/ReturnRequest')//退货申请处理

export default {
    path: '/Order',
    name: 'Order',
    component: Order,
    children: [
        {
            path: 'OrderList',
            name: 'OrderList',
            component: OrderList,
        },
        {
            path: 'ReturnRequest',
            name: 'ReturnRequest',
            component: ReturnRequest,
        }
    ]
}