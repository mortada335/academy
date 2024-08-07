import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/index.js'
import './assets/tailwind.css'

const app = createApp(App)
app.use(vuetify)
app.mount('#app')
app.use(router)
