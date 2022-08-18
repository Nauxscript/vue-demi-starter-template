import Vue from 'vue'
import App from '@/App.vue'
import store from '@/store'
import router from '@/router'

import { FunButton, SvgIcon } from '@nauxscript/components'

Vue.use(FunButton)
Vue.use(SvgIcon)

Vue.prototype.$version = Vue.version

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app")