<template>
    <div class="txt-res pt-1">

        <div class="qiong-td fw-b qiong-txt-16 fx-r" v-if="_bigger == 1">

            <div class="qiong-wide-18 mobie-wide-28 pr-0">
                <slot name="content"></slot>
            </div>
            <div class="qiong-wide-32 mobie-wide-72 pr-0">
                <slot name="txt"></slot>
                <span class=" ">&nbsp;</span>
            </div>
            <div class="qiong-wide-50 mobie-hide">&nbsp;</div>
        </div>

        <div class="qiong-td fw-b qiong-txt-16 my-0 py-0" v-else>
            <div class="qiong-wide-60 mobie-hide">&nbsp;</div>

            <div class="qiong-wide-30 mobie-wide-80 pr-0">
                <slot name="txt"></slot>
                <span class=" ">&nbsp;</span>
            </div>

            <div class="qiong-wide-10 mobie-wide-20 pr-0">
                <slot name="content"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        props: {
            _bigger: { type: Number, default: 1 },
        },
    }
</script>