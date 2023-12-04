// main.js

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import store from './store/store';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap'; 

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.use(store);

app.mount('#app');
