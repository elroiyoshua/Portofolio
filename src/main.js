import './assets/main.css'
import { BiGithub, CoGmail, CoLinkedinIn, LaInstagram, BiDiscord } from 'oh-vue-icons/icons'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { OhVueIcon, addIcons } from 'oh-vue-icons'

addIcons(BiGithub, CoGmail, CoLinkedinIn, LaInstagram, BiDiscord)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('v-icon', OhVueIcon)
app.mount('#app')
