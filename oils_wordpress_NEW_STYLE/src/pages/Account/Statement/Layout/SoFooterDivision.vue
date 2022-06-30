<template>
    <div class="division-wrapper">
        <div class="division division_star">
            <div class="dv-fz">
                {{ fz ? fz : 0 }}
            </div>
            <div class="dv-line"></div>
            <div class="dv-fm">
                {{ (fm <= 0) ? 1 : fm }}
            </div>
        </div>
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        props: {
            fz: {
                type: Number
            },
            fm: {
                type: Number
            }
        },
        data() {
            return {
                
            }
        },

    }
</script>

<style lang="sass" scoped>
    
</style>