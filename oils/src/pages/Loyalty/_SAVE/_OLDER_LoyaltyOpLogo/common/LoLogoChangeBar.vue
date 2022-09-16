<template>
    <div>
        <button class="btn-sec-out py-1 px-5 round mr-3" @click="$router.push('lp_plus')">
            <v-icon class="qiong-txt-17 i-fix">mdi-plus</v-icon>
            增加LP積分
        </button>
        <button class="btn-sec-out py-1 px-5 round" @click="$router.push('level_edit')">
            <v-icon class="qiong-txt-14">mdi-pen</v-icon>
            更改會員等級
        </button>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                now: ''
            }
        },
        mounted() {
            let res = this.$route.path
            res = res.split('/')
            res = res ? res[ ( res.length - 1 ) ] : null

            if (res) { }
        },
    }
</script>

<style lang="sass" scoped>
    
</style>