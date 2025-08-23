import { config } from '@vue/test-utils'
import { vi, beforeEach } from 'vitest'

beforeEach(() => {
  vi.clearAllMocks()
})

config.global.stubs = {
  Teleport: true,
  RouterLink: {
    template: '<a><slot /></a>',
    props: ['to']
  }
}

global.console = {
  ...console,
}