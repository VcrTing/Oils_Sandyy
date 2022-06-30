<template>
    <div class="">

        <!-- user-sponser-admin></user-sponser-admin -->

        <v-treeview multiple-active transition dense off-icon slot="tree"
            class="mt-0 qiong-the-tree w-full"

            :items="users" open-all

            v-if="mine"
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
                <ust-tree-item :_item="item" :o="open" :me="mine"></ust-tree-item>
            </template>
        </v-treeview>

        <ust-footer :result="build_res"></ust-footer>
    </div>
</template>

<script>
import UstFooter from '../Item/UstFooter.vue'
import UstTreeItem from '../Item/UstTreeItem.vue'
import UserSponserAdmin from './UserSponserAdmin.vue'
import NamedViewing from '../../../../components/Viewing/NamedViewing.vue'

import app_init from '@/common/es/app_init/index'
    export default {
        components: { UstTreeItem,
                UstFooter,
                UserSponserAdmin, 
                NamedViewing 
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
                mine: null
            }
        },
        mounted() {
            this.mine = this._me
            this.computChilds()
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
            computChilds() {
                let res = 0
                app_init._build(this.users, function(u) {
                    res += 1
                })
                this.childs_num = res - 1
            },

            done() {}
        },
    }
</script>

<style lang="sass" scoped>
    
</style>