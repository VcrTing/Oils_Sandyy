import float from "./tool/float"

const ID_FIELD = 'member_code'
const CHILDREN_FIELD = 'children'
const ID_FIELD_SPONSOR = 'sponsor_id'
const ID_FIELD_ENROLLER = 'enroller_id'

const SIMPLER = 'simpler'
const LEADER = 'leader'


// 单人用户 PV 超越值
const USER_PV_LIMIT_ACTIVE_HOUSE = 130
const USER_PV_LIMIT = 100

// 推荐奖金比率
const RECOMMEND_RATIOS = [ 0.2, 0.1, 0.05 ]

const num_result = function(data) {
    let res = 0
    
    res = float.floatAdd(
        data.OPV,
        res
    )
    res = float.floatAdd(
        data.FPV,
        res
    )
    res = float.floatAdd(
        data.active_branch_payout,
        res
    )
    
    res = float.floatAdd(
        data.DPV,
        res
    )
    res = float.floatAdd(
        data.MPV,
        res
    )

    return res.toFixed(2)
}

export default {
    NAMESPACE: {
        ID_FIELD,
        CHILDREN_FIELD,
        ID_FIELD_SPONSOR,
        ID_FIELD_ENROLLER,

        LEADER,
        SIMPLER,
    },
    
    USER_PV_LIMIT,
    RECOMMEND_RATIOS,
    USER_PV_LIMIT_ACTIVE_HOUSE,

    num_result
}