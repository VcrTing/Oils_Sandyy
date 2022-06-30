<template>
    <div class="qiong-img-wrapper">
        <div class="qiong-img fx-c" v-if="src">
            <img :src="src" />
        </div>
        <div class="qiong-img-empty fx-c" v-else>
            <v-icon>mdi-close</v-icon>
        </div>
        <!-- qiong-loading :bigger="-1" v-else></!-->
    </div>
</template>

<script>
import QiongLoading from './QiongLoading.vue'
    export default {
  components: { QiongLoading },
        props: {
            src: {
                type: String
            },

        },
        name: '',
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="sass" scoped>
.qiong-img-empty
    i
        color: #ccc
        border-radius: 4em
        font-size: 2em
        border: 2px solid #ccc
</style>