import { mount, type VueWrapper } from '@vue/test-utils'
import type { ComponentPublicInstance } from 'vue'

export const defaultMountOptions = {
  global: {
    stubs: {
      Teleport: true
    }
  }
}

export const mountComponent = <T extends ComponentPublicInstance>(
  component: any,
  options: any = {}
): VueWrapper<T> => {
  const mergedOptions = {
    ...defaultMountOptions,
    ...options,
    global: {
      ...defaultMountOptions.global,
      ...options.global
    }
  }
  
  return mount(component, mergedOptions)
}

export const findByTestId = (wrapper: VueWrapper<any>, testId: string) => {
  return wrapper.find(`[data-testid="${testId}"]`)
}

export const existsByTestId = (wrapper: VueWrapper<any>, testId: string): boolean => {
  return wrapper.find(`[data-testid="${testId}"]`).exists()
}