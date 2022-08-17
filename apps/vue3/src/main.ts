import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import fun from '@fun/components'
const app = createApp(App)

// Full Import
app.use(fun as any)

app.mount('#app')
