
const MyMoney = () => import('../../../pages/Ewallet/MyMoney/MyMoney.vue')

const Ewallet = () => import('../../../pages/Ewallet/Ewallet.vue')
const EwalletAdmin = () => import('../../../pages/Ewallet/EwalletAdmin/EwalletAdmin.vue')

export default 
{

    path: '/home/wallet',
    component: Ewallet,
    
    children: [
        {
            path: '/home/wallet/by-admin',
            component: EwalletAdmin,
        },
        {
            path: '/home/wallet/me',
            component: MyMoney,
        },
    ]
}