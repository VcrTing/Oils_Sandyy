
const Loyalty = () => import('@/pages/Loyalty/Loyalty')

const LoyaltyRecords = () => import('@/pages/Loyalty/Loyalty/LayaltyRecords')

const TransferMoney = () => import('@/pages/Loyalty/TransferMoney/TransferMoney')

const TransferMoneyPlus = () => import('@/pages/Loyalty/TransferMoney/Plus/TransferMoneyPlus')

const TransferMoneyAudit = () => import('@/pages/Loyalty/TransferMoneyAudit/TransferMoneyAudit')

export default {
    
    path: '/home/loyalty',
    component: Loyalty,
    
    redirect: '/home/loyalty/loyalty',
    children: [

        {
            path: '/home/loyalty/loyalty',
            component: LoyaltyRecords,
        },

        {
            path: '/home/loyalty/transfer_money',
            component: TransferMoney,
        },
        
        {
            path: '/home/loyalty/transfer_plus',
            component: TransferMoneyPlus
        },

        {
            path: '/home/loyalty/transfer_audit',
            component: TransferMoneyAudit
        }

        /*
        {
            path: '/home/loyalty/option_logo',
            component: LoyaltyOpLogo,
        },
        {
            path: '/home/loyalty/lp_plus',
            component: LoyaltyOptFengPlus,
        },
        {
            path: '/home/loyalty/level_edit',
            component: LoyaltyOptLevelEdit,
        },
        */
    ]
}