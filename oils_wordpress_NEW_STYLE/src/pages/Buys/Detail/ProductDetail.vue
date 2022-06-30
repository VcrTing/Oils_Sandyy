<template>
    <v-container fluid class="qiong-txt-td">

        <!--div v-if="true">
            <member-msg-widget :_code="$store.state.user_backend.member_code"></member-msg-widget>  
            <qiong-space :space="'24px'"></qiong-space>
        </div-->

        <div class="py-4 mx-4">
            <p class="qiong-txt-tr">
                <span class="txt-sub a-hover" @click="$router.push('inventory')">庫存列表</span>
                <span class="txt-sub px-1 op-80">/</span>
                <span class="fw-b">產品詳情</span>
            </p>
        </div>

        <qiong-header>
            產品詳情
        </qiong-header>
        <qiong-panel-element :need_space="false">
            <div class="py-3 px-7 qiong-pt-10">
                <pro-detail class="mt-4" :pro="product" v-if="!loading"></pro-detail>
            </div>
        </qiong-panel-element>
        <qiong-space :space="'24px'"></qiong-space>
        
        <div class="for-row">
                <!-- div class="panel-pure pt-2">
                </!-->
                <div class="panel-pure">
                    <div class="panel-pure-header fx-s">
                        <div class="py-1 txt-txt">購買後獲得LP點數</div>
                        <!--div class="fx-r qiong-txt-12">
                                    
                            <button class="btn-shop btn-shop_buy py-1 px-5" v-if="edit_lp">
                                <v-icon class="qiong-txt-16">
                                    mdi-check
                                </v-icon>
                                保存
                            </button>
                            <span v-if="edit_lp" class="px-5 py-1 btn-sec-thin mr-6 fw-n ani-from-r" @click="edit_lp = false">
                                關閉
                            </span>

                            <button class="btn-shop btn-shop_buy py-1 px-5" v-else
                            
                                @click="edit_lp = true"
                            >
                                <v-icon class="qiong-txt-14">
                                    mdi-pencil
                                </v-icon>
                                修改
                            </button>
                        </div-->
                    </div>
                    <pro-level-lp class="" :_edit="edit_lp"></pro-level-lp>
                </div>
                <div class="panel-pure" v-if="$store.state.is_admin">
                    <div class="panel-pure-header fx-s mobie-td">
                        <div class="txt-txt">產品庫存</div>
                        <div class=" t-r">
                            <pro-i-top @plus_Father="() => $refs.piREF.plus_open()"></pro-i-top>
                        </div>
                    </div>
                    <pro-inventory v-if="invent" :ivs="invent" :pro="product" ref="piREF"></pro-inventory>
                </div>
        </div>

        <div class="pti-go-pdf hand" @click="$router.go(-1)">
            <v-icon>mdi-chevron-left</v-icon>
        </div>

        <net-inventory ref="netInvensREF"></net-inventory>
        <table-pager-footer></table-pager-footer>
    </v-container>
</template>

<script>
import TablePagerFooter from '../../../components/Qiong/Footer/TablePagerFooter.vue'
import MemberMsgWidget from '../../widget/Header/MemberMsgWidget.vue'
import ProDetail from './ProDetail/ProDetail.vue'
import ProInventory from './ProInventory/ProInventory.vue'
import ProITop from './ProInventory/Top/ProITop.vue'
import ProLevelLp from './ProLevelLp/ProLevelLp.vue'
import QiongSpace from '@/components/Qiong/Ui/QiongSpace.vue'
import QiongHeader from '../../../components/Qiong/Pager/QiongHeader.vue'
import QiongPanelElement from '../../../components/Qiong/Ele/QiongPanelElement.vue'
import NetInventory from '../../../extra/net/NetStock/NetInventory.vue'
    export default {
    components: { ProDetail, ProLevelLp, ProInventory,
        ProITop,
        TablePagerFooter,
        MemberMsgWidget,
        QiongSpace,
        QiongHeader,
        QiongPanelElement,
        NetInventory
    },
        name: '',
        data() {
            return {
                loading: true,
                product: { },
                invent: null,
                edit_lp: false,
            }
        },
        mounted() {
            let res = this.$route.query
            this.init(res && res.sku ? res.sku : null)
        },
        methods: {
            init(sku) {
                this.loading = true
                let res = this.$store.state.products;
                res = res ? res : [ ]; res = res.filter(e => sku == e.sku)
                this.product = res[ 0 ] ? res[ 0 ] : null

                this.fetchStock(sku)
                this.loading = false
            },

            async fetchStock(sku) {
                this.invent = await this.$refs.netInvensREF.one({ sku })
            }
        }

    }
</script>

<style lang="sass" scoped>

</style>