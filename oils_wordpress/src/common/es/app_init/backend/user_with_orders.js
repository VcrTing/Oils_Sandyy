import conf from '../conf'

const ID_FIELD = conf.NAMESPACE.ID_FIELD
const user_with_orders = function(users, orders, hooking = null) {
    for (let u of users) {

        hooking(u)
        let res = [ ]
        for (let o of orders) {

            // console.log('orders =', o)
            if (o.customer_uuid) {
            }
            if (u[ ID_FIELD ] == o.customer_uuid[ ID_FIELD ]) {
                res.push(o)
            }
        }

        u.orders_period = res
    }
}


export default user_with_orders