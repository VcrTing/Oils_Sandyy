<template>
    <select @change="$emit('change_Father', now)" v-model="now">
        <option v-for="(v, i) in invens" :key="i" :value="v">
            {{ v.txt }}
        </option>
    </select>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                now: null,
                invens: [
                    {
                        txt: '加貨(增加)',
                        v: '加貨',
                        typed: 0,
                        add: true
                    },
                    {
                        txt: '減貨(減去)',
                        v: '減貨',
                        typed: 1,
                        add: false
                    },
                    {
                        txt: '樣品消耗(減去)',
                        v: '樣品消耗',
                        typed: 3,
                        add: false
                    },
                    {
                        txt: '壞貨(減去)',
                        v: '壞貨',
                        typed: 4,
                        add: false
                    },
                    /*
                    {
                        txt: '換貨',
                        v: '換貨',
                        typed: 5,
                        add: false
                    },
                    */
                ]
            }
        },
        mounted() {
            this.now = this.invens[ 0 ]
        }
    }
</script>

<style lang="sass" scoped>
    
</style>