import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { FunButton } from '@fun/components'
const app = createApp(App)

app.use(FunButton)

app.mount('#app')
