<template>
    <div class="so-go-top">
        <div class="qiong-td">
            <div class="qiong-wide-8"></div>
            <div class="qiong-wide-84 mobie-wide-100 pr-0 fx-r0">
                <div class="fx-r0">
                    <div class="so-go-top-btn" @click="toDown">
                        <v-icon>
                            mdi-arrow-down
                        </v-icon>
                        {{ $t('BONUS.NORMAL.lead_share_out') }}
                    </div>
                </div>
            </div>
            <div class="qiong-wide-8"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                
            }
        },
        mounted() {
            
        },
        methods: {
           toDown() {
               document.querySelector("#share_out").scrollIntoView(true);
           }
        },
    }
</script>

<style lang="sass" scoped>
    
</style>