import { App } from 'vue-demi'
import FunButton from './Button'
import SvgIcon from './svg-icon'

// const components = [
//   FunButton
// ]

const components = {
  FunButton,
  SvgIcon
}

export {
  FunButton,
  SvgIcon
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