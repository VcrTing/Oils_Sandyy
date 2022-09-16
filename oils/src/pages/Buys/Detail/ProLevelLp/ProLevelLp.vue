<template>
    <div>
        <div class="mobie-table-simple">
            <v-row class="pt-3 pu-pro-ll ">
                <v-col v-for="(v, i) in lps" :key="i" class="lps-wrapper px-0">
                    <div class="fx-c">
                        <div class="qiong-wide-25">&nbsp;</div>
                        <div class="qiong-wide-50">
                            <loyalty-ratio-one-viewing 
                            
                                :class="{ 'lps-img-active': (now == v.level) }"
                                class="lps-img hand" :ratio="v.ratio"></loyalty-ratio-one-viewing>
                        </div>
                        <div class="qiong-wide-25 lps-i-wrapper">
                            <span class="ps-c lps-i-right"
                                v-if="i < (lps.length - 1)"
                            ></span>
                            &nbsp;
                        </div>
                    </div>

                    <div class="fx-c pb-3">
                        <div class="qiong-wide-25">&nbsp;</div>
                        <div class="qiong-wide-50 lps-bottom">
                            <v-icon>
                                mdi-chevron-down
                            </v-icon>
                        </div>
                        <div class="qiong-wide-25">&nbsp;</div>
                    </div>

                    <div class="fx-c qiong-txt-16 " :class="{ 'fw-b txt-txt': (now == v.level), 'txt-blue-light': (now != v.level)  }">
                        獲得
                            <pro-ll-edit :_point="v.ratio" v-if="_edit" class="mx-2" :class="{ 'input-in-simp-active': _edit }"></pro-ll-edit>
                            <span v-else>{{ v.ratio }}</span>
                        LP
                    </div>
                </v-col>
            </v-row>
        </div>

        <!-- div class="pt-5 t-r" v-if="$store.state.is_admin">
                    <span v-if="edit" class="px-4 hand mr-3" @click="edit = false">
                        關閉
                    </span>
                    <button class="btn-shop btn-shop_buy qiong-txt-12 py-1 px-5" v-if="edit">
                        <v-icon class="qiong-txt-16">
                            mdi-check
                        </v-icon>
                        保存
                    </button>
                    <button class="btn-shop btn-shop_buy qiong-txt-12 py-1 px-5" v-else
                    
                        @click="edit = true"
                    >
                        <v-icon class="qiong-txt-14">
                            mdi-pencil
                        </v-icon>
                        修改
                    </button>
        </!-->
    </div>
</template>

<script>
import LoyaltyRatioOneViewing from '../../../../components/Viewing/Static/LoyaltyRatioOneViewing.vue'
import ProLlEdit from './Edit/ProLlEdit.vue'
    export default {
  components: { LoyaltyRatioOneViewing, ProLlEdit },
        props: [ '_edit' ],
        name: '',
        data() {
            return {
                now: 3,
                // edit: false
            }
        },
        computed: {

            lps() {
                return this.conf.SHOP_LEVEL_LP_IMG
            }
        }
    }
</script>

<style lang="sass" scoped>

.lps-wrapper
    &:hover
        .lps-bottom
            transform: translateY(6px)

.lps-img
    -webkit-filter: grayscale(94%)
    filter: grayscale(94%)
    width: 100%
    height: auto
    transition: all .32s
    &:hover
      transform: scale(1.1)  
    // border-radius: 1.2vw



/* 活躍 */
.pu-pro-ll
    margin: 0 auto
    max-width: 1366px

.lps-img-active
    filter: none
    -webkit-filter: none
    transform: scale(1.05)
    // box-shadow: 0px 0px 8px -3px rgba(0, 0, 0, 0.44)
</style>