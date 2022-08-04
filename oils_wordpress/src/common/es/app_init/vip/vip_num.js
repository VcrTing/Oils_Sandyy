import conf from "../conf"

const next_son_can_num = function(lines, target) {
    lines = lines ? lines : [ ]
    let res = 0
    lines.map(e => {
        if ((e.organization_pv >= target) && (e.individual_pv >= conf.USER_PV_LIMIT)) {
            res += 1
        }
    })

    return res 
}

const next_opv_can_num = function(items, target, lines) {
    items = items ? items: [ ]
    let inn = 0
    items = items.filter(e => e.index <= 1)
    items = items.map(e => { e.member_code = Number.parseInt(e.member_code); return e })
    lines = lines.filter(l => {
        inn = false
        items.map(e => {
            if (e.member_code == Number.parseInt(l.member_code)) {
                inn = true
            }
        })
        return inn
    })
    return next_son_can_num(lines, target)
}

export default {
    next_son_can_num,
    next_opv_can_num
}