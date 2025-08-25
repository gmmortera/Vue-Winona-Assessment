type FetchMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

export const useApi = () => {
  const baseUrl = import.meta.env.DEV 
    ? '/api'
    : import.meta.env.BASE_URL
  const token = import.meta.env.VITE_APP_KEY

  const request = async <T = any>(
    endpoint: string,
    method: FetchMethod = 'GET',
    body?: any
  ) => {
    try {
      const options: RequestInit = {
        method,
        headers: {
          'Content-Type': 'application/json',
          ...(token && { 'Authorization': `Bearer ${token}` })
        }
      }

      if (body && method !== 'GET') options.body = JSON.stringify(body)

      const response = await fetch(`${baseUrl}${endpoint}`, options)

      if (!response.ok) {
        
        if (response.status === 500) throw new Error(`HTTP ${response.status}: ${response.statusText}`)

        const errorMessage = await response.json() as { message: string }
        throw new Error(errorMessage.message)
      }

      return await response.json()
    } catch (error) {
      console.error('API Error:', error)
      throw error
    }
  }

  const get = <T = any>(endpoint: string = '') => request<T>(endpoint)

  return {
    get
  }
}