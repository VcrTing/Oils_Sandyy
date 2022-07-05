
const TEST = false
const VERSION = '2.50'
const VERSION_TIME = '2022-07-05' 

const baseURL = 'https://strapi03.svr.up5d.com'
const apiURL = baseURL

const distURL = 'https://member.sandyy.com'
const pdfURL = 'https://pdf01.svr.up5d.com'

const LAYOUT = {
  WORDPRESS: 'WORDPRESS',
  WIDGET: 'WIDGET',
  HTML: 'HTML'
}

const RANK_LEAD = 5
const RANK_DEVELOP = 8
const RANK_DEVELOP_VIEW = 7
const HK_RATIO = 7.7
const SHARE_RATIO = 0.015
const SHOP_LEVEL_LP_IMG = [
  { txt: '', level: 1, ratio: 10, mon_start: 1, mon_end: 3 },
  { txt: '', level: 2, ratio: 15, mon_start: 4, mon_end: 6 },
  { txt: '', level: 3, ratio: 20, mon_start: 7, mon_end: 9 },
  { txt: '', level: 4, ratio: 25, mon_start: 10, mon_end: 13 },
  { txt: '', level: 5, ratio: 30, mon_start: 13, mon_end: 9999 }
]
// 会员与判断
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
const LEADER = 'leader'
const SIMPLER = 'simpler'
const VIP_EMPTY = { name: '會員', type: SIMPLER, star: 0, nick: '會員', img: 'ICONS/vip_member.png', condition: [ 0 ] }
const VIPS_SIMPLER = [
    { name: '一級會員', type: SIMPLER, star: 1, code: SIMPLER + '_' + 1, nick: '一級會員', img: 'ICONS/vip_simpler_1.png', condition: CONDITION_SIMPLER[0] },
    { name: '二級會員', type: SIMPLER, star: 2, code: SIMPLER + '_' + 2, nick: '二級會員', img: 'ICONS/vip_simpler_2.png', condition: CONDITION_SIMPLER[1] },
    { name: '三級會員', type: SIMPLER, star: 3, code: SIMPLER + '_' + 3, nick: '三級會員', img: 'ICONS/vip_simpler_3.png', condition: CONDITION_SIMPLER[2] },
    { name: '四級會員', type: SIMPLER, star: 4, code: SIMPLER + '_' + 4, nick: '四級會員', img: 'ICONS/vip_simpler_4.png', condition: CONDITION_SIMPLER[3] },
    { name: '五級會員', type: SIMPLER, star: 5, code: SIMPLER + '_' + 5, nick: '五級會員', img: 'ICONS/vip_simpler_5.png', condition: CONDITION_SIMPLER[4] },
]
const VIPS_LEADER = [
    { name: '紅寶會員', type: LEADER, star: 1, code: LEADER + '_' + 1, nick: '紅寶', img: 'ICONS/vip_leader_1.png', condition: CONDITION_LEADER[0] },
    { name: '鑽石會員', type: LEADER, star: 2, code: LEADER + '_' + 2, nick: '鑽石', img: 'ICONS/vip_leader_2.png', condition: CONDITION_LEADER[1] },
    { name: '銀鑽會員', type: LEADER, star: 3, code: LEADER + '_' + 3, nick: '銀鑽', img: 'ICONS/vip_leader_3.png', condition: CONDITION_LEADER[2] },
    { name: '黑鑽會員', type: LEADER, star: 4, code: LEADER + '_' + 4, nick: '黑鑽', img: 'ICONS/vip_leader_4.png', condition: CONDITION_LEADER[3] },
    { name: '星鑽會員', type: LEADER, star: 5, code: LEADER + '_' + 5, nick: '星鑽', img: 'ICONS/vip_leader_5.png', condition: CONDITION_LEADER[4] },
]

const STRIPE_API = "https://dashboard.stripe.com/payments/"

// STRAPI
const BOWSER = {
  username: 'strapi-browser', // 'info@manfulls.com',
  password: 'sDXR2Qqa63TKUho2EQ8U8igrrE7aoh'
}

const ENDPOINT = {
    users: 'users', // 用户
    orders: 'orders', // 订单
    chronus: 'time-periods', // 时间 time-periods
    bonus: 'bonuses', // 奖励 commissions
    products: 'products', // 产品

    browse_order: 'browse_order', // 新订单
    browse_log_order: 'browse_log/order', // 浏览日志
    browse_log_stock: 'browse_log/stock', // 浏览日志

    team_bonus_detail: 'team-bonus-details', // 领袖分红 的 规范
    loyalty_record: 'browse_loyalty_points/record', // 忠诚度记录
    loyalty_wallet: 'browse_loyalty_points/wallet', // 个人忠诚度资料
    browse_bonus: 'browse_bonus/qualify_line_detail', // enroller line
    browse_stock: 'browse_stock', // 产品库存列表

    // 1. 产品库存列表
    // 2. 产品详情界面
    // 3. 支持库存加减的Endpoint
    // 4. 忠诚度积分的操作记录

    // ADMIN 操作 会员
    member_rank_edit: 'wallet/loyalty_points/edit_rank', // Admin 操作 会员等级

    // 奖金报表 字段
    bonus_statement: 'browse_bonus/bonus_statement', //

    // 用户 LP 更改
    browse_LP_log: 'browse_LP_log',
    // 用户 LEVEL 更改
    browse_LEVEL_log: 'browse_log/LP_rank',

    // 用户等级变更 自动
    browse_rank_change_auto: 'browse_log/LP_rank/auto_issue',
    // 用户等级变更 编辑
    browse_rank_change_manual: 'browse_log/LP_rank/manual_edit',

    // 改动会员的 LP 积分
    admin_wallet_lp_add: 'wallet/loyalty_points/add',
    
    // 重启会员资格
    admin_wallet_lp_reboot: 'wallet/loyalty_points/extend',
    admin_wallet_lp_reboot_remove: 'wallet/loyalty_points/remove_extend',

    // Eallet
    admin_wallet_modify: 'wallet/e_wallet/modify',

    // 用户 
    user_s_tree: 'browse_user/sponsor/tree',
    user_s_detail: 'browse_user/sponsor/detail',
    
    user_e_tree: 'browse_user/enroller/tree',
    user_e_detail: 'browse_user/enroller/detail',

    // 重启会员的
    admin_lp_activation: 'browse_log/activation',

    // 更改产品库存
    stock_wp_update: 'stock_wp_update',

    // 
    fund_wallet: 'browse_ewallet/wallet',
    transfer: 'wallet/e_wallet/transfer',
    transfer_audit_record: 'e_wallet/request',
    transfer_audit_edit: 'e_wallet/request_reply',
}

// 库存仓库
const STOCK_SJJ_CODE = 'TST_centre'
const STOCK_HT_CODE = 'FT_warehouse'
const STOCK = [
  { name: '尖沙咀體驗中心', txt: '尖沙咀', sort_code: STOCK_SJJ_CODE },
  { name: '火炭倉庫', txt: '火炭', sort_code: STOCK_HT_CODE },
]

export default {
  pdfURL,
  baseURL,
  apiURL,
  distURL,

  TEST,
  VERSION,
  VERSION_TIME,
  
  LAYOUT,
  BOWSER,

  ENDPOINT,

  STRIPE_API,

  STOCK,
  STOCK_HT_CODE,
  STOCK_SJJ_CODE,

  RANK_LEAD,
  RANK_DEVELOP, 
  RANK_DEVELOP_VIEW,

  HK_RATIO,
  SHARE_RATIO,
  SHOP_LEVEL_LP_IMG,

  LEADER,
  SIMPLER,
  VIP_EMPTY,
  VIPS_LEADER,
  VIPS_SIMPLER,
}
