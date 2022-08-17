import { App } from 'vue-demi'
import Button from './src/Button.vue'
 
// 让组件可以通过 app.use() 的形式使用
export default {
  install(app: App) {
    app.component('FunButton', Button)
  }
}