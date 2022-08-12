import { createApp } from 'vue'
import App from './App.vue'
// vue router 4
import { router } from './router'
// tailwind
import './assets/tailwind.css'

createApp(App).use(router).mount('#app')
