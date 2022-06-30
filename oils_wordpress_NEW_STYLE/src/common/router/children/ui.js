
const Ui = () => import('@/pages/i/Ui')
const UiElement = () => import('@/pages/i/Ui/UiElement')

const PdfUser = () => import('@/pages/i/PdfUser/PdfUser')


const PdfSimple = () => import('@/pages/i/PdfSimple/PdfSimple')

export default {
    
    path: '/ui',
    component: Ui,
    
    redirect:'/ui/element',
    children: [
        {
            path: '/ui/element',
            component: UiElement,
        },
        {
            path: '/ui/pdf_user',
            component: PdfUser,
        },
        {
            path: '/ui/pdf',
            component: PdfSimple,
        },
    ]
}