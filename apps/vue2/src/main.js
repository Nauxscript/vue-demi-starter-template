import Vue from 'vue'
import App from '@/App.vue'
import store from '@/store'
import router from '@/router'
// import { FunButton } from '@fun/components'

// console.log(FunButton.install())

// Vue.use(FunButton)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app")