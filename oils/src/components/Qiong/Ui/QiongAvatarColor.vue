<template>
    <div class="qiong-avatar-wrapper mobie-avatar">
        <div v-if="src" :class="extra_calss">
            <img :src="link"/>
        </div>
        <!-- div class="qiong-image-blue" :class="extra_calss">
        </div -->
    </div>
</template>

<script>

    export default {
        
        props: {
            src: {
                type: String
            },
            extra_calss: {
                type: String
            }
        },
        name: '',
        data() {
            return {
                link: ''
            }
        },
        mounted() {
            if (this.src) {
                if (this.src.startsWith('http')) {
                    this.link = this.src
                } else {
                    this.link = this.conf.apiURL + this.src
                }
            }
        },
    }
</script>

<style lang="sass" scoped>
.qiong-avatar-wrapper
    width: calc( 10px + 4.6vw )
    height: calc( 10px + 4.6vw )
    overflow: hidden
    border: 1px solid white !important
    box-sizing: border-box !important

.qiong-avatar-wrapper img
    width: 100% !important
    border-radius: calc( 1px + 0.5vw )
</style>