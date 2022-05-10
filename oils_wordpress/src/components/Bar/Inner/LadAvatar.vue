<template>

   <div class="fs-12 pl-4">
        <div class="qiong-td d-flex menu-avatar">
            <div class="qiong-wide-38">
                
                <img :src="avatar" v-if="!loading">
                <div class="def-avatar" v-else></div>
            </div>
            <div class="qiong-wide-12"></div>
            <div class="qiong-wide-25 fi-bottom hight-avatar">

                <img :src="avatar_top" v-if="!loading">
                <div class="def-avatar" v-else></div>
            </div>
            <div class="qiong-wide-25"></div>
        </div>

        <div class="qiong-td mt-1" v-if="!loading">
            <div class="qiong-wide-50">
                {{ $t('CONTENT.now') }}{{ $t('CONTENT.level') }}：{{ level }}
            </div>
            <div class="qiong-wide-50">
                {{ $t('CONTENT.highest') }}{{ $t('CONTENT.level') }}：{{ level_top }}
            </div>
        </div>
        <div class="qiong-td mt-1" v-else>
            <div class="qiong-wide-50">
                {{ $t('CONTENT.now') }}{{ $t('CONTENT.level') }}：{{ def_name }}
            </div>
            <div class="qiong-wide-50">
                {{ $t('CONTENT.highest') }}{{ $t('CONTENT.level') }}：{{ def_name }}
            </div>
        </div>
   </div>

</template>

<script>
import LevelViewing from '../../Viewing/LevelViewing.vue'
import LevelImageViewing from '../../Viewing/LevelImageViewing.vue'

import app_init from '@/common/es/app_init/index'

    export default {
        name: '',
        components: {
            LevelImageViewing,
                LevelViewing
        },
        props: {
            _need_avatar: Boolean,
            _avatar: String,
            _bonus: Object,
            _me: Object
        },
        data() {
            return {

                is_top: false,
                def_name: '會員',


                vip: null, 
                rank: null,
                vip_code: null,

                top_vip: null,
                top_rank: 10,
                top_vip_code: null,

                loading: true,

                media_root: '/static/',
                def_avatar: '/static/ICONS/vip_member.png'
            }
        },
        mounted() {
            this.init()

            setTimeout(e => { this.loading = false }, 200)
        },
        methods: {

            init() {
                // 
                this.rank = this._bonus ? this._bonus.Rank : 0
                this.vip_code = this.rank_to_code(this.rank)
                this.vip = this.code_to_vip(this.vip_code)

                //
                this.top_rank = this._me.top_rank
                
                if (this.top_rank) { 
                    this.top_rank = Number.parseInt(this.top_rank) 
                    this.top_rank = this.top_rank < 6 ? 0 : this.top_rank 
                } else { 
                    this.top_rank = 0 
                }

                this.top_vip_code = this.rank_to_code(this.top_rank)
                this.top_vip = this.code_to_vip(this.top_vip_code)
            },

            //
            rank_to_code(rk) {
                return app_init.vip_view.rank_to_code(rk)
            },
            code_to_vip(code) {
                return app_init.vip_view.vip_now( code )
            }
        },

        computed: {

            rank_res() {
                if (this.is_top) {
                    return 10
                }
                return this._bonus.Rank
            },

            // 
            level_top() {
                if (this.top_vip) {
                    return this.top_vip.nick
                }
            },
            avatar_top() {
                if (this.top_vip) {
                    return this.media_root + this.top_vip.img
                }
            },

            // 
            level() {
                if (this.vip) {
                    return this.vip.name
                }
            },
            avatar() {

                if (this.vip) {
                    return this.media_root + this.vip.img
                }
            },
        }
    }
</script>

<style lang="sass" scoped>
.def-avatar
    width: 100%
    padding: 50% 0
    border-radius: 50%
    border: 1px solid #f5f5f5
    background: #f5f5f5


.def-named
    min-height: 30px
</style>