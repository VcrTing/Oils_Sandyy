<template>
    <v-container fluid>
        <v-row>
            <v-col>
                <qiong-page-header>
                    购买记录
                </qiong-page-header>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-btn color="accent">accent</v-btn>
                <v-btn color="primary">Primary</v-btn>
                <v-btn color="secondary">secondary</v-btn>

                <v-btn color="primary" icon>
                    <v-icon>check_circle</v-icon>
                </v-btn>
                
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <div class="button btn-1">Hover</div>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
import QiongPageHeader from '../../../components/Qiong/QiongPageHeader.vue'
    export default {
        props: {
            QiongPageHeader
        },
        name: '',
        data() {
      
            return {
                
            }
        }
    }
</script>

<style lang="css" scoped>

/*  */
.button{
    position: relative;
    width: 100px;
    height: 40px;
    border: 1px solid rgb(0, 168, 243);
    background: none;
    cursor: pointer;
    transition: all .2s;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
}
.btn-1:hover{
    background: rgba(0, 168, 243, 0.2);
}

</style>