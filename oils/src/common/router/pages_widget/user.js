const PwUser = () => import('../../../pages_widget/User/PwUser.vue')
const PwUserList = () => import('../../../pages_widget/User/UserList/PwUserList.vue')

const UserDetaiiEdit = () => import('../../../pages_widget/UserDetaii/Opera/UserDetailEdit.vue')
const UserDetaiiView = () => import('../../../pages_widget/UserDetaii/View/UserDetaiiView.vue')

export default (root, next = '/pw_user') => [
    {
        path: root + next,
        redirect: root + next + '/list_of_all',
        component: PwUser,
        children: [
            {
                path: root + next + '/list_of_all',
                component: PwUserList
            },
            {
                path: root + next + '/myself',
                component: UserDetaiiView
            },
            {
                path: root + next + '/user_edit',
                component: UserDetaiiEdit
            }
        ]
    },
]