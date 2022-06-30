<template>
    <div class="active-shimmer as-pos-fix" v-if="!active">
        <div class="qiong-txt-22 text-center">
            <div class="lock_panel">
                <img :src="lock_pic" class="w-full">
            </div>
            

            <div class="w-full fw-b">
                {{
                    $t('CONTENT.ice_1')
                }}<br/>
                {{
                    $t('CONTENT.ice_2')
                }}
                {{
                    $t('CONTENT.ice_3')
                }}
                {{
                    $t('CONTENT.ice_4')
                }}
            </div>

            <div class="w-full qiong-pt-10 qiong-txt-primary">
                <div class=" fw-b kfb_title">
                    {{
                        $t('CONTENT.ice_3')
                    }}
                </div>

                <div class="qiong-txt-16">
                    {{
                        $t('CONTENT.email')
                    }}:&nbsp;
                    <span class="">
                        {{ conf.SYSTEM.email }}
                    </span>
                    <br/>
                    {{
                        $t('CONTENT.whatsapp')
                    }}:&nbsp;
                    <span class="">
                        {{ conf.SYSTEM.whatsapp }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        props: {
            active: {
                type: Boolean
            },
            username: {
                type: String
            }
        },
        data() {
            return {
                lock_pic: require('../../assets/LOCK.png')
            }
        }
    }
</script>

<style lang="sass" scoped>
    
.lock_panel
    background-size: cover
    z-index: 900 
    max-width: 36vw
    margin-bottom: 1.5vw

</style>