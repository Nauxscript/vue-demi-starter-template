import { App } from 'vue-demi'
import FunButton from './Button'

// const components = [
//   FunButton
// ]

const components = {
  FunButton
}

export {
  FunButton
}
 
export default {
  /**
   * 让组件可以通过 app.use() 的形式使用
   * @param app 
   */
  install(app: App) {
    Object.keys(components).map((key) => {
      // console.log(item.name)
      // app.component(item.name, item)
      app.component(key, components[key as keyof typeof components])
    })
    
  }
}