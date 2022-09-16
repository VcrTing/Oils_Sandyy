<template>
    <div class="qiong-tr pt-0 qiong-txt-tr">
        <div class="qiong-wide-35"><div class="pl-7 d-inline-block qiong-tr">
            {{ $t('USER.member_display_name') }}
        </div></div>

        <div class="qiong-wide-65">

            <div class="qiong-tr">

                <div class="qiong-wide-14">{{ $t('USER.member_code') }}</div>
                <div class="qiong-wide-18 pr-0">{{ $t('CONTENT.member') }}{{ $t('USER.member_level') }}</div>

                <div class="qiong-wide-15">{{ $t('CONTENT.theory') }}{{ $t('CONTENT.highest') }} PT</div>
                
                <div class="qiong-wide-15">{{  $t('CONTENT.reality') }}{{ $t('CONTENT.get') }} PT</div>
                <div class="qiong-wide-18">{{ $t('BONUS.NORMAL.belong_branch_highest') }}?</div>
                <div class="qiong-wide-19">{{ $t('CONTENT.self') }}{{ $t('BONUS.SHORT.development_pv') }}</div>
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