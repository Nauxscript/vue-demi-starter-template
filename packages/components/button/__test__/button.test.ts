import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from '../src/Button.vue'

describe('Testing button', () => {
  test('happy path', () => {
    expect(Button).toBeTruthy()
  })
  
  test('Button working fine in vue3', () => {
    const wrapper = mount(Button)
    expect(wrapper).toBeTruthy()
    const p = wrapper.get('p')
    expect(p).toBeTruthy()
    expect(p.text()).toContain('this is call by vue3')
  })
})
