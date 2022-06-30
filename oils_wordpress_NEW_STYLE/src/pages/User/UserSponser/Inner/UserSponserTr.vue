<template>
    <div class="qiong-tr qiong-txt-tr">
        <div class="qiong-wide-35"><div class="pl-7 d-inline-block qiong-td">
            {{ $t('USER.member_display_name') }}
        </div></div>

        <div class="qiong-wide-65">

            <div class="qiong-td td-no-pr">

                <div class="qiong-wide-11">{{ $t('USER.member_code') }}</div>
                <div class="qiong-wide-15 pr-0">{{ $t('USER.sponsor_id') }}</div>
                <div class="qiong-wide-11 text-center">{{ $t('USER.phone') }}</div>
                
                <div class="qiong-wide-11 text-center">{{ $t('BONUS.PUBLIC.layer') }}</div>

                <div class="qiong-wide-9">{{ $t('USER.member_pv') }}</div>
                <div class="qiong-wide-12 pr-0">{{ $t('USER.member_level') }}</div>

                <div class="qiong-wide-13 text-center">{{ $t('ORDER.num') }}</div>
                <div class="qiong-wide-18">{{ $t('BONUS.NORMAL.team_sell_pv') }}</div>

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
        }
    }
</script>

<style lang="sass" scoped>
    
</style>