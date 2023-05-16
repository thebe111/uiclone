import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { ServersService } from "./services/serversService"

const httpHandler = () => {};
const providers = {
    serverService: new ServersService(httpHandler),
};
const app = createApp(App);
app.use(router);
app.provide("serversService", providers.serverService);
app.mount('#app');
