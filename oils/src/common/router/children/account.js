
const Account = () => import('@/pages/Account/Account')

const AccountStatement = () => import('@/pages/Account/Statement/AccountStatement')
const AccountStatementMember = () => import('@/pages/Account/StatementMember/AccountStatementMember')

const Chronus = () => import('@/pages/Home/Chronus/Chronus')

export default {
    
    path: '/home/account',
    component: Account,
    
    redirect:'/home/account/statement',
    children: [
        
        {
            path: '/home/account/statement',
            component: AccountStatement
        },
        {
            path: '/home/account/statement_member',
            component: AccountStatementMember
        },

        {
            path: '/home/chronus',
            component: Chronus
        }
    ]
}