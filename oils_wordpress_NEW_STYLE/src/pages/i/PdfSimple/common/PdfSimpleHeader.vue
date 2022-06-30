<template>
    <div>
        <div style="overflow: hidden;">

            <div style="float: left; width: 7%; padding: 0; margin: 0;">
                <img style="width: 100%; max-height: 90px;" src="https://sandyy.com/wp-content/uploads/invoice_logo_small.png">
            </div>

            <h2 style="float: left; width: 86%; text-align: center; line-height: 2.4;">
                Essence Global Co. Limited
            </h2>

            <div style="float: left; width: 7%; padding: 0; margin: 0;">&nbsp;</div>
        </div>
        
        <div style="height: 0.6em"></div>
        <div style="font-size: 1.2rem">{{ title }}</div>
        <div style="height: 1em"></div>
    </div>
</template>

<script>
import QiongLogo from '@/components/Qiong/Ui/QiongLogo.vue'
    export default {
        components: { QiongLogo },
        name: '',
        props: {
            title: {
                type: String,
                default: 'Bonus Statement'
            }
        },
        data() {
            return {
                icon: ''
            }
        },
        mounted() {
            document.title = 'Essence Global Co., Limited'
        },
    }
</script>

<style lang="sass" scoped>
.logo-title
    margin-top: 3.5vw
    margin-bottom: 1vw
</style>