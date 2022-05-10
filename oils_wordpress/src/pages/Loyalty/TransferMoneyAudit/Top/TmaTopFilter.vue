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
        props: [ '_many', '_many_origin' ],
        data() {
            return {
                now: 0,

                tabs: [
                    {
                        txt: '全部',
                        v: 0,
                    },
                    {
                        txt: '審核中',
                        v: 1,
                    },
                    {
                        txt: '審核通過',
                        v: 2,
                    },
                ]
            }
        },
        watch: {
            now(n, o) {
                let src = this.switching(n)

                src = (src == null) ? this._many_origin : this._many.filter(_m => (_m.status == src) )
                this.$emit('sign_Father', src)
            }
        },
        methods: {
            switching(f) {
                let status = 0

                if (f == 0) {
                    return null
                } else if (f == 1) {
                    status = 0
                    // condition['is_approved'] = true
                } else if (f == 2) {
                    status = 1
                    // condition['is_approved'] = false
                }
                return status
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>