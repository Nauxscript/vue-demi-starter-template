import Vue from 'vue-demi'
import SvgIcon from '@/components/SvgIcon'// svg组件
import { readFileSync, readdirSync } from 'fs'

export const svgIconHelper = () => {
  // register globally
  // Vue.Vue2.
  // Vue.use('SvgIcon', SvgIcon)

  const requireAll = requireContext => requireContext.keys().map(requireContext)
  const req = require.context('@/assets/icons/svg', false, /\.svg$/)
  requireAll(req) 
}

