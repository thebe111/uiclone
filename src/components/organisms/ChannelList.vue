<script setup lang="ts">
import Channel from "../atoms/Channel.vue";
</script>

<template>
<section class="channel-list">
    <Channel />
</section>
</template>

<style lang="scss" scoped>
.channel-list {
    grid-area: channellist;
    background-color: var(--color-five);
}
</style>
