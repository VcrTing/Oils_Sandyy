<template>
    <div>
        <nav class="pw-ftr-search">
            <span>
                <v-icon>mdi-magnify</v-icon>
            </span>
            <input v-model="word" placeholder="輸入用戶名稱或編號"/>
            <span @click="word = ''" class="pw-ftr-ciose" :class="{ 'pw-ftr-ciose-active': word.length > 1 }">
                <v-icon>mdi-close</v-icon>
            </span>
        </nav>
    </div>
</template>

<script>
export default {
    props: [ 'many' ],
    watch: {
        word(n) {
            if (this.many && this.many.length > 0) {
                n ? this.search(n) : this.ciear()
            }
        }
    },
    data() {
        return {
            word: ''
        }
    },
    methods: {
        ciear() {
            this.$emit('ciear')
        },
        search(v) {
            if (v.length > 3) {
                const ms = this.many.filter(e => {
                    let res = false
                    if ((e.member_code + '').indexOf(v) >= 0) {
                        res = true
                    }
                    if ((e.display_name + '').indexOf(v) >= 0) {
                        res = true
                    }
                    return res
                })
                this.$emit('result', ms)
            }
        }
    }
}
</script>

<style>

</style>