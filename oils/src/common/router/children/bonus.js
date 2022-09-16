
const Bonus = () => import('@/pages/Bonu/Bonus')

const BonusRecommend = () => import('@/pages/Bonu/Recommend/BonusRecommend')
const BonusTeamLayer = () => import('@/pages/Bonu/TeamLayer/BonusTeamLayer')
const BonusActiveHouse = () => import('@/pages/Bonu/ActiveHouse/BonusActiveHouse')

//
const BonusManageShare = () => import('@/pages/Bonu/ManageShare/BonusManageShare')
const BonusManageShareAdmin = () => import('@/pages/Bonu/ManageShare/BonusManageShareAdmin')

const BonusDevelopShare = () => import('@/pages/Bonu/DevelopShare/BonusDevelopShare')
const BonusDevelopShareAdmin = () => import('@/pages/Bonu/DevelopShare/BonusDevelopShareAdmin')

export default {
    
    path: '/home/bonus',
    component: Bonus,
    
    redirect:'/home/bonus/active_house',
    children: [
        {
            path: '/home/bonus/active_house',
            component: BonusActiveHouse,
        },

        {
            path: '/home/bonus/recommend',
            component: BonusRecommend,
        },

        {
            path: '/home/bonus/active_layer',
            component: BonusTeamLayer,
        },
        
        //
        {
            path: '/home/bonus/management_info',
            component: BonusManageShare,
        },
        {
            path: '/home/bonus/management_info_admin',
            component: BonusManageShareAdmin,
        },

        {
            path: '/home/bonus/development_info',
            component: BonusDevelopShare,
        },
        {
            path: '/home/bonus/development_info_admin',
            component: BonusDevelopShareAdmin
        }
    ]
}