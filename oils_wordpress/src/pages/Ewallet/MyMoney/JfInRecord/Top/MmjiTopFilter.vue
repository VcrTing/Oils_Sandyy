<template>
    <div class="qiong-txt-12">
        <button v-for="(v, i) in tabs" :key="i"
            @click="now = v.v"
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
                        txt: '消費',
                        v: 1,
                    },
                    {
                        txt: '獎賞',
                        v: 4,
                    }
                ]
            }
        },
        watch: {
            now(n, o) {
                this.switching(n)
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
                    condition['type'] = 'issue'
                } else if (f == 4) {
                    condition['type'] = 'additional'
                }

                this.$emit('sign_Father', condition)
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>