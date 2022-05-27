
import buysRouter from './children/buys'

const Home = () => import('@/pages/Home/Home')

const AllRoutes = [
    {
      path: '/home',
      component: Home,
      redirect: '/home/buys',
      children: [
        buysRouter,
      ]
    },
    {
      path: '',
      redirect: '/home',
      meta: {
        title: '首页'
      }
    },
]


export default AllRoutes