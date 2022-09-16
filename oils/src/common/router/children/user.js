
const User = () => import('@/pages/User/User')

const UserCenter = () => import('@/pages/User/UserCenter/UserCenter')

const UserSponser = () => import('@/pages/User/UserSponser/UserSponser')
const UserEnroller = () => import('@/pages/User/UserEnroller/UserEnroller')

const UserLoading = () => import('@/pages/widget/Loading/ShimmerLoading')

const PaymenTablePage = () => import('@/pages/User/PaymenTablePage/PaymenTablePage')

export default {
    
    path: '/home/user',
    component: User,
    
    redirect: '/home/user/center',
    children: [
        {
            path: '/home/user/center',
            component: UserCenter,
        },

        {
            path: '/home/user/sponser',
            component: UserSponser,
        },
        {
            path: '/home/user/enroller',
            component: UserEnroller
        },

        {
            path: '/home/user/pma2',
            component: PaymenTablePage
        },
        {
            path: '/home/user/loading',
            component: UserLoading
        },
    ]
}