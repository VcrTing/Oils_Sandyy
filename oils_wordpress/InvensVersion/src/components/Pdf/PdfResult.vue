<template>
    <div class="text-right">

        <div class="qiong-td"
            v-for="(v, i) in res" :key="i"
        >
            <div class="qiong-wide-60">&nbsp;</div>

            <div class="qiong-wide-28">
                {{ v.txt }}:
            </div>

            <div class="qiong-wide-12 pr-0 fw-b"
                v-html="v.content"></div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            res: {
                type: Array
            },
        },
        name: '',
        components: {
      
        },
        data() {
            return {
                test: [
                    {
                        txt: '奖金',
                        content: 'HK&nbsp;135.0'
                    },
                    {
                        txt: '奖金',
                        content: 'HK&nbsp;135.0'
                    },
                ]
            }
        },
        mounted() {
            
        },
    }
</script>

<style lang="sass" scoped>
    
</style>