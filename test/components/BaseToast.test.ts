import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BaseToast from '../../src/components/BaseToast.vue'
import { mountComponent } from '../utils'

describe('BaseToast', () => {
  describe('Conditional Rendering', () => {
    it('should render when conditionalValue is true', () => {
      const wrapper = mountComponent(BaseToast, {
        props: {
          conditionalValue: true,
          message: 'Test message'
        }
      })

      expect(wrapper.find('.toast').exists()).toBe(true)
      expect(wrapper.find('.alert').exists()).toBe(true)
    })

    it('should not render when conditionalValue is false', () => {
      const wrapper = mountComponent(BaseToast, {
        props: {
          conditionalValue: false,
          message: 'Test message'
        }
      })

      expect(wrapper.find('.toast').exists()).toBe(false)
      expect(wrapper.find('.alert').exists()).toBe(false)
    })

    it('should toggle visibility when conditionalValue changes', async () => {
      const wrapper = mountComponent(BaseToast, {
        props: {
          conditionalValue: false,
          message: 'Test message'
        }
      })

      expect(wrapper.find('.toast').exists()).toBe(false)

      await wrapper.setProps({ conditionalValue: true })
      expect(wrapper.find('.toast').exists()).toBe(true)

      await wrapper.setProps({ conditionalValue: false })
      expect(wrapper.find('.toast').exists()).toBe(false)
    })
  })

  describe('Message Display', () => {
    it('should display the provided message', () => {
      const testMessage = 'This is a test error message'
      const wrapper = mountComponent(BaseToast, {
        props: {
          conditionalValue: true,
          message: testMessage
        }
      })

      const messageSpan = wrapper.find('span.text-white')
      expect(messageSpan.exists()).toBe(true)
      expect(messageSpan.text()).toBe(testMessage)
    })

    it('should handle null message gracefully', () => {
      const wrapper = mountComponent(BaseToast, {
        props: {
          conditionalValue: true,
          message: null
        }
      })

      const messageSpan = wrapper.find('span.text-white')
      expect(messageSpan.exists()).toBe(true)
      expect(messageSpan.text()).toBe('')
    })

    it('should update message when prop changes', async () => {
      const wrapper = mountComponent(BaseToast, {
        props: {
          conditionalValue: true,
          message: 'Initial message'
        }
      })

      let messageSpan = wrapper.find('span.text-white')
      expect(messageSpan.text()).toBe('Initial message')

      await wrapper.setProps({ message: 'Updated message' })
      messageSpan = wrapper.find('span.text-white')
      expect(messageSpan.text()).toBe('Updated message')
    })

    it('should handle empty string message', () => {
      const wrapper = mountComponent(BaseToast, {
        props: {
          conditionalValue: true,
          message: ''
        }
      })

      const messageSpan = wrapper.find('span.text-white')
      expect(messageSpan.exists()).toBe(true)
      expect(messageSpan.text()).toBe('')
    })
  })

  describe('Click Event Emission', () => {
    it('should emit click event when close button is clicked', async () => {
      const wrapper = mountComponent(BaseToast, {
        props: {
          conditionalValue: true,
          message: 'Test message'
        }
      })

      const closeButton = wrapper.find('button.btn')
      expect(closeButton.exists()).toBe(true)

      await closeButton.trigger('click')

      expect(wrapper.emitted('click')).toBeTruthy()
      expect(wrapper.emitted('click')).toHaveLength(1)
    })

    it('should emit click event multiple times when clicked multiple times', async () => {
      const wrapper = mountComponent(BaseToast, {
        props: {
          conditionalValue: true,
          message: 'Test message'
        }
      })

      const closeButton = wrapper.find('button.btn')
      
      await closeButton.trigger('click')
      await closeButton.trigger('click')
      await closeButton.trigger('click')

      expect(wrapper.emitted('click')).toHaveLength(3)
    })

    it('should not emit click event when toast is not visible', () => {
      const wrapper = mountComponent(BaseToast, {
        props: {
          conditionalValue: false,
          message: 'Test message'
        }
      })

      const closeButton = wrapper.find('button.btn')
      expect(closeButton.exists()).toBe(false)
      expect(wrapper.emitted('click')).toBeFalsy()
    })
  })

  describe('Teleport Functionality', () => {
    it('should use Teleport to render to body', () => {
      const wrapper = mountComponent(BaseToast, {
        props: {
          conditionalValue: true,
          message: 'Test message'
        }
      })

      expect(wrapper.findComponent({ name: 'Teleport' }).exists()).toBe(true)
    })

    it('should have correct toast positioning classes', () => {
      const wrapper = mountComponent(BaseToast, {
        props: {
          conditionalValue: true,
          message: 'Test message'
        }
      })

      const toastDiv = wrapper.find('.toast')
      expect(toastDiv.classes()).toContain('toast-top')
      expect(toastDiv.classes()).toContain('toast-center')
    })
  })

  describe('CSS Classes and Styling', () => {
    it('should have correct CSS classes applied', () => {
      const wrapper = mountComponent(BaseToast, {
        props: {
          conditionalValue: true,
          message: 'Test message'
        }
      })

      const toastDiv = wrapper.find('.toast')
      expect(toastDiv.classes()).toContain('toast')
      expect(toastDiv.classes()).toContain('toast-top')
      expect(toastDiv.classes()).toContain('toast-center')

      const alertDiv = wrapper.find('.alert')
      expect(alertDiv.classes()).toContain('alert')
      expect(alertDiv.classes()).toContain('alert-error')

      const messageSpan = wrapper.find('span')
      expect(messageSpan.classes()).toContain('text-white')

      const closeButton = wrapper.find('button')
      expect(closeButton.classes()).toContain('btn')
      expect(closeButton.classes()).toContain('btn-xs')
    })
  })

  describe('Component Structure', () => {
    it('should have correct DOM structure when visible', () => {
      const wrapper = mountComponent(BaseToast, {
        props: {
          conditionalValue: true,
          message: 'Test message'
        }
      })

      const toast = wrapper.find('.toast')
      expect(toast.exists()).toBe(true)

      const alert = toast.find('.alert')
      expect(alert.exists()).toBe(true)

      const messageSpan = alert.find('span.text-white')
      expect(messageSpan.exists()).toBe(true)

      const closeButton = alert.find('button.btn')
      expect(closeButton.exists()).toBe(true)
      expect(closeButton.text()).toBe('Close')
    })
  })

  describe('Edge Cases', () => {
    it('should handle very long messages', () => {
      const longMessage = 'A'.repeat(1000)
      const wrapper = mountComponent(BaseToast, {
        props: {
          conditionalValue: true,
          message: longMessage
        }
      })

      const messageSpan = wrapper.find('span.text-white')
      expect(messageSpan.text()).toBe(longMessage)
    })

    it('should handle special characters in message', () => {
      const specialMessage = '<script>alert("xss")</script> & "quotes" & \'apostrophes\''
      const wrapper = mountComponent(BaseToast, {
        props: {
          conditionalValue: true,
          message: specialMessage
        }
      })

      const messageSpan = wrapper.find('span.text-white')
      expect(messageSpan.text()).toBe(specialMessage)
    })

    it('should handle rapid prop changes', async () => {
      const wrapper = mountComponent(BaseToast, {
        props: {
          conditionalValue: true,
          message: 'Initial'
        }
      })

      await wrapper.setProps({ conditionalValue: false })
      await wrapper.setProps({ conditionalValue: true, message: 'Changed' })
      await wrapper.setProps({ message: 'Final' })

      expect(wrapper.find('.toast').exists()).toBe(true)
      expect(wrapper.find('span.text-white').text()).toBe('Final')
    })
  })
})