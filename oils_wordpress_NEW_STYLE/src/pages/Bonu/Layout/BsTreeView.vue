<template>
    
        <v-treeview multiple-active transition dense off-icon slot="tree"
            class="mt-0 qiong-the-tree w-full"
            :items="_items" open-all
        >
            <slot></slot>
        </v-treeview>
</template>

<script>
import QiongLoading from '../../../components/Qiong/Ui/QiongLoading.vue'
    export default {
        name: '',
        components: {


                QiongLoading            
        },
        props: {
            _loading: {
                type: Boolean
            },
            _items: {
                type: Array
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