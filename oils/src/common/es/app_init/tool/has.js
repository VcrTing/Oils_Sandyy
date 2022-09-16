
import conf from '../conf'

const team_layer = function(ipv ) {

    let res = 0
    if (ipv > conf.USER_PV_LIMIT) {
        res = 1
    }
    
    return [
        '無', '有'
    ] [ res ]
}

const order_role = function(is_origin) {


    if (is_origin) {
        return 'Member'
    }

    return 'Retail Customer'
}

const is_active = function(pv) {
    return pv >= conf.USER_PV_LIMIT
}

export default {
    team_layer,
    order_role,
    is_active
}