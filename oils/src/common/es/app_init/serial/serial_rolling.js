import def from '../tool/def'
import float from '../tool/float'

import conf from '../conf'

const _num_result_bonus = function(data) {
    data.bonu_period.usd_result = conf.num_result(data.bonu_period)
}

const _num_son_num = function(subs) {
    let res = 0
    for (let k in subs) {
        if (subs[k] > conf.USER_PV_LIMIT) {
            res += 1
        }
    }

    return res
}

const _num_son_pv = function(subs, next_vip) {
    // const condition = next_vip.condition[3]

    let res = 0

    for (let key in subs) {
        const v = subs[key]
        // if (v >= condition) { res += v }
        res += v
    }

    return res
}

const _inert_vip = function(data) {

    let lines = { }

    let son_can_num = 0
    let son_pv_ENROLLER = 0
    let rank = data.bonu_period.Rank
    
    /*
    if (data.index == 0) {
        console.log('line =', data.bonu_period)
        console.log('lines =', JSON.parse(data.bonu_period.active_qualified_lines))
        console.log('---- Rank =', data.bonu_period.Rank )
    }
    */
    
    try {
        lines = JSON.parse(data.bonu_period.active_qualified_lines) // data.bonu_period.active_qualified_lines // 
        // console.log('LINES =', lines)
        rank = rank ? Number.parseInt(rank) : rank 

        /*
        if (data['_id'] == '60d98551628e1639228db3ab') {
            console.log('lines', data.bonu_period.active_qualified_lines)
            console.log('son can num =', lines[ rank ])
        }
        */
        
        if (rank > 5) {
            
            lines = lines[ rank ]
            // son_can_num = lines.count
            son_pv_ENROLLER = _num_son_pv( lines.sub, data.vip_next )
        } else {
            /*
            lines = lines[ 5 ]
            lines = lines ? lines : def.ogzation_line_def()
            son_can_num = lines.count // _num_son_num( lines.sub )
            */
            son_pv_ENROLLER = 0

        }
        /*
        if (data.index == 0) {
            console.log('son_can_num =', son_can_num)
            console.log('son_pv_ENROLLER =', son_pv_ENROLLER)
            console.log('---- Rank =', rank)
        }
        */
        
    } catch(e) {
        // son_can_num = 0
        son_pv_ENROLLER = 0
    }

    // data.bonu_period.son_can_num = son_can_num
    data.bonu_period.son_pv_ENROLLER = son_pv_ENROLLER
    
    data.bonu_period.organize_line = lines
    delete data.bonu_period.active_qualified_lines
}

const serial_rolling = function(data) {
    _inert_vip(data)
    _num_result_bonus(data)

    delete data.orders
    delete data.bonuses
}

export default serial_rolling