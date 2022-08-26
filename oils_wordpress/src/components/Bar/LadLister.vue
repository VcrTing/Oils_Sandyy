<template>

    <v-list-item-group class="qiong-br-0 qiong-list-item"
        v-model="group"
        v-if="!loading"
    >
    
        <v-list-item
            v-for="(tile, k) in tiles"
            :key="k"

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
            v-for="(tile, i) in tiles_group"
            :key="i + 100"

            no-action
            sub-group
            
            v-model="tile.active"
            :prepend-icon="tile.icon"

            class="lad_list_group"
            color="rgba(255, 255, 255, 0.6)"
            
            :id="'lister_' + i"
            @click="menuOpera(i)"
        >
            <template v-slot:activator>
                <v-list-item-content>
                    <v-list-item-title class="pl-2 fs-16">{{ tile.title }}</v-list-item-title>
                </v-list-item-content>
            </template>
            
            <lister-children-items :items="tile.children" :link="tile.link"></lister-children-items>
        </v-list-group>

        <!-- 編輯 -->
        <menu-setting-simple></menu-setting-simple>

        <arrange-lister ref="arrangeREF" v-if="!$store.state.loading" @menu_Father="init"></arrange-lister>
    </v-list-item-group>

    <div v-else>
        <qiong-loading :bigger="0"></qiong-loading>
    </div>
</template>

<script>
import QiongLoading from '../Qiong/Ui/QiongLoading.vue'
import ArrangeLister from './Arrange/ArrangeLister.vue'
import ListerChildrenItems from './Arrange/ListerChildrenItems.vue'
import MenuSettingSimple from './menu/MenuSettingSimple.vue'
    export default {
        components: {
            ArrangeLister , MenuSettingSimple, ListerChildrenItems, QiongLoading 
        },
        data() {
            return {
                group: null,

                loading: false,

                tiles: [ ],

                tiles_group: [ ]
            }
        },
        methods: {
            async serMenu() {
                const res = await this.$refs.arrangeREF.menuNow()
                if (res) {
                    res.one.map(e => { 
                        this.tiles.splice(1, 0, e)
                    })
                    
                    res.group = res.group.sort((n, o) => o.order - n.order)
                    res.group.map(e => {
                        this.tiles_group.splice(0, 0, e)
                    })

                }

                // console.log('拥有二级菜单的 菜单', this.tiles_group)
            },

            init() {
                
                return new Promise((rej, rev) => {
                    this.tiles = [
                        { icon: 'mdi-account-tie-outline', title: this.$t('MENU.user_center'), link: 'user/center' } ] 
                    this.tiles_group = [

                        { icon: 'mdi-trophy-variant-outline', title: this.$t('MENU.bonus_detail'), link: null, id: 4, active: false,
                            children: [
                                { icon: 'mdi-basket-outline', title: this.$t('MENU.recommend'), link: 'bonus/recommend' },
                                { icon: 'mdi-bell-ring-outline', title: this.$t('MENU.active_house'), link: 'bonus/active_house' },
                                { icon: 'mdi-account-group-outline', title: this.$t('MENU.team_layer'), link: 'bonus/active_layer' },
                                
                            ]
                        },
                        
                        { icon: 'mdi-family-tree', title: this.$t('MENU.tree_structure'), link: null, active: false,
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


            go(path) { this.$router.push({ path }) },


            menuOpera(i) {

                return 
                const list_LEN = this.tiles_group.length

                let _dom = 'lister_' + i

                for (let i= 0; i< list_LEN; i++ ) {

                    _dom = document.getElementById('lister_' + i)
                    // _dom.click()
                }
            }
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