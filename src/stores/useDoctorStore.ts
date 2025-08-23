import { defineStore } from 'pinia'
import { useApi } from '@/composables/useApi'
import { useDoctor } from '@/composables/useDoctor'
import { ref } from 'vue'
import type { Doctor } from '@/types/doctor'

export const useDoctorStore = defineStore('doctors', () => {
  const api = useApi()
  const doctorGuard = useDoctor()
  
  const doctors = ref<Doctor[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const fetch = async () => {
    loading.value = true
    error.value = null

    try {
      const response = await api.get<Doctor[]>()
      
      if (!doctorGuard.isDoctorsResponse(response)) throw new Error('Invalid response type')

      if (response) {
        doctors.value = response
      }
    } catch (err) {
      error.value = 'Failed to fetch doctors'
      console.error(err, error.value)
    } finally {
      loading.value = false
    }
  }

  const getDoctorById = (id: string) => {
    return doctors.value.find(doctor => doctor.id === id)
  }

  const clearError = () => error.value = null

  return {
    doctors,
    loading,
    error,
    fetch,
    getDoctorById,
    clearError
  }
})