<template>
    <div>

        店鋪樣品消耗：&nbsp;&nbsp;<input class="input ie-input" type="number" v-model="v">
    </div>
</template>

<script>
import lineFormWrapper from '@/components/Qiong/Form/lineFormWrapper.vue'
    export default {
  components: { lineFormWrapper },
        name: '',
        props: {
            broken: Number
        },
        data() {
            return {
                v: 10
            }
        },
        watch: {
            v(n, o) {
                if (n < 0) {
                    this.v = Math.abs(n)
                }
            }
        },
        mounted() {
            this.v = this.broken
        },
    }
</script>

<style lang="sass" scoped>
    
</style>