<script setup lang="ts">
import ServerButton from "../atoms/ServerButton.vue";
import Separator from "../atoms/Separator.vue";
</script>

<template>
<section class="server-list">
    <ServerButton isHome />
    <Separator size="32px" />
    <ServerButton hasNotification />
    <ServerButton :mentions="20" />
    <ServerButton />
    <ServerButton v-for="servers in 10" :key="servers.id"/>
</section>
</template>

<style lang="scss" scoped>
.server-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--color-three);
    padding: 11px 0;
    max-height: 100vh;
    grid-area: serverlist;
    overflow-y: scroll;
    /* hide scrollbar on firefox */
    scrollbar-width: none;
    /* hide scrollbar on chromium based browsers */ 
    &::-webkit-scrollbar {
        display: none;
    }
}
</style>
