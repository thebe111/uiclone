<template>
<div class="channel">
    <div class="channel-name">
        <div class="channel-name__icon">#</div>
        <p class="channel-name__text">Awesome</p>
    </div>
    <div class="channel__buttons">
        <button>B1</button>
        <button>B2</button>
    </div>
</div>
</template>

<style lang="scss" scoped>
.channel {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px;
}

.channel-name {
    display: flex;
    align-items: center;
    justify-content: left;
}

.channel-name__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    color: var(--color-gray);
}

.channel-name__text {
    padding: 0 10px 0 5px;
    color: var(--color-gray);
}

.channel__buttons {
    width: auto;
}

.channel__buttons > button {
    margin: 0 2px;
}
</style>
