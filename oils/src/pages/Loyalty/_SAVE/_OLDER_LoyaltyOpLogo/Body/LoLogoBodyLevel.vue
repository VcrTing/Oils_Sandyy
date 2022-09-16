<template>
    <div class="qiong-line-hight-18">
        <div class=" qiong-td qiong-txt-td" v-for="(v, i) in items" :key="i">
            <div class="qiong-wide-10 fw-b">
                {{ v.member_code }}
            </div>
            <div class="qiong-wide-22">
                {{ v.named }}
            </div>
            <div class="qiong-wide-8">
                {{ v.level_origin }}
            </div>
            <div class="qiong-wide-11">
                {{ v.level_change }}
            </div>
            <div class="qiong-wide-13">
                {{ view.ser_timed(v.in) }}
            </div>

            <div class="qiong-wide-14">
                {{ view.ser_timed(v.inner, false, false) }}
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
                        id: 1, member_code: '203001', named: 'Are You Limited', level_origin: 2,
                        level_change: 10, op: 1, changer: 'aaaaaa@123.com',
                        in: '2017-01-12 12:12', inner: '2021-12-12 12:12',
                        mark: '等級的備註',

                    },
                    {
                        id: 1, member_code: '203002', named: 'Are You Limited', level_origin: 2,
                        level_change: 3, op: 1, changer: 'aaaaaa@123.com',
                        in: '2021-01-12 12:12', inner: '2021-12-28 12:12',
                        mark: '等級的備註 2',

                    },
                ]
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>