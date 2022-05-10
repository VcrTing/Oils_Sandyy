<template>
    <div class="qiong-line-hight-21">
        <company-viewing :company="comp"></company-viewing>
        <slot></slot>
    </div>
</template>

<script>
import CompanyViewing from '../../Company/CompanyViewing.vue'
    export default {
  components: { CompanyViewing },
        name: '',
        props: {
            typed: String
        },
        data() {
            return {
                
            }
        },
        computed: {
            comp() {
                let res = 0
                if (this.typed) {
                    if (this.typed.startsWith('尖')) {
                        res = 1
                    }
                    else if (this.typed.startsWith('火')) {
                        res = 2
                    }
                }
                return res
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>