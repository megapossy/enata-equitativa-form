import { nextTick } from 'vue'
import { describe, test, expect, beforeAll, afterAll } from 'vitest'

import { mount, config } from '@vue/test-utils'
import Component from '@/components/base/fade-up.vue'

describe('FadeUp', () => {
  // beforeAll(() => {
  //   config.global.renderStubDefaultSlot = true
  // })

  // afterAll(() => {
  //   config.global.renderStubDefaultSlot = false
  // })

  test('slot works', async () => {
    const bbbbbb = 'bbbbbb'
    const wrapper = mount(Component, {
      global: {
        renderStubDefaultSlot: true,
        stubs: ['transition']
      },
      slots: {
        default: {
          template: bbbbbb
        }
      }
    })
    expect(wrapper.html()).toContain(bbbbbb)
  })


  // if props words
  test('loading props working properly', async () => {
    const wrapper = mount(Component)
    const el = wrapper.element as HTMLInputElement

    // for default value
    expect(el.getAttribute('name')).toBe('fade-up')

    // for loading = true
    await wrapper.setProps({ quick: true })
    expect(el.getAttribute('name')).toBe('fade-up-quick')
  })
})
