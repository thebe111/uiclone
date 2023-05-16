<script setup lang="ts">
defineProps<{
    size: string,
}>()
</script>

<template>
<div class="sep"></div>
</template>

<style lang="scss" scoped>
.sep {
    width: v-bind(size);
    border-bottom: solid 2px var(--color-four);
    margin-bottom: 8px;
}
</style>
