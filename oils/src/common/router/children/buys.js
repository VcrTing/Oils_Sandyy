
const Buys = () => import('@/pages/Buys/Buys')

const ProductDetail = () => import('@/pages/Buys/Detail/ProductDetail')

const StockRecords = () => import('@/pages/Buys/Stock/StockRecords')

const BuysRecords = () => import('@/pages/Buys/Records/BuyRecords')

// const LoyaltyRecords = () => import('@/pages/Buys/Loyalty/LayaltyRecords')

const InventoryRecords = () => import('@/pages/Buys/Inventory/InventoryRecord')

/* const InventoryEdit = () => import('@/pages/Buys/InventoryEdit/InventoryEdit')

        {
            path: '/home/buys/inventory_edit',
            component: InventoryEdit,
        },
*/

const Products = () => import('@/pages/Buys/Products/Products')


// PMA
const PmaStockRecord = () => import('../../../pages/Buys/PMA/PmaStockRecord.vue')
const PmaInventory = () => import('../../../pages/Buys/PMA/PmaInventory.vue')
export default {
    
    path: '/home/buys',
    component: Buys,
    
    redirect:'/home/buys/records',
    children: [
        {
            path: '/home/buys/records',
            component: BuysRecords,
        },
        {
            path: '/home/buys/products',
            component: Products,
        },

        {
            path: '/home/log/stocks',
            component: StockRecords,
        },

        {
            path: '/home/buys/inventory',
            component: InventoryRecords,
        },

        {
            path: '/home/buys/product_detail',
            component: ProductDetail
        },

        {
            path: '/home/buys/pma_stock_record',
            component: PmaStockRecord
        },
        {
            path: '/home/buys/pma_inventory',
            component: PmaInventory
        }
    ]
}