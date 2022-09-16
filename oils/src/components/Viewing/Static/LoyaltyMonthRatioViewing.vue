<template>
    <div class="loyalty-ratio-viewing">
        <div> 
            <img src="@/assets/loyalty/10p.png">
            <p>1至3個月</p>
            <p>10% 比例</p>
        </div>
        <div> 
            <img src="@/assets/loyalty/15p.png">
            <p>4至6個月</p>
            <p>15% 比例</p>
        </div>
        <div> 
            <img src="@/assets/loyalty/20p.png">
            <p>7至9個月</p>
            <p>20% 比例</p>
        </div>
        <div> 
            <img src="@/assets/loyalty/25p.png">
            <p>10至12個月</p>
            <p>25% 比例</p>
        </div>
        <div> 
            <img src="@/assets/loyalty/30p.png">
            <p>13個月以上</p>
            <p>30% 比例</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="sass" scoped>
.loyalty-ratio-viewing
    display: flex
    flex-wrap: wrap
    align-items: start
    justify-content: space-around

    padding: 0px 2vw
    text-align: center

    & > div
        padding: 2vw
        max-width: 20%

    p
        margin: 6px 0px !important

    & > div > p:first
        font-size: 1.2em !important

.loyalty-ratio-viewing img 
    width: 100%
    height: auto
</style>