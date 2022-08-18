import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import SvgIcon from '../src/svg-icon.vue'

describe('Testing button', () => {
  test('happy path', () => {
    expect(SvgIcon).toBeTruthy()
  })
  
  test('Button working fine in vue3', () => {
    const wrapper = mount(SvgIcon)
    expect(wrapper).toBeTruthy()
  })
})
