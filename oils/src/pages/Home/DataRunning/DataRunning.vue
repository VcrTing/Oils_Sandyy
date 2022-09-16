<template>
    <v-container class="qiong-txt-td">
        <v-row>
            <v-col class="qiong-pl-20 qiong-pr-20 running-pt">
                
                <qiong-loading :bigger="1"></qiong-loading>
                <div class="text-center running-txt">
                    加載中
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import QiongLoading from '../../../components/Qiong/Ui/QiongLoading.vue'
    export default {
        name: '',
        components: {
            QiongLoading
        },
        data() {

            return {
                
            }
        }
    }
</script>

<style lang="sass" scoped>
.running-pt
    padding-top: 30vh
.running-txt
    margin-top: -5vh
    z-index: 3000
    
</style>