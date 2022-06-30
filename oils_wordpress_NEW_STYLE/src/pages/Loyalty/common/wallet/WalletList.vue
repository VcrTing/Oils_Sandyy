<template>
    <v-row v-if="result.length > 1" class="px-7 t-c qiong-pt-15 pb-2">
        <v-col v-for="(v, i) in result" :key="i" :sm="4" :cols="12">
            <div class="taped" v-if="v" >
                <div class="tap-header" :class="{ 'txt-scd_deep_son_ipt': i == _page }"
                    v-html="v.txt" ></div>
                <div class="tap-content pt-2" :class="{ 'txt-scd_son_ipt': i == _page }"
                >{{ v.content }}<span>{{ v.unit }}</span></div>
            </div>
        </v-col>
    </v-row>
    <nav v-else class="fx-c t-c">
        <div v-for="(v, i) in result" :key="i" class="taped">
            <div class="tap-header">
                <!-- v-icon color="qiong-txt-14 op-60 ">mdi-cash</!-->
                &nbsp;&nbsp;{{ v.txt }}&nbsp;&nbsp;
                <!-- v-icon color="qiong-txt-14 op-60 ">mdi-cash</!-->
            </div>
            <div class="tap-content pt-2 op-95  money-shd">{{ v.content }}<span class="pl-3 n">{{ v.unit }}</span></div>
        </div>
        <div class="pb-3"></div>
    </nav>
</template>

<script>
    export default {
        name: '',
        props: [
            '_item',
        ],
        data() {
            return {
                loading: true,

                tutal: [
                    
                ],
            }        
        },
        computed: {
            result() {
                if (this._item.length > 1) {
                    this._item.map((e, i) => {
                        this.tutal[ i ].content = e ? e : 0
                    })
                } else {
                    this.tutal = [
                        {
                            txt: '個人賬戶積分總值',
                            content: this._item ? this._item[0] : '0',
                            unit: 'HKD'
                        }
                    ]
                }

                return this.tutal
            }
        },
    }
</script>

<style lang="sass" scoped>
.money-shd
    // text-shadow: 0px 1px 1px #00000011
</style>