<script setup lang="ts">
import ServerList from "../components/organisms/ServerList.vue";
import ServerName from "../components/atoms/ServerName.vue";
import ChannelList from "../components/organisms/ChannelList.vue";
import Server from "../@types/server";
import { inject, onMounted, reactive } from "vue";
import { ServersService } from "../services/serversService";

const state = reactive({
    label: '',
});

const serversService = inject("serversService") as ServersService;

onMounted(async () => {
    await serversService.handle();
    state.label = "INIT LABEL";
});

const clickers = {
    handleClick: async () => {
        state.label = "LOREM IPSUM";
    },
}
</script>

<template>
<main>
  <ServerList servers="{ servers }"/>
  <ServerName @click="clickers.handleClick"/>
  <ChannelList />
  <p>{{ state.label }}</p>
</main>
</template>

<style lang="scss" scoped>
main {
    display: grid;
    height: 100vh;
    grid-template-columns: 71px 280px auto 280px;
    grid-template-rows: 50px auto 50px;
    grid-template-areas:
        "serverlist servername  channelinfo channelinfo"
        "serverlist channellist chat        userlist"
        "serverlist userinfo    chat        userlist"
    ;
}
</style>
