let _bonus_def = {
    FPV: 0,
    OPV: 0,
    Rank: 0,
    active_branch_bonus: [],
    active_branch_credit: 0,
    active_branch_payout: 0,
    individual_pv: 0,
    is_active: false,
    maximum_rank: 5,
    organisation_bonus: [],
    organization_pv: 0,
    organize_line: { },
    referral_bonus: [],
    time_period: "60d0548080574434acd95d5c",
}

let _ogzation_line_def = {
    count: 0,
    sub: {

    }
}

const bonu_def = function(chronu) {
    _bonus_def.chronu = chronu
    return _bonus_def
}

const ogzation_line_def = function() {
    return _ogzation_line_def
}

export default {
    bonu_def,
    ogzation_line_def

}