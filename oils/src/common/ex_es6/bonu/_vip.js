import conf from '../../../conf'

// 会员等级 Rank 获取 VIP 代码
const rank_to_code = function(rank) {
    let code = conf.SIMPLER
    rank = rank ? Number.parseInt(rank) : 0
    if (rank > 5) { code = conf.LEADER; rank -= 5 }
    return code + '_' + (rank < 0 ? 0 : rank)
}

// VIP 代码 获取 VIP Map 数据
const _code_to_content = function(named, num, def = conf.VIP_EMPTY) {
    return (named == conf.LEADER) ? 
        ( conf.VIPS_LEADER[ num - 1] ) :
        ( (num == 0) ? def : conf.VIPS_SIMPLER[ num - 1] )
}
const code_to_content = function(rec) {
    if (!rec) { return conf.VIP_EMPTY }
    if (!(rec instanceof Array)) { rec = rec.split('_') }
    return _code_to_content(rec[0], Number.parseInt(rec[1]))
}

// 获取 下一级 VIP
const _vip_build = function(_type, _star) {
    if (_type == conf.SIMPLER) { if (_star == conf.VIPS_SIMPLER.length) { return _vip_build(conf.LEADER, 0) } } 
    else if (_type == conf.LEADER) { if (_star == conf.VIPS_LEADER.length) { _star -= 1 } }
    return [ _type, (_star += 1) ]
}
const vip_next = function(code) {
    if (!(code instanceof Array)) { code = code.split('_') }
    code[1] = Number.parseInt(code[1])
    return code_to_content(_vip_build(...code))
}

// 便捷方法
const user_vip_and_next_vip = function(u) {
    let rank = u.bonu_period ? u.bonu_period : { Rank: 0 }
    rank = rank.Rank ? rank.Rank : 0
    rank = rank_to_code(rank) // 转换为 VIP CODE
    u.vip = code_to_content( rank )
    u.vip_next = vip_next( rank )
    return u
}

export default {
    vip_next,
    rank_to_code,
    code_to_content,

    // 便捷方法
    user_vip_and_next_vip
}   