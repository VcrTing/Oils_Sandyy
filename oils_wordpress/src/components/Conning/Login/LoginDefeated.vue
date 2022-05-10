<template>
    <div class="defeated_sign flex-center fw-b">
        <div v-if="!defeated">
            无用户数据，登录失败！！！
        </div>
        <div v-else>
            有用户数据，无后台账户，登录失败！！！
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            defeated: {
                type: Boolean
            }
        },
        name: '',
        data() {
            return {
                
            }
        },

    }
</script>

<style lang="sass" scoped>
</style>