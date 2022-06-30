
import bonusRouter from './children/bonus'
import accountRouter from './children/account'
import loyaltyRouter from './children/loyalty'
import userRouter from './children/user'
import buysRouter from './children/buys'
import uiRouter from './children/ui'

import mcRouter from './children/member_change'

import authRouter from './children/auth'
import walletRouter from './wallet/wallet'

const Home = () => import('@/pages/Home/Home')

const DumpScreen = () => import('@/pages/Home/Dump/DumpScreen')

import widgetRouter from './wordpress/widget'

const AllRoutes = [
    {
      path: '/home',
      component: Home,
      redirect: '/home/account',
      children: [
        accountRouter,
        loyaltyRouter,
        bonusRouter,
        userRouter,
        buysRouter,
        uiRouter,
        mcRouter,
        walletRouter,

        {
          path: '/home/dump',
          component: DumpScreen
        },
      ]
    },
    ...authRouter,
    ...widgetRouter,
    {
      path: '',
      redirect: '/home',
      meta: {
        title: '首页'
      }
    },
    
]


export default AllRoutes