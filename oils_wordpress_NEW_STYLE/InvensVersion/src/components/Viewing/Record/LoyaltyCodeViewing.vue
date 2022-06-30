<template>
    <div class="lp-code fx-l">
        <v-icon color="qiong-txt-12">mdi-cash</v-icon>&nbsp;&nbsp;{{ sku }}
    </div>
</template>

<script>
    export default {
        name: '',
        props: {
            sku: String,
            need_icon: Boolean
        },
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>