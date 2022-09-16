import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

    state: {
        token: '',
        user_backend: null,
        share_type: 1, // 0 = 无领袖分红，1 = 管理分红，2 = 发展分红

        chronus: null,
        chronus_now: null,

        layout: null,
        platform_data: null,

        is_admin: false,
        products: null,
        

        lang: 'HK',
        device: 0, /* 0 = 网站，1 = Mobie */

        loading: false,

        results: [ ],
        user_sponsor: null,
        user_enroller: null,
        user_collection: null,
        user_tree_sponsor: null,
        user_tree_enroller: null,

        bonus_numd: [ ], // 领袖数量
        team_bonus_detial: [ ], // VIP 领袖分红 规则
        bonus_qualify_line: null,
        bonus_statement: null, // 奖励

        dialog: 0,
        modal: 0, // 0 关闭所有modal，1 开启 loyalty modal

        user_s_detail: null,
        user_e_detail: null
    },
    mutations: {
        // 储存
        save(state, k_v) {
            state[ k_v[0] ] = k_v[ 1 ]
        },


        // 储存 登录讯息
        changeAuth(state, token) {
            state.token = token
        },
        clearToken(state) {
            state.token = ''
            state.user = { }
        },
        // 储存 后台用户
        saveBackendUser(state, items) {
            state.user_backend = items
        },

        saveAdmin(state, admin) {
            state.is_admin = admin
        },

        saveShareType(state, st) {
            state.share_type = st
        },
        
        // -------------------------------------------
        saveBonus(state, the_bonus) {
            state.bonus = the_bonus
        },

        saveSponsor(state, user) {
            state.user_sponsor = user
        },
        saveEnroller(state, user) {
            state.user_enroller = user
        },
        saveCollection(state, collec) {
            state.user_collection = collec
        },
        saveTreeSponsor(state, user) {
            state.user_tree_sponsor = user
        },
        saveTreeEnroller(state, user) {
            state.user_tree_enroller = user
        },
        
        // 储存 用户
        saveUserSponser(state, the_sponser) {
            state.users_sponser = the_sponser
        },
        saveUserEnroller(state, the_enroller) {
            state.users_enroller = the_enroller
        },
        // 储存 翻译
        saveTransfer(state, the_transfer) {
            state.transfer = the_transfer
        },
        // 储存 产品
        saveProducts(state, prod) {
            state.products = prod
        },

        saveBonusNum(state, bonus_num) {
            state.bonus_numd = bonus_num
        },

        saveTeamBonusDetail(state, tbd) {
            state.team_bonus_detial = tbd
        },

        saveResults(state, res) {
            state.results = res
        },

        saveBonusQualifyLine(state, res) { state.bonus_qualify_line = res  },

        saveBonusStatement(state, res) { state.bonus_statement = res },
        // -------------------------------------------
        // 储存 时间
        saveChronus(state, code) {
            const _chr = code[0]
            
            if (code[1]) {
                delete _chr.orders;
                delete _chr.bonuses;
                delete _chr.created_at;
                delete _chr.updated_at;
                delete _chr.commissions;
                delete _chr.published_at;

    
                sessionStorage.setItem('oils_chronu', JSON.stringify(_chr))
                
            }
            state.chronus = _chr
        },
        saveChronusNow(state, _chr) {
            
            delete _chr.orders;
            delete _chr.bonuses;
            delete _chr.created_at;
            delete _chr.updated_at;
            delete _chr.commissions;
            delete _chr.published_at;

            sessionStorage.setItem('oils_chronu_now', JSON.stringify(_chr))
                
            state.chronus_now = _chr
        },
        // 储存平台类型
        saveLayout(state, v) {
            state.layout = v
        },
        // 储存数据
        saveFromPlatform(state, v) {
            state.platform_data = v
        },

        // 储存加载
        saveLoading(state, v) {
            state.loading = v
        },

        // ================
        saveDialog(state, v) { state.dialog = v },
        saveModal(state, v) { state.modal = v }
    },
    getters: { 
        homeLoading(state) {
            state.loading = true
            setTimeout(() => { state.loading = false }, 400)

            return v => {
                return 0
            }
        },
        
        checkToken(state) {
            let res = false

                const token = sessionStorage.getItem('oils_token')
                
                if ((token == undefined) || (token == '') || (token == null) || (token == 'undefined')) {
                    res = true
                } else {
                    state.token = token
                    
                    console.log('token = ', token.substring(0, 15) + '...')
                }
    
            try{
            } catch(e) {

            }
            return v => {
              return res
            }
        },
        checkUserBackend(state) {
            let res = false

            try{
                const user_backend = JSON.parse(sessionStorage.getItem('oils_user_backend'))
                
                if ((user_backend == undefined) || (user_backend == '') || (user_backend == null) || (user_backend == 'undefined')) {
                    res = true
                } else {
                    state.user_backend = user_backend
                }
            } catch(e) {
                
            }

            return v => {
              return res
            }
        },
        checkChronus(state) {
            let res = false

            try{
                const chron = JSON.parse(sessionStorage.getItem('oils_chronu'))
                if ((chron == undefined) || (chron == '') || (chron == null)) {
                    res = true
                } else {
                    state.chronus = chron
                    state.chronus_now = JSON.parse( sessionStorage.getItem('oils_chronu_now') )
                }
            } catch(e) { }

            return v => {
                return res
            }
        },
        checkPlantfrom(state) {
            let res = false

            try{
                const item = JSON.parse(sessionStorage.getItem('oils_conn_data'))
                if ((item == undefined) || (item == '') || (item == null)) {
                    res = true
                } else {
                    state.platform_data = item
                }
            } catch(e) {
                
            }

            return v => {
                return res
            }
        },
    },
    modules: {

    }
})