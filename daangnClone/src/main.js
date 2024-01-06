import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
// Vue 애플리케이션 생성
const app = createApp(App);

axios.defaults.baseURL = "http://localhost:3000";
app.config.globalProperties.$axios = axios;

app.use(router).mount("#app");