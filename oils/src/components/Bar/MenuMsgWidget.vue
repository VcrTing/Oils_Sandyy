<template>

    <v-list nav dense class="px-0">
        <lad-avatar
            :_avatar="face"
            :_need_avatar="need_avatar"
            :_bonus="bonus"
            :_me="mine"

            v-if="loading"
        ></lad-avatar>

        <lad-msg class="qiong-pt-5 mt-1 pl-4 qiong-line-hight-18" 
            :_bonus="bonus"
            :_me="mine"
            
            v-if="loading"
        ></lad-msg>
        <div v-else class="Lad_Three_Line pt-9">
            <qiong-loading></qiong-loading>
        </div>

    </v-list>

</template>

<script>
import LadBonus from './Inner/LadBonus.vue'
import LadMsg from './Inner/LadMsg.vue'
import QiongGradientLine from '../Qiong/Ui/QiongGradientLine.vue'
import QiongLoading from '../Qiong/Ui/QiongLoading.vue'
import LadAvatar from './Inner/LadAvatar.vue'

    export default {
  components: { LadBonus, LadMsg, QiongGradientLine, LadAvatar, QiongLoading },
        name: '',
        props: {
            id: {
                type: String,
                default: ''
            },
            need_avatar: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                face: require('../../assets/FACE.jpg'),
                member_code: null,

                mine: null,
                bonus: null,
                _chronus: null,

                loading: false
            }
        },
        async mounted() {

            this.loading = false

            try {
                // 赋值函数
                this._assign(this.$store.state.user_backend.member_code)

                // 获取当前 月份
                this._chronus = await this.chronuLoading()
                
                // 获取数据
                if (this._chronus) {
                    this._chronus = this._chronus[0]
                    await this.bonusLoading(this._chronus.id)

                    await this.meLoading()

                    if (this.mine) { this.loading = true }
                }
            } catch(e) {
                this.loading = true
            }
        },
        methods: {
            _assign(_id = '') {
                if (this.id) { 
                    this.member_code = this.id
                } else {
                    this.member_code = _id
                }
            },

            async chronuLoading() {
                const d = this.view.getToday()
                return await this.conn.get(
                    this.api.chronus, this.$store.state.token,
                    { '_where[start_lte]': d, '_where[end_gte]': d }
                )
            },

            async bonusLoading(chronu_id) {

                const res = await this.conn.get(
                    this.api.bonus,
                    this.$store.state.token,
                    {
                        'time_period': chronu_id,
                        'user.member_code': this.member_code
                    }
                )

                if (res) {
                    this.bonus = res[0]
                }
            },

            async meLoading() {
                const res = await this.conn.get(
                    this.api.users,
                    this.$store.state.token,
                    {
                        'member_code': this.member_code
                    }
                )
                if (res) {
                    this.mine = res[0]
                }
            }
        },
    }
</script>

<style lang="sass" scoped>
    
.Lad_Two_Line
    height: 38px

.Lad_Three_Line
    min-height: 106px

</style>