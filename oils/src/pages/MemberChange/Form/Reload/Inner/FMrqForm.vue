<template>
    <form class="form-def">

        <v-row>
            <v-col col="12" :sm="5">
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
            <v-col cols="8" :sm="12">
                <label class="sub">選擇月份</label>
                <nav class="input-timed_tool">
                    <select class="input" v-model="funnel.year" >
                        <option v-for="(v, i) in geneYear()" :key="i" :value="v">{{ v }}&nbsp;&nbsp;年</option>
                    </select>
                    <span class="mx-2 fw-b"></span>
                    <select class="input" v-model="funnel.month" @change="getNowChronu()">
                        <option v-for="(v, i) in mons" :key="i" :value="v.v">{{ v.v }}&nbsp;&nbsp;月份</option>
                    </select>
                    <span class="mx-2 fw-b"></span>
                    <!--div class="d-ib">該月份個人PV：
                        <span v-if="bonus_now">{{ bonus_now.individual_pv }}</span>
                        <span v-else>(自動檢索)</span>
                    </div-->
                </nav>
            </v-col>
        </v-row>

        <v-row>
            <v-col col="12" :sm="4">
                <label class="txt-pri">重啟會員等級</label>
                <select v-model="funnel.is_reboot" :class="{ 'option-succ': funnel.is_reboot, 'option-err': !funnel.is_reboot }">
                    <option :value="true">重啟</option>
                    <option :value="false">移除</option>
                </select>
                <!--nav class="input-with-icon">
                    <v-icon class="qiong-txt-16 i-fix">mdi-plus</v-icon>
                    <input type="number" v-model="funnel.num" placeholder="請輸入數字">
                    <span>
                        LP
                    </span>
                </nav-->
            </v-col>
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
        <net-chronus ref="chroREF"></net-chronus>

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
import NetChronus from '../../../../../extra/net/NetChronu/NetChronus.vue'
    export default {
  components: { DateSelect, WidgetUserByMemberCode,
        DialogAlert,
        QiongSpace,
        NetChronus,
     },
        computed: {
            mons() {
                const res = [ ]
                const src = this.chronus
                if (src) { src.map(e => { if (e.now_list[0] == this.funnel.year) { res.push(
                    {   chronu_id: e.id,
                        v: Number.parseInt(e.now_list[1])
                    }
                ) } }) }
                return res
            },
            bonus_now() {
                let res = null
                let src = this.user
                if (src && this.chronu_now) {
                    src = src.bonuses ? src.bonuses : [ ]
                    src.map(bb => { if(bb.time_period == this.chronu_now.id) { res = bb } })
                }
                return res
            }
        },
        data() {
            return {
                user: null,
                user_loading: false,

                msg: '',
                now_y: '',
                chronus: [ ],
                chronu_now: null,

                funnel: {
                    date: '',
                    mark: '',
                    is_reboot: true,
                    year: 0,
                    month: 1,
                    member_code: '',
                },
                loading: true
            }
        },
        async mounted() {
            this.now_y = (new Date()).getFullYear()
            this.funnel.year = this.now_y

            this.reset()
            this.chronus = await this.$refs.chroREF.lunching()
        },
        methods: {
            // geneTimed(long = 12) { let res = [ ]; for (let i= 1; i<= long; i++ ) { res.push(i) }; return res },
            geneYear(low = 2021) {
                const y = this.now_y
                let res = [ low ]
                for (let i= 0; i<= (y - low); i++ )  { res.push(low += 1) }
                return res
            },

            getNowChronu() {
                const src = this.funnel.month
                let res = this.chronus
                if (res) { res.map(e => { if (src == Number.parseInt(e.now_list[1])) { this.chronu_now = e } }) }
            },
            ////,
            reciveDate(v) {
                const o = this.view.getToday()
                let res = this.view.judge_date( v, o )
                this.funnel.date = res ? v : o
                if (!res) {
                    this.loading = true
                    setTimeout(e => { this.loading = false }, 600)
                }
            },

            validMark() {  },
            validMonth() {
                const src = this.funnel.month
                return (src && src > 0 ? true : false)
            },
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
                setTimeout(e => this.user_loading = false, 400)
            },
            submit() {
                if (!this.validCode()) { this.msg = '檢測到 用戶編號 為空或輸入有誤，請檢查輸入。' }
                else if (!this.validMonth()) { this.msg = '檢測到您未選擇 月份。' }
                else { return this.funnel }
                setTimeout(e => this.msg = '', 4400)
            },
            reset() {
                const d = new Date()
                this.loading = true
                this.setUser(null)
                this.funnel = {
                    date: this.view.getToday(),
                    mark: '',
                    member_code: '',
                    is_reboot: true,
                    year: this.now_y,
                    month: (this.mons ? this.mons[0] : -1),
                }   
                setTimeout(e => { this.loading = false }, 400)
            }
        }
    }
</script>