<template>
    <form class="form-def form-transfer">

        <v-row>
            <v-col cols="12" :sm="5">
                <label>收款人編號</label>
                <input type="text" v-model="funnel.to_member_code" @change="fetchingUser" placeholder="請輸入收款人的編號">
            </v-col>
            <v-col cols="12" :sm="7">
                <label>收款人</label>
                
                <div class="fx-l input input-fix fx-l">
                    <p v-if="!user_loading">
                        <span v-if="user">
                            <v-icon class="qiong-txt-16">mdi-account-circle-outline</v-icon>
                            <span>
                                {{ user.display_name }}
                            </span>
                        </span>
                        <span v-else>
                            無
                        </span>
                    </p>
                    
                    <v-icon v-else class="qiong-txt-18 ani-rotate loading">mdi-loading</v-icon>
                </div>
            </v-col>
        </v-row>
        <v-row class="transfer-wrapper">
            <v-col col="12" :sm="4" cols="12">
                <label class="form-money">轉賬金額</label>
                <input type="number" class="input-transfer" v-model="funnel.quantity" placeholder="請輸入正數">
            </v-col>
            <v-col col="12" :sm="8" cols="12">
                <label>我的積分總值</label>
                
                <div class="input input-fix txt-money fw-b">
                    {{ hkd }}&nbsp;&nbsp;HKD

                    <span v-if="hkd <= 1" class="pl-1">
                        (您的可用余額過少)
                    </span>
                </div>

            </v-col>
        </v-row>

        <widget-user-by-member-code ref="userREF"></widget-user-by-member-code>

        <div v-if="msg" class="pt-3 qiong-txt-16 anime-later">
            <qiong-space :space="'0.5vw'"></qiong-space>
            <dialog-alert>{{ msg }}</dialog-alert>
        </div>
    </form>
</template>

<script>
import WidgetUserByMemberCode from '@/components/Data/Children/WidgetUserByMemberCode.vue'
import DateSelect from '@/components/Qiong/Dialog/DateSelect.vue'
import QiongSpace from '@/components/Qiong/Ui/QiongSpace.vue'
import DialogAlert from '@/components/Shimmer/Alert/DialogAlert.vue'
    export default {
        components: { DateSelect, WidgetUserByMemberCode, DialogAlert, QiongSpace },
        props: {
            'hkd': {
                type: Number, default: 0
            }
        },
        data() {
            return {

                user: null,
                user_loading: false,

                msg: '',

                funnel: {
                    num: 0,
                    to_member_code: '',
                },
                loading: true
            }
        },
        mounted() {
            this.reset()
        },
        watch: {
            'funnel.num': function(n, o) {
                if (n) {
                    n = Number.parseFloat(n)
                    if (isNaN(n) && n < 0) { this.funnel.quantity = 0 } }
            }
        },
        methods: {
            geneTimed(long = 24) {
                let res = [ ]
                for (let i= 0; i< long; i++ ) { res.push(i) }; return res
            },

            reciveDate(v) {
                const o = this.view.getToday()
                let res = this.view.judge_date( v, o )

                this.funnel.date = res ? v : o

                if (!res) {
                    this.loading = true
                    setTimeout(e => { this.loading = false }, 600)
                }
            },

            validHour() {  },

            validMark() { },
            validCode() {
                let rec = this.funnel.to_member_code
                rec = Number.parseInt(rec)
                rec = (rec && rec >= 203000) ? true : false
                return rec
            },
            validNum() {
                let rec = this.funnel.quantity
                rec = Number.parseInt(rec)
                rec = (rec && rec != 0) ? true : false
                rec = rec > this.hkd ? false : true
                return rec
            },
            async fetchingUser() {
                if (this.validCode()) {
                    this.user_loading = true
                    let res = await this.$refs.userREF.fecthingUser(this.funnel.to_member_code)
                    if (res) { this.setUser(res) }
                } else { this.setUser(null) }
            },
            setUser(res) {
                this.user_loading = true
                this.user = res
                setTimeout(e => this.user_loading = false, 400)
            },
            //
            alert(_m) {
                this.msg = _m
                setTimeout(e => this.msg = '', 4400)
            },
            submit() {
                if (!this.validCode()) { this.msg = '檢測到 用戶編號 為空或輸入有誤，請檢查輸入。' }
                else if (!this.validNum()) { this.msg = '檢測到 LP積分數字有誤，請檢查輸入。' }
                else { return this.funnel }
                setTimeout(e => this.msg = '', 4400)
            },
            reset() {
                this.loading = true

                this.setUser(null)
                this.funnel = {
                    quantity: null,
                    to_member_code: '',
                }
                
                setTimeout(e => { this.loading = false }, 400)
            }
        }
    }
</script>