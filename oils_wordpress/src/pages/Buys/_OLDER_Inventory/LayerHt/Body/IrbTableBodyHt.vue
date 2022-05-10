<template>
    <div class="px-7 qiong-td-hui qiong-pt-10">
        <div class="qiong-td qiong-txt-td td-with-img"
            v-for="(v, i) in inventorys" :key="i"
        >
            <div class="qiong-wide-5">
                <img :src="v.img" class="img"/>
            </div>
            <div class="qiong-wide-2 pr-0">&nbsp;</div>
            
            <div class="qiong-wide-13">
                {{ v.sku }}
            </div>
            <div class="qiong-wide-22">
                {{ v.name_en }}
            </div>
            <div class="qiong-wide-18">
                {{ v.name_cn }}
            </div>

            <div class="qiong-wide-10">
                {{ v.pv }}
            </div>
            <div class="qiong-wide-20">
                <inventory-content-num-viewing :typed="2">
                    <span v-if="v.inventory[1].is_add">+</span><span v-else>-</span>
                    {{ v.inventory[1].res }}
                </inventory-content-num-viewing>
            </div>
            <div class="qiong-wide-10">
                <v-icon small @click="edit(i)">mdi-lead-pencil</v-icon>
            </div>
        </div>
    </div>
</template>

<script>
import InventoryContentNumViewing from '@/components/Viewing/Record/Inventory/InventoryContentNumViewing.vue'
import QiongImage from '@/components/Qiong/Ui/QiongImage.vue'
    export default {
        name: '',
        components: { 
            InventoryContentNumViewing,
            QiongImage 
        },
        props: {
            inventorys: Array,
            items: Array
        },
        data() {
            return {
                
            }
        },
        methods: {
            edit(v) {
                this.$router.push({
                    path: '/home/buys/inventory_edit',
                    params: {
                        'id': v
                    }  
                })
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>