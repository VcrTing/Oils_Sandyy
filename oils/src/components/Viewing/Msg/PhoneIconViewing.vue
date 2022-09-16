<template>
    <div class="d-inline">
        <v-icon :class="{ 'qiong-phone-fix': true }" v-if="icon">mdi-phone</v-icon>
        <span>
            <span v-if="icon">:&nbsp;</span>
            {{ rec }}
        </span>
    </div>
</template>

<script>
    export default {
        name: '',
        props: {
            rec: {
                type: String
            },
            icon: {
                type: Boolean
            }
        },
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="sass" scoped>
.qiong-phone-fix
    transform: rotate(40deg) !important
    margin-top: -3px !important
    font-size: 10px !important
    margin-right: -2px !important

@media (min-width: 1600px) 
    .qiong-phone-fix
        font-size: 14px !important

@media (min-width: 2339px) 
    .qiong-phone-fix
        font-size: 16px !important
</style>