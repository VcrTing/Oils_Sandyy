<template>
    
    <v-container fluid class="qiong-txt-td">

        <slot>
            
        </slot>
        <a name="bottom"></a>
        <qiong-icon-fixed @done_Father="$router.go(-1)" v-if="_root"></qiong-icon-fixed>
        <table-pager-footer :need_top="_need_top"></table-pager-footer>
        
    </v-container>
</template>

<script>
import QiongIconFixed from '../../../components/Qiong/Button/QiongIconFixed.vue'
import TablePagerFooter from '../../../components/Qiong/Footer/TablePagerFooter.vue'
import QiongSpace from '../../../components/Qiong/Ui/QiongSpace.vue'
    export default {
        components: { QiongSpace, 
            QiongIconFixed,
            TablePagerFooter
        },
        name: '',
        props: {
            _member_code: {
                type: String
            },
            _root: {
                type: Boolean
            },
            _need_top: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>