<template>
        <div class="q_modal">
            <div class="modal-title" @click="closed">
                <div>
                    {{ title }}
                </div>

                <v-btn icon small>
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </div>
            <qiong-panel-element :need_space="false" class="">
                <div class="px-7 modal-content">
                    <slot>

                    </slot>
                </div>
            </qiong-panel-element>
        </div>
</template>

<script>
import QiongPanelElement from '../Ele/QiongPanelElement.vue'
    export default {
        components: { QiongPanelElement },
        name: '',
        props: {
            title: String
        },
        data() {
            return {
                
            }
        },
        methods: {
            closed() {
                this.$store.commit('saveModal', 0)
            },
            opened() {
                this.$store.commit('saveModal', 1)
            }
        }
    }
</script>

<style lang="sass" scoped>
.modal-hide
    display: none
</style>