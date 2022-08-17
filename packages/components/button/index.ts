import { App, Plugin } from 'vue-demi'
import button from './src/Button.vue'
 
type SFCWithInstall<T> = T & Plugin

const withInstall = <T>(comp: T) => {
    (comp as SFCWithInstall<T>).install = (app: App) => {
        //注册组件
        app.component((comp as any).name, comp)
    }
    return comp as SFCWithInstall<T>
}

const FunButton = withInstall(button)

export default FunButton

// 让组件可以通过 app.use() 的形式使用
// export default {
//   install(app: App) {
//     app.component('FunButton', Button)
//   }
// }