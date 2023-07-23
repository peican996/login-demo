import {createApp} from 'vue';
import App from './App.vue';
import router from './router/router.js';
import ElementPlus from 'element-plus';
import axios from "axios";

const app = createApp(App).use(router).use(ElementPlus);
axios.defaults.baseURL = 'http://localhost:45372';

app.mount('#app');