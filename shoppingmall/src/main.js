// 웹&앱 PJ 메인페이지 JS - main.js
import { createApp } from 'vue/dist/vue.esm-bundler';
import CategoryComp from "./components/CategoryComp.vue";

const app = createApp({
    components: {
        'category-comp': CategoryComp 
    }
});

app.mount('#app');