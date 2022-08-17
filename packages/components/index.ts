import { App } from 'vue'
import FunButton from './Button'
 
// 最终在 views 下使用的组件，其实是这个 index.ts 中注册的组件
const components = [
  FunButton
]

export {
  FunButton
}
 
export default {
  /**
   * 让组件可以通过 app.use() 的形式使用
   * @param app 
   */
  install(app: App) {
    components.map(item => {
      app.use(item)
    })
  }
}