import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'virtual:svg-icons-register'
// import ids from 'virtual:svg-icons-register'
import fun from '@nauxscript/components'
const app = createApp(App)

// console.log(ids)
// Full Import
app.use(fun)

app.mount('#app')
