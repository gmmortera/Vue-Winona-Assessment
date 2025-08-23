export * from './test-helpers'

export const nextTick = () => new Promise(resolve => setTimeout(resolve, 0))

export const flushPromises = () => new Promise(resolve => setTimeout(resolve, 0))

export const waitForNextTick = async () => {
  await new Promise(resolve => setTimeout(resolve, 0))
}