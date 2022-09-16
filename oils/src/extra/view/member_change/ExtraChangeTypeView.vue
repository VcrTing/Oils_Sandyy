<template>
    <span class="qiong-txt-10">
        <span v-if="v == 1" class="tag-audit">
            LP 等級變更
        </span>
        <span v-else class="tag-auditing">
            LP 積分變更
        </span>
    </span>
</template>

<script>
    export default {
        props: [
            'v'
        ],
    }
</script>