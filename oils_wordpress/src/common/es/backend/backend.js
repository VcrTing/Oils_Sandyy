/*
const view_pay_way = function(way) {
    return [
        '信用卡',
        '其他'
    ][ way ]
}
*/
// 传入 shipping 对象
const view_shipping_address = function(rec, lang = 'HK') {
    let data = ''
    if (rec) {
        if (rec.country) {
            data += rec.country.display_name + ', '
        }
        if (rec.state) {
            data += rec.state.display_name + ', '
        }
        data += ( rec.city + ', ' + rec.address)
    }
    return data
}
const view_shipping_named = function(rec, lang = 'HK') {
    if (rec) {
        return rec.first_name + ' ' + rec.last_name
    }
    return ''
}

const view_role = function(rec) {
    if (rec == 'corp_member') {
        return 'Corp Member'
    }
    else if (rec == 'personal_member') {
        return 'Personal Member'
    }

    return ''
}


let pay_way = [
    {
        typed: 'stripe',
        named: 'Credit Card (Stripe)',
        link: true
    }
]
// 传入 支付方式对象
const view_pay_way = function(method) {
    let res = {
        typed: 'stripe',
        named: 'Credit Card (Stripe)',
        link: true
    }

    if (method) { 
        pay_way.map(e => {
            if (method === e.typed) {
                res = e
            }
        })
    }

    return res
}

let pay_status = [
    {
        named: 'shipped',
        status_code: 1,
        status_class: 'txt-wa rning'
    },
    {
        named: 'processing',
        status_code: 1,
        status_class: 'txt-wa rning'
    },
    {
        named: 'cancelled',
        status_code: 3,
        status_class: 'txt-cancell'
    },
    {
        named: 'completed',
        status_code: 2,
        status_class: 'txt-foc us'
    },
    {
        named: 'on-hold',
        status_code: 0,
        status_class: 'txt-error'
    },
    {
        named: 'pending payment',
        status_code: 0,
        status_class: 'txt-error'
    },
]

const view_pay_status = function(rec) {
    let res
    pay_status.map(e => {
        if (rec == e.named) {
            res = e
        }
    })
    return res
}

const mm = [
    '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'
]

const view_month = function(m) {
    return mm[ (m - 1) ]
}

const lr = [ 0.1, 0.15, 0.2, 0.25, 0.3 ]

const view_lp_ratio = function(e) {
    return ( e && e > 0 ) ? lr[ (e - 1) ] : 0
}

// 
const LP_OPERA_TYPED = {
    'issue': '發放',
    'expire': '過期',
    'additional': '額外增加',
    'reactivate': '延長(月)',
    'deactivate': '失去資格(月)',
}
const view_lp_opera_typed = function(e) {
    return e ? LP_OPERA_TYPED[ e ] : ''
}

export default {
    view_role,
    
    view_month,

    view_lp_ratio,

    view_pay_way,
    view_pay_status,

    view_lp_opera_typed,

    view_shipping_named,
    view_shipping_address,
}