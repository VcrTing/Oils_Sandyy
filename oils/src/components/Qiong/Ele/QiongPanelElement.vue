<template>
    <div>
        <v-row class="qiong-panel_element qpe-mh mobie-panel" :class="extra_class">
            <v-col :cols="cols" class="px-0 qpe_inner py-0">
                <slot>

                </slot>
            </v-col>

            <v-col v-if="need_space" class="inner-empty">
                <qiong-space :space="'7vh'">&nbsp;</qiong-space>
            </v-col>
        </v-row>
    </div>
</template>

<script>

import QiongSpace from '../../../components/Qiong/Ui/QiongSpace.vue'
import QiongPageLing from '../QiongPageLing.vue'

    export default {
        name: '',
        props: {
            need_space: {
                type: Boolean,
                default: true
            },
            cols: {
                type: Number,
                default: 12
            },
            extra_class: {
                type: String
            }
        },
        components: {
            QiongSpace,
                QiongPageLing
        },
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="sass" scoped>

</style>