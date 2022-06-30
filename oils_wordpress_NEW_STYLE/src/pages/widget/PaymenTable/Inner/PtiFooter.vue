<template>
    
    <div class="qiong-td pti-tr-footer">
        <div class="qiong-wide-13">
            Commission<br/>Total&nbsp;<span class="qiong-txt-12">(US)</span>
        </div>
        <div class="qiong-wide-12">
            &nbsp;
        </div>
        <div class="qiong-wide-12">
            {{ v.FPV.toFixed(2) }}
        </div>
        <div class="qiong-wide-12">
            {{ v.APV.toFixed(2) }}
        </div>
        <div class="qiong-wide-12">
            {{ v.OPV.toFixed(2) }}
        </div>
        <div class="qiong-wide-13">
            {{ v.MPV.toFixed(2) }}
        </div>
        <div class="qiong-wide-13">
            {{ v.DPV.toFixed(2) }}
        </div>
        <div class="qiong-wide-12">
            {{ total() }}
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        props: {
            v: {
                type: Object
            }
        },
        data() {
            return {
                
            }
        },
        methods: {
            total() {
                let res = 0
                res = this.view.floatAdd(
                    res, this.v.FPV
                )
                res = this.view.floatAdd(
                    res, this.v.APV
                )
                res = this.view.floatAdd(
                    res, this.v.OPV
                )
                res = this.view.floatAdd(
                    res, this.v.MPV
                )
                res = this.view.floatAdd(
                    res, this.v.DPV
                )
                return res.toFixed(2)
            }
        },
    }
</script>

<style lang="sass" scoped>
    
</style>