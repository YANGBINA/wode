
const User = () => import('@/components/Section/Layout/User')//用户

const UserList = () => import('@/components/Section/Layout/User/UserList')//用户列表
const ModifyUser = () => import('@/components/Section/Layout/User/ModifyUser')//修改用户绑定关系

export default {
    path: '/User',
    name: 'User',
    component: User,
    children: [
        {
            path: 'UserList',
            name: 'UserList',
            component: UserList,
        }, {
            path: 'ModifyUser',
            name: 'ModifyUser',
            component: ModifyUser,
        }
    ]
}