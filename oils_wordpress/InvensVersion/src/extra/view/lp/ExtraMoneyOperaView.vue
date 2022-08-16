<template>
    <div>
        <span class="_btn_tag tag-reword" :class="'tag-rew_' + extra">
            {{ rewords[ extra ].txt }}
        </span>
    </div>
</template>

<script>
    export default {
        name: '',
        props: [
            'v'
        ],
        data() {
            return {
                rewords: {
                    issue: { txt: '發放' },
                    redeem: { txt: '購買' },
                    manual: { txt: '手動更改' },
                    transfer: { txt: '轉賬' }
                }
            }
        },
        computed: {
            extra() {
                let res = this.v
                if (res) {
                    res = res.toLowerCase()
                    res = res.replace(/\s*/g, '') }   
                res = res ? res : ''
                return res
            }
        }
    }
</script>

<style lang="sass" scoped>
.tag-reword
    margin: 0
    cursor: default
    font-weight: bold
    letter-spacing: 0.2em
    text-indent: 0.2em !important

    font-size: 0.86em
    padding: 0.3em 1em
    border-radius: 3em
    background: #f6f7f7

</style>