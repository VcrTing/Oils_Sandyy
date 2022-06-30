
const Login = () => import('@/pages/Home/Login/Login')
const LoginForm = () => import('@/pages/Home/Login/Inner/LoginForm')

export default [
    {
    
        path: '/login',
        component: Login,
        meta: {
          title: '登录界面',
          needLogin: false
        },
        
        redirect:'/login/form',
        children: [
            {
                path: '/login/form',
                component: LoginForm,
            },
        ]
    }
]