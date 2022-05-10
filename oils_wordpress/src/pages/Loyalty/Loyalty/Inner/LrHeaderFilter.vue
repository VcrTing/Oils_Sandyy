<template>
    <div class="qiong-txt-12">
        <button v-for="(v, i) in tabs" :key="i"
            @click="switching(v.v)"
            class="btn-filter-pure"
            :class="{ 'btn-filter-pure-active': (now == v.v), 'txt-txt_x3_red': (now != v.v) }"
        >
            {{ v.txt }}
        </button>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                now: 0,

                tabs: [
                    {
                        txt: '全部',
                        v: 0,
                    },
                    {
                        txt: '入賬',
                        v: 1,
                    },
                    {
                        txt: '支出',
                        v: 2,
                    },
                    {
                        txt: '未過賬',
                        v: 3,
                    },
                    {
                        txt: 'LP 獎賞',
                        v: 4,
                    },
                ]
            }
        },
        methods: {
            switching(f) {

                this.now = f
                let condition = { }

                if (f == 0) {
                    this.$emit('sign_Father', null)
                    return
                } else if (f == 1) {
                    condition['issue_date'] = true
                } else if (f == 2) {
                    condition['is_add'] = false
                } else if (f == 3) {
                    condition['issue_date'] = false
                } else if (f == 4) {
                    condition['type'] = 'reward-LP_reward'
                }

                this.$emit('sign_Father', condition)
                
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>