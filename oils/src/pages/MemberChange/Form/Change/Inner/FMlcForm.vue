<template>
    <form class="form-def">
        <v-row>
            <v-col cols="12" :sm="5">
                <label>用戶編號</label>
                <input type="text" v-model="funnel.member_code" @change="fetchingUser" placeholder="請輸入用戶的編號">
            </v-col>
            <v-col cols="12" :sm="7">
                <label>所屬用戶</label>
                
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
        <v-row>
            <v-col cols="12" :sm="4">
                <label class="txt-pri">更改等級</label>
                <nav class="input-with-icon">
                    <v-icon class="qiong-txt-15 i-fix">mdi-pen</v-icon>
                    <input type="number" class="fw-b pl-num" v-model="funnel.num" placeholder="請輸入新的等級數字">
                    <span>
                        級
                    </span>
                </nav>
            </v-col>
            <v-col cols="12" :sm="8">
                <label>用戶原等級信息</label>
                
                <div class="input input-fix">
                    <span v-if="user">
                        <span class="fw-b ">
                            {{ user.lp_wallet.rank }} 級
                        </span>
                        <span class="txt-sub">
                            ，擁有{{ user.lp_wallet.consecutive_month }}個月的忠誠度
                        </span>
                    </span>
                    <span v-else class="sub">(自動檢索)</span>
                </div>
            </v-col>
        </v-row>

        <!--v-row>
            <v-col>
                <label><span class="">更改人員：{{ $store.state.user_backend.email }}</span>
                    <!--span>{{ funnel.hour }}:&nbsp;{{ funnel.minuts }}</span>
                </label>
            </v-col>
        </v-row-->

        <!--v-row>
            <v-col cols="8" :sm="4" class="input-time">
                <label>等級生效時間</label>
                <!--date-select v-if="!loading" :date="funnel.date" @timed_Father="reciveDate"></date-select>
                <div v-if="!loading" class="input input-fix">
                    一天內生效
                </div>
                <div v-else class="input fx-c w-100">
                    <v-icon class="qiong-txt-18 ani-rotate_s loading">mdi-loading</v-icon>
                </div>
            </v-col>
            <!-- v-col cols="4" :sm="8">
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
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <label>時間結果：{{ funnel.date }}&nbsp;&nbsp;&nbsp;{{ funnel.hour }}:&nbsp;{{ funnel.minuts }}</label>
            </v-col>
        </v-row -->

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
import DialogAlert from '@/components/Shimmer/Alert/DialogAlert.vue'
import QiongSpace from '../../../../../components/Qiong/Ui/QiongSpace.vue'
    export default {
  components: { DateSelect, WidgetUserByMemberCode,
        DialogAlert, QiongSpace
    },
        name: '',
        data() {
            return {
                user: null,
                user_loading: false,

                msg: '',

                funnel: {
                    mark: '',
                    num: 10,
                    num_origin: 2,
                    member_code: '',
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
            validNum() {
                let rec = this.funnel.num
                rec = Number.parseInt(rec)
                rec = (rec && rec != 0) ? true : false
                return rec
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
                console.log('LP LEVEL 用户的数据 =', res)
                setTimeout(e => this.user_loading = false, 400)
            },

            submit() {
                if (!this.validCode()) { this.msg = '檢測到 用戶編號 為空或輸入有誤，請檢查輸入。' }
                else if (!this.validNum()) { this.msg = '檢測到 會員等級數字 為空，請檢查輸入。' }
                else { 
                    if (this.user.member_code) {
                        this.funnel.code = this.user.member_code
                        return this.funnel
                    } else { this.msg = '未檢測到用戶的編號。' }
                }
                setTimeout(e => this.msg = '', 4400)
            },
            reset() {
                this.loading = true

                this.setUser(null)
                this.funnel = {
                    mark: '',
                    num: null,
                    num_origin: 0,
                    member_code: '',
                }
                
                setTimeout(e => { this.loading = false }, 400)
            }
        }
    }
</script>

<style lang="sass" scoped>
.pl-num
    padding-left: 4em !important
</style>