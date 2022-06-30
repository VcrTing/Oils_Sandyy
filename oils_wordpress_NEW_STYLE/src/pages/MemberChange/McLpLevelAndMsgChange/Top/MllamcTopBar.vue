<template>
    <div class="qiong-txt-12 mobie-pt-12">
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
                now: 2,

                tabs: [
                    {
                        txt: 'LP 積分變更',
                        v: 2,
                    },
                    {
                        txt: 'LP 等級變更',
                        v: 1,
                    }
                ]
            }
        },
        mounted() {
            
        },
        methods: {
            switching(f) {
                this.now = f

                this.$emit('sign_Father', f)
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>