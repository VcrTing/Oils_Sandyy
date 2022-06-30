<template>
    <div class="qiong-txt-12" v-if="bigger == 0">
        <div class="round btn-active" v-if="is_active">
            <v-icon class="d-inline" size="16">mdi-check</v-icon>
            <span class="mini-hide">
                {{ $t('STATUS.active') }}
            </span>
        </div>
        <div class="round btn-unactive " v-else>
            <v-icon class="d-inline" size="16">mdi-window-close</v-icon>
            <span class="mini-hide">
                {{ $t('STATUS.active') }}
            </span>
        </div>
    </div>

    <div class="" v-else-if="bigger == -1">
        <div class="round btn-active btn-active_s" v-if="is_active">
            <v-icon class="qiong-txt-13 pr-s">mdi-check</v-icon>
            <span class="mini-hide">
                {{ $t('STATUS.active') }}
            </span>
        </div>
        <div class="round btn-unactive btn-active_s" v-else>
            <v-icon class="qiong-txt-12 pr-s">mdi-window-close</v-icon>
            <span class="mini-hide">
                {{ $t('STATUS.active') }}
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            is_active: {
                type: Boolean
            },
            bigger: {
                type: Number,
                default: 0
            }
        },
        name: '',
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>