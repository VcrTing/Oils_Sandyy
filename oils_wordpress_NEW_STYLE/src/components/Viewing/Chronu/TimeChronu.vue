<template>

    <div class="">
        <v-icon class="qiong-txt-14 i-chronu-edit an_lefter_s" @click="$router.push('/home/chronus')">mdi-pencil</v-icon>
        {{ $t('CONTENT.bonus_period') }}&nbsp;:&nbsp;
        {{ $t('CONTENT.from') }}
        {{ view.ser_timed($store.state.chronus.start, true) }}
        {{ $t('CONTENT.to') }}
        &nbsp;{{ view.ser_timed($store.state.chronus.end, true) }}
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