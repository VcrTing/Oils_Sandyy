
const MenuMsg = () => import('@/pages/widget/Menu/WidgetMenuMsg')

const Pdf = () => import('@/pages/i/PdfSimple/PdfSimple')

const Writing = () => import('@/pages/i/Writing/Writing')

const PaymentTable = () => import('@/pages/widget/PaymenTable/PaymentTable')

export default [
    {
    
        path: '/widget_menu_msg',
        component: MenuMsg
    },
    {
        path: '/pdf',
        component: Pdf
    },
    {
        path: '/writing',
        component: Writing
    },
    {
        path: '/pma2',
        component: PaymentTable
    }
]