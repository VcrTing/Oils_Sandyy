<template>
    <div class="">

        <v-treeview multiple-active transition dense off-icon slot="tree"
            class="mt-0 qiong-the-tree w-full develop-tree"
            :items="users" open-all
            v-if="users"
        >
            <template v-slot:label="{ item, open }">
                <div class="pl-7" :o="open"    
                    :class="{ 'highest-line': (item.hightest_pt > 0) }"
                >
                    <named-viewing 
                        :named="item.display_name" :index="item.index" 
                        :need_icon="item.has_child"
                        class="qiong-line-height-20"
                    ></named-viewing>
                </div>
            </template>
            <template v-slot:append="{ item, open }" :o="open">
                <!--  -->
                <bds-td 
                    :_item="item" 
                    class="qiong-line-height-20" 
                    :class="{ 'highest-line': (item.hightest_pt > 0) }"
                    :_is_me="item.member_code == me.member_code"></bds-td>
            </template>
        </v-treeview>
        <qiong-loading v-else></qiong-loading>

    </div>
</template>

<script>
import app_init from '@/common/es/app_init/index'

import TeamBonusDetail from '../../../../components/Data/Using/TeamBonusDetail.vue'
import QiongLoading from '../../../../components/Qiong/Ui/QiongLoading.vue'
import NamedViewing from '../../../../components/Viewing/NamedViewing.vue'
import BsTreeView from '../../Layout/BsTreeView.vue'
import BdsTd from './Td/BdsTd.vue'
    export default {
  components: { BsTreeView, NamedViewing, QiongLoading, BdsTd, TeamBonusDetail },
        name: '',
        props: {
            _loading: {
                type: Boolean
            },
            me: {
                type: Object
            },
            users: {
                type: Array
            }
        },
        data() {
            return {
                team_bonus_detail: [ ]
            }
        },
        async mounted() {
            
            this.team_bonus_detail = this.$store.state.team_bonus_detial

            this.switchHighest()
        },
        methods: {
            insertDirect(user, directs, rules) {
                
                const direct = directs[
                    user.member_code
                ]
                
                if (direct && direct.rank > this.conf.RANK_LEAD) {
                    if (rules) {
                        user.pt = user.development_point

                        user.hightest_pt = rules[direct.rank - 1].leader_points
                    }
                } else {
                    user.pt = 0
                    user.hightest_pt = 0
                }
            },

            switchHighest() {
                const that = this

                let directs = this.me.bonu_period.highest_ranking_member_in_direct_relation
                const rules = this.$store.state.team_bonus_detial
                rules.sort((n, o) => n.level - o.level)

                app_init._build( this.users, function(user) {

                    that.insertDirect(user, directs, rules)
                })
            }
        },
    }
</script>

<style lang="sass" scoped>
    
</style>