import './assets/main.css'
import 'element-plus/dist/index.css'

import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import {zhCn} from "element-plus/es/locale/index";


createApp(App).use(router).use(ElementPlus, {locale: zhCn}).mount('#app')
