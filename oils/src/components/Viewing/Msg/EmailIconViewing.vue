<template>
    <div class="d-inline">
        <v-icon :class="{ 'qiong-email-fix': true }" v-if="icon">mdi-email</v-icon>
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
.qiong-email-fix
    margin-top: -3px !important
    font-size: 10px !important
    margin-right: -2px !important

@media (min-width: 1600px) 
    .qiong-email-fix
        font-size: 14px !important

@media (min-width: 2339px) 
    .qiong-email-fix
        font-size: 16px !important
</style>