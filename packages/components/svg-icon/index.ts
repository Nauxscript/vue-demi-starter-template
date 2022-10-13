import { App, Component, Plugin } from 'vue-demi'
import svgIcon from './src/svg-icon.vue'
 
type SFCWithInstall<T> = T & Plugin

const withInstall = <T extends Component>(comp: T) => {
    (comp as SFCWithInstall<T>).install = (app: App) => {
        //注册组件
        app.component((comp as any).name, comp)
    }
    return comp as SFCWithInstall<T>
}

const SvgIcon = withInstall(svgIcon)

export default SvgIcon