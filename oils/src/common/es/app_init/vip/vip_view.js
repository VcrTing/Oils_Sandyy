import conf from '../conf'

const SIMPLER = conf.NAMESPACE.SIMPLER
const LEADER = conf.NAMESPACE.LEADER

const EMPTY = { name: '會員', type: SIMPLER, star: 0, nick: '會員', img: 'ICONS/vip_member.png', condition: [ 0 ] }

const CONDITION_SIMPLER = [
    // 本人pv、子成员pv
    [ 100, 0, 0, 0 ],
    [ 100, 500, 0, 0 ],
    [ 100, 1000, 0, 0 ],
    [ 100, 2000, 0, 0 ],
    [ 100, 3000, 0, 0 ]
]

const CONDITION_LEADER = [
    [ 100, 5000, 2, 2000],
    [ 100, 9000, 3, 3000 ],
    [ 100, 25000, 4, 5000 ],
    [ 100, 72000, 5, 9000 ],
    [ 100, 150000, 6, 25000 ]
]

const VIPS_SIMPLER = [
    { name: '一級會員', type: SIMPLER, star: 1, nick: '一級會員', img: 'ICONS/vip_simpler_1.png', condition: CONDITION_SIMPLER[0] },
    { name: '二級會員', type: SIMPLER, star: 2, nick: '二級會員', img: 'ICONS/vip_simpler_2.png', condition: CONDITION_SIMPLER[1] },
    { name: '三級會員', type: SIMPLER, star: 3, nick: '三級會員', img: 'ICONS/vip_simpler_3.png', condition: CONDITION_SIMPLER[2] },
    { name: '四級會員', type: SIMPLER, star: 4, nick: '四級會員', img: 'ICONS/vip_simpler_4.png', condition: CONDITION_SIMPLER[3] },
    { name: '五級會員', type: SIMPLER, star: 5, nick: '五級會員', img: 'ICONS/vip_simpler_5.png', condition: CONDITION_SIMPLER[4] },
]
const VIPS_LEADER = [
    { name: '紅寶會員', type: LEADER, star: 1, nick: '紅寶', img: 'ICONS/vip_leader_1.png', condition: CONDITION_LEADER[0] },
    { name: '鑽石會員', type: LEADER, star: 2, nick: '鑽石', img: 'ICONS/vip_leader_2.png', condition: CONDITION_LEADER[1] },
    { name: '銀鑽會員', type: LEADER, star: 3, nick: '銀鑽', img: 'ICONS/vip_leader_3.png', condition: CONDITION_LEADER[2] },
    { name: '黑鑽會員', type: LEADER, star: 4, nick: '黑鑽', img: 'ICONS/vip_leader_4.png', condition: CONDITION_LEADER[3] },
    { name: '星鑽會員', type: LEADER, star: 5, nick: '星鑽', img: 'ICONS/vip_leader_5.png', condition: CONDITION_LEADER[4] },
]

//
const code_to_content = function(rec) {
    let res = EMPTY

    if (!rec) { return res }
    rec[1] = rec[1] > 5 ? 5 : rec[1]
    rec[1] = rec[1] < 0 ? 0 : rec[1]

    if (rec[0] == SIMPLER) {

        if (rec[1] == 0) { return res }
        res = VIPS_SIMPLER[ rec[1] - 1]
    } else if (rec[0] == LEADER) {

        res = VIPS_LEADER[ rec[1] - 1]
    }

    return res
}

const split_code = function(rec, option = true) {

    let res = null

    if (option) {

        res = rec.split('_')
    } else {

        res = rec.join('_')
    }

    return res
}
//
const _vip_build = function(_type, _star) {
    _star = Number.parseInt(_star)
    const leader_len = VIPS_LEADER.length
    const simpler_len = VIPS_SIMPLER.length

    if (_type == SIMPLER) {

        if (_star == simpler_len) {
            return _vip_build(LEADER, 0)
        }
    } 
    else if (_type == LEADER) {

        if (_star == leader_len) {
            _star -= 1
        }
    }

    _star += 1
    return [ _type, _star ]
}

const vip_next = function(item) {
    let rec = split_code(item)
    rec = _vip_build(rec[0], rec[1])
    return code_to_content(rec)
}
const vip_next_simpler = function(name, star) {
    const rec = _vip_build(name, star)
    return code_to_content(rec)
}

const finished_vip = function(_type, _star) {
    if (_type == LEADER && _star == VIPS_LEADER.length) {
        return true
    }
    return false
}

const rank_to_code = function(rank) {
    let code = SIMPLER
    if (rank > 5) {
        code = LEADER

        rank = rank > 10 ? 10 : rank
        rank -= 5
    }
    rank = rank < 0 ? 0 : rank
    return code + '_' + rank
}
const vip_now = function(item) {
    if (!item) { return EMPTY }
    return code_to_content(split_code(item))
}

export default {
    vip_now,
    vip_next,
    finished_vip,
    vip_next_simpler,

    split_code,
    rank_to_code,
    code_to_content,

    VIPS_LEADER,
    VIPS_SIMPLER,

    VIPS_NULL: { name: '無級別', type: SIMPLER, star: 0, nick: '無級別', img: 'ICONS/vip_member.png', condition: [ 0 ] }
}