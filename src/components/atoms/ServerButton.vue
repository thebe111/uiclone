<script setup lang="ts">
defineProps<{
    hasNotification: boolean,
    isHome: boolean,
    mentions: number,
    selected: boolean,
}>()
</script>

<template>
<div 
    class="server-button" 
    :class="{ 
        'server-button--is-home' : isHome, 
        'server-button--has-notification' : hasNotification 
    }"
>
    <p v-if="isHome">Home</p>
    <div class="server-button__mentions" v-if="mentions">{{ mentions }}</div>
</div>
</template>

<style lang="scss" scoped>
.server-button {
    align-items: center;
    background-color: var(--color-one);
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    flex-shrink: 0;
    height: 48px;
    justify-content: center;
    margin-bottom: 8px;
    position: relative;
    transition: 0.2s;
    width: 48px;

    &.active,
    &:hover {
        border-radius: 16px;
        background-color: var(--discord);
    }
}

.server-button--has-notification {
    &::before {
        background-color: var(--color-white);
        border-radius: 50%;
        content: "";
        display: block;
        height: 9px;
        left: -17px;
        position: absolute;
        /* calc(half of the element size - half of notification icon size) */
        top: calc(50% - 4.5px);
        width: 9px;
    }
}

.server-button--is-home {
    background-color: var(--brand);

    &.active,
    &:hover {
        border-radius: 16px;
        background-color: var(--brand);
    }
}

.server-button > p {
    color: var(--color-white);
    font-size: 10px;
}

.server-button__mentions {
    align-items: center;
    background-color: var(--notification);
    border-radius: 12px;
    border: solid 2px var(--color-four);
    bottom: -4px;
    color: var(--color-white);
    display: flex;
    font-size: 10px;
    font-weight: bold;
    height: 20px;
    justify-content: center;
    padding: 0 4px;
    position: absolute;
    right: -4px;
    min-width: 20px;
}
</style>
