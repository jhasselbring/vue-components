import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from '@/store';
import '@/assets/reset.css';

createApp(App).provide('store', store).use(router).mount('#app');
