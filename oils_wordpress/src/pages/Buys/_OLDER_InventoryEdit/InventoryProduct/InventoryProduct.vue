<template>
    <div class="ip-outter qiong-txt-tr fw-b">
        <div class="ip-avatar mobie-wide-100">
            <img :src="product.img" class="img img-funk ie-cover">
        </div>
        <div class="ip-content mobie-wide-100 pl-7">

            <div class="mt-6 mobie-show"></div>
            
            <div class="qiong-pl-20 cr-health">
                <div class="fw-b qiong-txt-20 ">
                    日期&nbsp;&nbsp;&nbsp;&nbsp;2021-09-21
                </div>

                <div class="qiong-td qiong-pt-15 mt-1">
                    <div class="qiong-wide-38 mobie-wide-65">
                        <p>
                            產品中文名
                        </p>
                        <p class="fw-n">
                            {{ product.name_cn }}
                        </p>
                    </div>
                    <div class="qiong-wide-62 mobie-wide-35">
                        <p>
                            SKU
                        </p>
                        <p class="fw-n">
                            {{ product.sku }}
                        </p>
                    </div>
                </div>

                <div class="qiong-td qiong-pt-15 mt-1">
                    <div class="qiong-wide-38 mobie-wide-65">
                        <p>
                            產品英文名
                        </p>
                        <p class="fw-n">
                            {{ product.name_en }}
                        </p>
                    </div>
                    <div class="qiong-wide-62 mobie-wide-35">
                        <p>
                            PV
                        </p>
                        <p class="fw-n">
                            {{ product.pv }}
                        </p>
                    </div>
                </div>

                <div class=" qiong-pt-10 mt-1">
                    <a class="ie-a" target="_blank" :href="product.link">
                        更多信息 <v-icon class="qiong-txt-18">mdi-chevron-right</v-icon>
                    </a>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
  components: {  },
        name: '',
        props: {
            product: Object
        },
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="sass" scoped>
.ip-avatar,
.ip-content
    line-height: 1.8
    // float: left
    p 
        margin: 0
        padding: 0
    
.ip-avatar
    width: 24%
.ip-content
    width: 76%

.ip-outter
    display: flex
    align-items: center
    justify-content: center

    flex-wrap: wrap

.ie-a
    color: #262626
    transition: all .4s
    text-decoration: none
    *
        color: #727272

    &:hover 
        color: #291e81
        *
            color: #291e81

.ie-cover
    border: none !important
    box-shadow: 0px 2px 8px -4px rgba(0, 0, 0, 0.7)
</style>