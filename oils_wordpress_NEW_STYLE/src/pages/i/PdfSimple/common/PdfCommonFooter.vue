<template>
    <div>
        <div style="text-align: right; overflow: hidden" v-for="(v, i) in res" :key="i">
            <div style="width: 80%; float: left;">
                {{ v.txt }}
            </div>
            <div style="width: 20%; float: left;" v-html="v.content">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            res: {
                type: Array
            }
        },
        name: '',
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>