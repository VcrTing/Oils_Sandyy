
const Buys = () => import('@/pages/Buys/Buys')

const StockRecords = () => import('@/pages/Buys/Stock/StockRecords')

const InventoryRecords = () => import('@/pages/Buys/Inventory/InventoryRecord')

export default {
    
    path: '/home/buys',
    component: Buys,
    
    redirect:'/home/buys/inventory',
    children: [

        {
            path: '/home/buys/stocks',
            component: StockRecords,
        },

        {
            path: '/home/buys/inventory',
            component: InventoryRecords,
        },
    ]
}