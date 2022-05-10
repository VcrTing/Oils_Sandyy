
const MemberChange = () => import('@/pages/MemberChange/MemberChange')

const McLpPlus = () => import('@/pages/MemberChange/McLpPlus/McLpPlus')
const McLevelChange = () => import('@/pages/MemberChange/McLevelChange/McLevelChange')

const FormMcLpPlus = () => import('@/pages/MemberChange/Form/Plus/FormMcLpPlus')
const FormMcLevelChange = () => import('@/pages/MemberChange/Form/Change/FormMcLevelChange')

const McReloadQualify = () => import('@/pages/MemberChange/McReloadQualify/McReloadQualify')
const FormMcReloadQualify = () => import('@/pages/MemberChange/Form/Reload/FormMcReloadQualify')


const McLpLevelAndMsgChange = () => import('@/pages/MemberChange/McLpLevelAndMsgChange/McLpLevelAndMsgChange')

export default {
    
    path: '/home/member_operate',
    component: MemberChange,
    
    redirect: '/home/member_operate/lp_plus',
    children: [
        //
        {
            path: '/home/member_operate/lp_plus',
            component: McLpPlus,
        },
        {
            path: '/home/member_operate/form_lp_plus',
            component: FormMcLpPlus,
        },

        //
        {
            path: '/home/member_operate/level_change',
            component: McLevelChange,
        },
        {
            path: '/home/member_operate/form_level_change',
            component: FormMcLevelChange,
        },
        
        // 
        {
            path: '/home/member_operate/reload_qualify',
            component: McReloadQualify
        },
        {
            path: '/home/member_operate/form_reload_qualify',
            component: FormMcReloadQualify
        },

        //
        {
            path: '/home/member_operate/lplevel_msg_change',
            component: McLpLevelAndMsgChange
        }
    ]
}