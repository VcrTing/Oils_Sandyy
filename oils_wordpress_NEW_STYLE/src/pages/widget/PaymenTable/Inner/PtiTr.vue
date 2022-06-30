<template>
    <div class="qiong-txt-tr">
        <div class="qiong-td text-center pti-tr">
            <div class="qiong-wide-13" style="text-align: left;">
                {{ $t('USER.member_code') }}
            </div>
            <div class="qiong-wide-12" style="text-align: left;">
                {{ $t('USER.member_level') }}
            </div>
            <div class="qiong-wide-12">
                {{ $t('BONUS.SHORT.first_buy') }}<br/>{{ $t('BONUS.SHORT.usd_recommend') }}
            </div>
            <div class="qiong-wide-12">
                {{ $t('BONUS.SHORT.active_house') }}<br/>{{ $t('BONUS.SHORT.sell_bonus') }}
            </div>
            <div class="qiong-wide-12">
                {{ $t('BONUS.SHORT.uas_team_layer') }}
            </div>
            <div class="qiong-wide-14">
                {{ $t('BONUS.NORMAL.lead_share_out') }}<br/>
                （{{ $t('BONUS.SHORT.usd_management') }}）
            </div>
            <div class="qiong-wide-13">
                {{ $t('BONUS.NORMAL.lead_share_out') }}<br/>
                （{{ $t('BONUS.SHORT.usd_development') }}）
            </div>
            <div class="qiong-wide-12">
                Total
            </div>
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
            try {
                const pr_w = document.getElementById('pti_tr').offsetWidth + 56
                document.getElementById('pti_tr_fixed').style.width = pr_w + 'px'
                
            } catch (err) {

            }
        },      
    }
</script>

<style lang="sass" scoped>
    
</style>