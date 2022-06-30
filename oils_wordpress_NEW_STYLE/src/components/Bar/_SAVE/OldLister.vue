<template>

    <v-list-item-group class="qiong-br-0 qiong-list-item"
        v-model="group"
    >
        <v-list-item
            v-for="tile in tiles"
            :key="tile.title"

            @click.stop="go(`/home/${tile.link}`)"

            :class="{ 'v-list-item--active': (`/home/${tile.link}` == $route.path) }"
        >
            <v-list-item-avatar class="py-0 my-0">
                <v-icon v-html="tile.icon"></v-icon>
            </v-list-item-avatar>

            <v-list-item-content>
                <div tag="div">
                    {{ tile.title }}
                </div>
            </v-list-item-content>
        </v-list-item>


        <!-- 樹形結構 -->
        <v-list-group
            v-for="tile in tiles_group"
            :key="tile.title"

            no-action
            sub-group
            color="rgba(255, 255, 255, 0.6)"
            :prepend-icon="tile.icon"
            class="lad_list_group"
        >
            <template v-slot:activator>
                <v-list-item-content>
                    <v-list-item-title class="pl-2 fs-16">{{ tile.title }}</v-list-item-title>
                </v-list-item-content>
            </template>
            <v-list-item
                class="pl-15"
                color="white"

                v-for="t in tile.children"
                :key="t.title"

                @click.stop="go(`/home/${t.link}`)"

                :class="{ 'v-list-item--active-MANY': (`/home/${tile.link}` == $route.path) }"
            >
                <v-list-item-avatar class="pr-0 mr-3">
                    <v-icon :size="22">{{ t.icon }}</v-icon>
                </v-list-item-avatar>

                <v-list-item-content>
                    <div tag="div">
                        {{ t.title }}
                    </div>
                </v-list-item-content>
            </v-list-item>
        </v-list-group>

        <!-- 編輯月份 -->
        <menu-setting-simple></menu-setting-simple>

        <!-- 退出登錄
        <v-list-item
            @click="outLogin"
        >
            <v-list-item-avatar>
                <v-icon>mdi-logout-variant</v-icon>
            </v-list-item-avatar>

            <v-list-item-content>
                <div tag="div">
                    退出登錄
                </div>
            </v-list-item-content>
        </v-list-item> -->
        

    </v-list-item-group>
</template>

<script>
import MenuGroupSetting from './menu/MenuGroupSetting.vue'
import MenuSettingSimple from './menu/MenuSettingSimple.vue'
    export default {
  components: { MenuGroupSetting, MenuSettingSimple },
        name: '',
        async mounted() {
            await this.init()
        },
        data() {
            return {
                group: null,
                tiles: [ ],

                tiles_group: [ ]
            }
        },
        methods: {
            async serMenu() {
                const is_browser = this.$store.state.is_browser
                if (is_browser) {
                    this.tiles_group[0].children.push(
                        { icon: 'mdi-alarm-panel', title: this.$t('MENU.commission_total'), link: 'user/pma2' },
                    )
                }

                await this.menuNow()
            },

            init() {
                return new Promise((rej, rev) => {

                    this.tiles = [
                        { icon: 'mdi-account-tie-outline', title: this.$t('MENU.user_center'), link: 'user/center' },
/*
                        { icon: 'mdi-clipboard-multiple-outline', title: this.$t('MENU.buy_record'), link: 'buys/records' },
                        { icon: 'mdi-certificate', title: this.$t('MENU.bonus_statement'), link: 'account/statement' },

                        { icon: 'mdi-account-heart-outline', title: this.$t('MENU.loyalty_record'), link: 'buys/loyalty' },
*/
] 
                    this.tiles_group = [

                        { icon: 'mdi-trophy-variant-outline', title: this.$t('MENU.bonus_detail'), link: null,
                            children: [
                                { icon: 'mdi-basket-outline', title: this.$t('MENU.recommend'), link: 'bonus/recommend' },
                                { icon: 'mdi-bell-ring-outline', title: this.$t('MENU.active_house'), link: 'bonus/active_house' },
                                { icon: 'mdi-account-group-outline', title: this.$t('MENU.team_layer'), link: 'bonus/active_layer' },
                                
                            ]
                        },
                        
                        { icon: 'mdi-family-tree', title: this.$t('MENU.tree_structure'), link: null,
                            children: [
                                { icon: 'mdi-file-tree', title: this.$t('MENU.enroller_structure'), link: 'user/enroller' },
                                { icon: 'mdi-file-tree-outline', title: this.$t('MENU.sponser_structure'), link: 'user/sponser' }
                            ]
                        },
                    ]

                    this.serMenu()

                    rej( true )
                })
            },


            go(path) {
                this.$router.push({
                    path
                })
            },

            shareTypeMenu(share_type) {
                let o_or_t = false

                if (share_type) {
                    const menu_share = 
                        { icon: 'mdi-account-star-outline', title: this.$t('BONUS.NORMAL.lead_share_out'), link: null,
                            children: [
                                
                            ]
                        }
                    
                    if (share_type >= 1) {
                        menu_share.children.push(
                            { icon: 'mdi-vector-square', title: this.$t('MENU.manage_share'), link: 'bonus/management_info' }
                        )
                    }
                    if (share_type >= 2) {
                        menu_share.children.push(
                            { icon: 'mdi-chart-line', title: this.$t('MENU.develop_share'), link: 'bonus/development_info' },
                            // { icon: 'mdi-cube-outline', title: this.$t('MENU.inventory_record'), link: 'buys/inventory' },
                            { icon: 'mdi-account-heart-outline', title: this.$t('MENU.loyalty_record'), link: 'buys/loyalty' },
                        )
                        o_or_t = true
                    }

                    if (o_or_t) {
                        this.tiles_group.splice(0, 0, 
                            { icon: 'mdi-certificate', title: this.$t('MENU.bonus_statement'), link: null,
                                children: [
                                    { icon: 'mdi-card-account-details-star-outline', title: '會員視角', link: 'account/statement_member' },
                                    { icon: 'mdi-card-account-details-star', title: 'Admin 視角', link: 'account/statement' },
                                ]
                            }
                        )
                    } else {
                        this.tiles.push( 
                            { icon: 'mdi-certificate', title: this.$t('MENU.bonus_statement'), link: 'account/statement_member', id: 3 }
                        )
                    }

                    this.tiles_group.splice(1, 0, menu_share)
                }

                if (this.$store.state.is_admin) {

                    // 
                    this.tiles_group.splice(0, 0, 
                        { icon: 'mdi-cube-outline', title: '產品記錄', link: null,
                            children: [
                                { icon: 'mdi-clipboard-multiple-outline', title: this.$t('MENU.buy_record'), link: 'buys/records' },
                                { icon: 'mdi-database-cog-outline', title: '库存操作記錄', link: 'log/stocks' },
                            ]
                        }
                    )
                } else {
                    this.tiles.push(
                        { icon: 'mdi-clipboard-multiple-outline', title: this.$t('MENU.buy_record'), link: 'buys/records' },
                    )
                    let ee = this.tiles.filter(e => e.id == 3)
                    if ( ee.length < 1 && !o_or_t ) {
                        this.tiles.push( 
                            { icon: 'mdi-certificate', title: this.$t('MENU.bonus_statement'), link: 'account/statement_member', id: 3 }
                        )
                    }
                }
            },
            async menuNow() {
                const member_code = this.$store.state.platform_data.member_code

                if (member_code) {
                    let res = await this.conn.get(
                        this.api.bonus,
                        this.$store.state.token,
                        {
                            'user.member_code': member_code,
                            'time_period': this.$store.state.chronus.id
                        }
                    )

                    let share_type = 0
                    if (res && res.length > 0) {
                        const rank = res[0] ? res[0].Rank : 0

                        if (rank > this.conf.RANK_LEAD) {
                            if (rank < 8) {
                                share_type = 1
                            } else {
                                share_type = 2
                            }
                        }

                        if (this.$store.state.is_browser) { share_type = 2 }
                    } else {

                    }

                    this.$store.commit('saveShareType', share_type)
                    this.shareTypeMenu(share_type)
                }
            },

            outLogin() {
                this.$store.commit('changeAuth', null)
                this.$store.commit('saveBackendUser', '')

                this.$router.push({ path: '/login/' })
            },

        },
    }
</script>

<style lang="sass" scoped>
.lad_list_group
    margin-left: -8px !important
.lad_list_group > div
    padding-left: 16px !important

.qiong-list-item div
    border-radius: 0px !important
.qiong-list-item:hover div
    border-radius: 0px !important

</style>