import type { Doctor, DoctorsResponse } from '@/types/doctor'

export const useDoctor = () => {
  const isDoctor = (obj: any): obj is Doctor => {
    return typeof obj === 'object' &&
      typeof obj.id === 'string' &&
      typeof obj.firstName === 'string' &&
      typeof obj.lastName === 'string' &&
      typeof obj.state === 'string' &&
      typeof obj.dob === 'string' &&
      typeof obj.licenseActive === 'boolean' &&
      typeof obj.signedUpDate === 'string'
  }

  const isDoctorsResponse = (obj: any): obj is DoctorsResponse => {
    return Array.isArray(obj) && obj.every(isDoctor)
  }
  
  return {
    isDoctor,
    isDoctorsResponse,
  }
}