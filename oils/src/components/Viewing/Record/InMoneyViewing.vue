<template>
    <div class="qiong-txt-10">
        <button class="btn-lp round" v-if="typed == 0">
            購買 
        </button>
        <button class="btn-lp_out round" v-else-if="typed == 1">
            兌換
        </button>
        <button class="btn-lp_extra round" v-else-if="typed == 2">
            額外
        </button>
        <button class="btn-lp_rego round" v-else-if="typed == 3">
            重啟
        </button>

        <button class="btn-lp_reward round" v-else-if="typed == 5">
            獎賞
        </button>
        <button class="btn-lp_lp_reward round" v-else-if="typed == 6">
            LP 獎賞
        </button>

        <button class="btn-lp_other round" v-else>
            其他
        </button>
    </div>
</template>

<script>
    export default {
        name: '',
        props: {
            status: String,
            is_sue_time: Boolean
        },
        data() {
            return {

            }
        },
        computed: {
            typed() {
                let res = -1
                if (this.status) {
                    if (this.status == 'issue') {
                        res = 0
                    }
                    else if (this.status == 'deactivate') {
                        res = 1
                    }
                    else if (this.status == 'reward') {
                        res = 5
                    }
                    else if (this.status == 'LP_reward') {
                        res = 6
                    }
                }

                return res
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>