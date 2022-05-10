<template>
    <div class="qiong-line-hight-18">
        <div class=" qiong-td qiong-txt-td" v-for="(v, i) in items" :key="i">
            <div class="qiong-wide-10 fw-b">
                {{ v.member_code }}
            </div>
            <div class="qiong-wide-22">
                {{ v.named }}
            </div>
            <div class="qiong-wide-11">
                {{ v.res }}
            </div>
            <div class="qiong-wide-15">
                {{ v.changer }}
            </div>
            <div class="qiong-wide-10">
                {{ view.ser_timed(v.in) }}
            </div>

            <div class="qiong-wide-10">
                {{ view.ser_timed(v.inner) }}
            </div>
            <div class="qiong-wide-17">
                {{ v.mark }}
            </div>
            <div class="qiong-wide-5">
                <span class="txt-pri">
                    檢視
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                items: [
                    {
                        id: 1, member_code: '203001', named: '名稱',
                        res: 10, op: 1, changer: 'aaaaaa@123.com',
                        in: '2017-01-12 12:12', inner: '2021-12-12 12:12',
                        mark: '你是誰啊？？？',

                    },
                    {
                        id: 2, member_code: '203002', named: '名稱名稱名稱名稱',
                        res: 10, op: 1, changer: 'caaaaa@123.com',
                        in: '2017-01-12 12:12', inner: '2021-12-12 12:12',
                        mark: '你是誰啊？？？',

                    }
                ]
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>