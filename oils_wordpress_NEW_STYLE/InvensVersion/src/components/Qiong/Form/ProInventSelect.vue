<template>
    <select @change="fanhui" v-model="now">
        <option v-for="(item, i) in invens" :key="i" :value="item">
            {{ item.txt }}
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
                        txt: '尖沙咀倉庫',
                        v: '尖沙咀',
                        typed: 0,
                        sort_code: 'TST_centre'
                    },
                    {
                        txt: '火炭倉庫',
                        v: '火炭',
                        typed: 1,
                        sort_code: 'FT_warehouse'
                    },
                ]
            }
        },
        mounted() { this.now = this.invens[0] },
        methods: {
            fanhui() {
                this.$emit('change_Father', this.now)
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>