<template>
<div>
    <router-view v-if="can"></router-view>
    <qiong-loading :bigger="2"  v-else></qiong-loading>
</div>
</template>

<script>
    import QiongLoading from './components/Qiong/Ui/QiongLoading.vue'
    export default {
        components: { QiongLoading },
        computed: {
            //
            can() {
                let res = true
                if (this.iayout == this.conf.LAYOUT.WORDPRESS) {
                    if (!this.chron) { res = false }
                } return res
            },
            //
            iayout() {
                return this.$store.state.layout
            },
            chron() {
                return this.$store.state.chronus
            }
        },
        mounted() {

        }
    }
</script>