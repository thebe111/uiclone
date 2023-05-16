<template>
<section class="server-name">
    <div class="server-name__title">Discord UI Clone</div>
    <div class="server-name__icon">_</div>
</section>
</template>

<style lang="scss" scoped>
.server-name {
    grid-area: servername;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--color-two);
    padding: 0 11px 0 16px;
    box-shadow: rgba(0, 0, 0, 0.9) 0 1px 0 0;
}

.server-name__title {
    color: var(--color-white);
    font-size: 16px;
    font-weight: bold;
}

.server-name__icon {
    color: var(--color-white);
    cursor: pointer;
    width: 20px;
    height: 20px;
}
</style>
