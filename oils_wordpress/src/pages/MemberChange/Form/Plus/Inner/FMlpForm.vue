<template>
    <form class="form-def">

        <v-row>
            <v-col cols="12" :sm="5">
                <label>用戶編號</label>
                <input type="text" v-model="funnel.member_code" @change="fetchingUser" placeholder="請輸入用戶的編號">
            </v-col>
            <v-col cols="12" :sm="7">
                <label>用戶名稱</label>
                
                <div class="fx-l input input-fix fx-l">
                    <p v-if="!user_loading">
                        <span v-if="user">
                            <v-icon class="qiong-txt-16">mdi-account-circle-outline</v-icon>
                            <span>{{ user.display_name }}</span>
                        </span>
                        <span v-else>(自動檢索)</span>
                    </p>
                    <v-icon v-else class="qiong-txt-18 ani-rotate loading">mdi-loading</v-icon>
                </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" :sm="4">
                <label class="txt-pri">更改LP積分</label>
                <nav class="input-with-icon input-with-select">
                    <!--v-icon class="qiong-txt-16 i-fix">mdi-plus</!--v-icon-->

                    <select class="input-air i" v-model="funnel.is_add">
                        <option :value="true">+&nbsp;&nbsp;增加</option>
                        <option :value="false">-&nbsp;&nbsp;減去</option>
                    </select>
                    <input type="number" v-model="funnel.num" placeholder="請輸入正數" @change="floatRES">
                    <span>
                        LP
                    </span>
                </nav>
            </v-col>
            <v-col cols="12" :sm="8">
                <label>積分結果</label>
                <div class="input input-fix">
                    <div v-if="!user_loading">
                        <p v-if="user && user.lp_wallet" class="txt-money">
                            {{ user.lp_wallet.LP_available }}&nbsp;&nbsp;LP
                            <span class="txt-sus pl-1">{{ funnel.is_add ? '+' : '-' }}</span>
                            &nbsp;&nbsp;{{ this.funnel.num ? this.funnel.num : 0 }}
                            <span class="txt-sus pl-1">=</span>
                            &nbsp;&nbsp;{{ num_res }}&nbsp;&nbsp;LP
                        </p>
                        <span v-else>(自動計算) </span>
                    </div>
                    <v-icon v-else class="qiong-txt-18 ani-rotate loading">mdi-loading</v-icon>
                </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col col="8" :sm="4" class="input-time">
                <label>入賬日期</label>
                <date-select v-if="!loading" :date="funnel.date" @timed_Father="reciveDate"></date-select>
                <div v-else class="input fx-c w-100">
                    <v-icon class="qiong-txt-18 ani-rotate_s loading">mdi-loading</v-icon>
                </div>
            </v-col>
            <!--v-col col="4" :sm="8">
                <label class="sub">日期時間</label>
                <nav class="input-timed_tool">
                    <select class="input" v-model="funnel.hour" >
                        <option v-for="(v, i) in geneTimed()" :key="i" :value="v">{{ v }}</option>
                    </select>
                    <span class="mx-2 fw-b">:</span>
                    <select class="input" v-model="funnel.minuts">
                        <option v-for="(v, i) in geneTimed(60)" :key="i" :value="v">{{ v }}</option>
                    </select>
                </nav>
            </!--v-col-->
        </v-row>

        <!--v-row>
            <v-col>
                <label><span class="">更改人員：{{ $store.state.user_backend.email }}</span>
                    <!--span>{{ funnel.hour }}:&nbsp;{{ funnel.minuts }}</span>
                </label>
            </v-col>
        </v-row-->

        <v-row>
            <v-col col="12">
                <label>備註</label>
                <input type="text" class="input-bg" v-model="funnel.mark" @change="validMark" placeholder="輸入您要備註的文字">
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
  components: { DateSelect, WidgetUserByMemberCode,
    DialogAlert,
    QiongSpace },
        computed: {
            num_res() {
                if (this.user && this.user.lp_wallet) {
                    let LP = this.user.lp_wallet.LP_available
                    let res = this.funnel.is_add ? 
                        this.view.floatAdd( LP,  this.funnel.num) : 
                        this.view.floatSub( LP,  this.funnel.num)
                    if (res <= 0) { this.funnel.num = LP; res = 0 }
                    return res
                }
                return 0
            }
        },
        data() {
            return {
                user: null,
                user_loading: false,
                msg: '',

                funnel: {
                    date: '',
                    mark: '',
                    is_add: true,
                    num: 10,
                    hour: 0,
                    minuts: 0,
                    member_code: '',
                    changer: 'ssss@123.com',
                },
                loading: true
            }
        },
        mounted() {
            this.reset()
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
                let rec = this.funnel.member_code
                rec = Number.parseInt(rec)
                rec = (rec && rec >= 203000) ? true : false
                return rec
            },
            floatRES() {
                let rec = this.funnel.num
                if (rec) { this.funnel.num = Number.parseFloat(rec).toFixed(2) }
            },
            validNum() {
                let rec = this.funnel.num
                rec = Number.parseFloat(rec)
                return (rec && rec != 0) ? true : false
            },
            async fetchingUser() {
                if (this.validCode()) {
                    this.user_loading = true
                    let res = await this.$refs.userREF.fecthingUser(this.funnel.member_code)
                    if (res) { this.setUser(res) }
                } else { this.setUser(null) }
            },
            setUser(res) {
                this.user_loading = true
                this.user = res
                setTimeout(e => this.user_loading = false, 400)
            },
            submit() {
                if (!this.validCode()) { this.msg = '檢測到 用戶編號 為空或輸入有誤，請檢查輸入。' }
                else if (!this.validNum()) { this.msg = '檢測到 LP積分數字 為空，請檢查輸入。' }
                else { return this.funnel }
                setTimeout(e => this.msg = '', 4400)
            },
            reset() {
                this.loading = true

                this.setUser(null)
                this.funnel = {
                    date: this.view.getToday(),
                    mark: '',
                    num: null,
                    hour: 23,
                    minuts: 59,
                    is_add: true,
                    member_code: '',
                    changer: 'ssss@123.com',
                }
                
                setTimeout(e => { this.loading = false }, 400)
            }
        }
    }
</script>