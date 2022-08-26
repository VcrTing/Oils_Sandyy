<template>
    <div class="active-shimmer as-pos-fix" v-if="!active">
        <div class="lock_panel t-c">
            <div
                :style="{
                    'background-image': 'url(' + lock_pic + ')',
                }"
            ></div>
            <nav class="ac-msg-paner qiong-txt-16">
                <h1 class="">资料无法展示</h1>
                <div class="">
                    <p>如有问题请联络</p>
                    <a>cs@andyy.com</a>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        props: {
            active: {
                type: Boolean
            },
            username: {
                type: String
            }
        },
        data() {
            return {
                lock_pic: require('../../assets/Index.png')
            }
        }
    }
</script>

<style lang="sass" scoped>
.lock_panel,
.lock_panel div,
    width: 100%
    height: 100%
    
.lock_panel
    position: relative
.ac-msg-paner
    position: absolute
    left: 0
    width: 100%
    height: auto
    z-index: 901
    *
        color: #000000
    h1
        color: #68B82E !important
        font-size: 3.4em
        font-size: 900
        padding-bottom: 1.6vh
    a
        text-decoration: underline
    div
        padding-top: 2vh
</style>