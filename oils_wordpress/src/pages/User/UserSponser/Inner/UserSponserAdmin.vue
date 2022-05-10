<template>
    
    <div>
        <div class="qiong-td qiong-txt-td" v-for="(v, i) in users" :key="i">
            <div class="qiong-wide-35"><div class="qiong-pl-20 d-inline-block qiong-td">{{ v.username }}</div></div>

            <div class="qiong-wide-65">

                <div class="qiong-td">

                    <div class="qiong-wide-11">{{ v.member_code }}</div>
                    <div class="qiong-wide-13">{{ v.sponsor_id }}</div>
                    <div class="qiong-wide-12">0</div>
                    <div class="qiong-wide-10">{{ v.pv }}</div>

                    <div class="qiong-wide-11 pr-0">
                        <level-viewing :item="v.vip"></level-viewing>
                    </div>
                    <div class="qiong-wide-11 text-center">{{ v.index }}</div>
                    <div class="qiong-wide-13 text-center">獎金比例</div>
                    <div class="qiong-wide-14">賺取點數</div>
                    <div class="qiong-wide-5">&nbsp;</div>

                </div>

            </div>
        </div>
    </div>
</template>

<script>
import LevelViewing from '../../../../components/Viewing/LevelViewing.vue'
    export default {
  components: { LevelViewing },
        name: '',
        data() {
            return {
                users: [
                    {   
                        username: 'Admin',
                        member_code: '0000',
                        sponsor_id: '0000',
                        pv: 0,
                        vip: 'simper_0',
                        index: 0,
                        ratio: '0%',
                        usd: '0'
                    }
                ]
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>