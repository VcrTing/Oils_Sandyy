<template>
    <div class="d-ib">
        <span>
            {{ txt }}
        </span>
    </div>
</template>

<script>
    export default {
        name: '',
        props: [ 'num' ],
        computed: {
            txt() {
                let res = this.num ? this.num : 0
                if (res > 5) {
                    res = this.bonus.vip_view.VIPS_LEADER[ (res - 5) ].nick
                } 
                else if (res <= 5 && res > 0) {
                    res -= 1
                    res = this.bonus.vip_view.VIPS_SIMPLER[ res ].nick
                    res = res.substring(0, 2)
                } 
                else {
                    res = this.bonus.vip_view.VIPS_NULL.nick
                }

                return res
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>