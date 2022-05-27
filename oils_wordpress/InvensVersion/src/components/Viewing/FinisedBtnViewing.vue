<template>
    <div class="text-center">
        <div class="btn-finished round" 
            v-if="is_finished"
        >
            <v-icon size="16" class="pr-s">mdi-check</v-icon>

            <div class="d-inline-block qiong-txt-12 mini-hide">
                <span class="mini-hide">
                    {{ $t('STATUS.finished') }}
                </span>
            </div>
        </div>
        <div class="btn-finished btn-unfinished-red qiong-txt-12" 
            v-else
        >
            <v-icon size="16" class="pr-s">mdi-window-close</v-icon>

            <div class="d-inline-block">
                <span class="mini-hide">
                    {{ $t('STATUS.unfinished') }}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        props: {
            rec: {
                type: Number
            },
            target: {
                type: Number
            }
        },
        computed: {
            is_finished() {
                if (this.target) {
                    const res = this.rec <= 0 ? false : (this.rec >= this.target)
                    return res
                }
                return true
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>