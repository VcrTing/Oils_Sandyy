
import conf from '../conf'

const build = function(endPoint, iD = '') {
    return [ conf.apiURL + '/' + endPoint + '/' + iD, endPoint ]
}

export default {
    orders: build(conf.ENDPOINT.orders),
    users: build(conf.ENDPOINT.users),
    bonus: build(conf.ENDPOINT.bonus),
    chronus: build(conf.ENDPOINT.chronus),
    products: build(conf.ENDPOINT.products),

    browse_order: build(conf.ENDPOINT.browse_order),
    browse_log_stock: build(conf.ENDPOINT.browse_log_stock),
    browse_log_order: build(conf.ENDPOINT.browse_log_order),
    
    browse_stock: build(conf.ENDPOINT.browse_stock),
    browse_bonus: build(conf.ENDPOINT.browse_bonus),
    
    team_bonus_detail: build(conf.ENDPOINT.team_bonus_detail),

    loyalty_record: build(conf.ENDPOINT.loyalty_record),
    loyalty_wallet: build(conf.ENDPOINT.loyalty_wallet),

    bonus_statement: build(conf.ENDPOINT.bonus_statement),

    browse_LP_log: (code) => build(conf.ENDPOINT.browse_LP_log, code),
    browse_LEVEL_log: build(conf.ENDPOINT.browse_LEVEL_log),

    member_rank_edit: (code) => build(conf.ENDPOINT.member_rank_edit, code),
    
    // 会员 LP
    admin_wallet_lp_add: (code) => build(conf.ENDPOINT.admin_wallet_lp_add, code),
    // 会员 资格
    admin_wallet_lp_reboot: (code) => build(conf.ENDPOINT.admin_wallet_lp_reboot, code),
    admin_wallet_lp_reboot_remove: (code) => build(conf.ENDPOINT.admin_wallet_lp_reboot_remove, code),

    // 用户
    user_s_tree: build(conf.ENDPOINT.user_s_tree),
    user_e_tree: build(conf.ENDPOINT.user_e_tree),
    user_s_detail: build(conf.ENDPOINT.user_s_detail),
    user_e_detail: build(conf.ENDPOINT.user_e_detail),

    //
    admin_lp_activation: build(conf.ENDPOINT.admin_lp_activation),

    // 用户等级变更
    browse_rank_change_auto: build(conf.ENDPOINT.browse_rank_change_auto),
    browse_rank_change_manual: build(conf.ENDPOINT.browse_rank_change_manual),
    
    // 资金
    fund_wallet: build(conf.ENDPOINT.fund_wallet),
    transfer: build(conf.ENDPOINT.transfer),
    transfer_audit_record: build(conf.ENDPOINT.transfer_audit_record),
    transfer_audit_edit: build(conf.ENDPOINT.transfer_audit_edit),
    
    // 方法
    build
}