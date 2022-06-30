<template>
    <div class="">

        <v-treeview multiple-active transition dense off-icon slot="tree"
            class="mt-0 qiong-the-tree w-full"

            :items="users" open-all

            v-if="!loading"
        >
            <template v-slot:label="{ item, open }">
                <div class="pl-7" @click="done(open)">
                    <named-viewing 
                        :named="item.display_name" :index="item.index" 
                        :need_icon="item.has_child"
                    ></named-viewing>
                </div>
            </template>
            <template v-slot:append="{ item, open }">
                <uet-tree-item :_item="item" :o="open" :me="mine"></uet-tree-item>
            </template>
        </v-treeview>
        <qiong-loading v-else></qiong-loading>
    
        <uet-footer :result="build_res"></uet-footer>
    </div>
</template>

<script>
import NamedViewing from '../../../../components/Viewing/NamedViewing.vue'
import UetFooter from '../Item/UetFooter.vue'
import UetTreeItem from '../Item/UetTreeItem.vue'

import app_init from '@/common/es/app_init/index'
import QiongLoading from '../../../../components/Qiong/Ui/QiongLoading.vue'

    export default {
        components: { 
            NamedViewing ,
                UetFooter,
                UetTreeItem,
                QiongLoading
        },

        name: '',
        props: {
            _me: {
                type: Object
            },
            users: {
                type: Array
            }
        },
        data() {
            return {
                mine: null,

                loading: true,
                childs_num: 0,
                usd_recommend: 0
            }
        },
        async mounted() {
            this.mine = this._me
            
            await this.insertReferral()
            this.computRecommend()
        },
        computed: {
            build_res() {
                if (this.mine) {

                    return [
                        {
                            txt: this.$t('USER.childs_num'),
                            content: this.childs_num
                        },
                    ]
                }
            },
        },

        methods: {

            computRecommend() {
                let res = 0
                this.mine.bonu_period.referral_bonus.map(e => {
                    res = this.view.floatAdd(
                        res,
                        e.bonus_pv
                    )
                })
                this.usd_recommend = res
            },

            insertReferral() {
                const that = this
                return new Promise((rej, rev) => {
                    let res = 0
                    app_init._build(this.users, function(u) {
                        res += 1
                        
                        for (let rb of that.mine.bonu_period.referral_bonus) {
                            if (rb.member_code == u.member_code) {
                                u.bonu_period.pv_recommend = rb.order_pv
                            } 
                        }
                    })
                    that.childs_num = res - 1

                    setTimeout(e => { this.loading = false }, 200)
                    rej( true )
                })
            },

            done() {

            }
        },
    }
</script>

<style lang="sass" scoped>
    
</style>