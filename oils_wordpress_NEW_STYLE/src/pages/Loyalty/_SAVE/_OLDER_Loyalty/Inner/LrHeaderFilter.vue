<template>
    <div class="qiong-txt-12">
        <button class="btn-filter" :class="{ 'btn-filter_active': (option == v.v) }" v-for="(v, i) in filter" :key="i" @click="switching(v.v)">
            {{ v.txt }}
        </button>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                option: 0,

                filter: [
                    {
                        txt: '全部',
                        v: 0,
                    },
                    {
                        txt: '已過賬',
                        v: 1,
                    },
                    {
                        txt: '未過賬',
                        v: 2,
                    },
                    {
                        txt: '獎賞',
                        v: 1,
                    },
                    {
                        txt: 'LP 獎賞',
                        v: 2,
                    }
                ]
            }
        },
        methods: {
            switching(f) {
                this.option = f

                let condition = { }

                if (f == 0) {
                    this.$emit('sign_Father', null)
                    return
                } else if (f == 1) {
                    condition['issue_date'] = true
                } else if (f == 2) {
                    condition['issue_date'] = false
                }

                this.$emit('sign_Father', condition)
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>