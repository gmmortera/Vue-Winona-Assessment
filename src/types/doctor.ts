export interface Doctor {
  id: string
  firstName: string
  lastName: string
  state: string
  dob: string
  licenseActive: boolean
  signedUpDate: string
}

export type DoctorsResponse = Doctor[]

export type USState = 
  | 'AL' | 'AK' | 'AZ' | 'AR' | 'CA'
  | 'CO' | 'CT' | 'DE' | 'FL' | 'GA'
  | 'HI' | 'ID' | 'IL' | 'IN' | 'IA'
  | 'KS' | 'KY' | 'LA' | 'ME' | 'MD'
  | 'MA' | 'MI' | 'MN' | 'MS' | 'MO'
  | 'MT' | 'NE' | 'NV' | 'NH' | 'NJ'
  | 'NM' | 'NY' | 'NC' | 'ND' | 'OH'
  | 'OK' | 'OR' | 'PA' | 'RI' | 'SC'
  | 'SD' | 'TN' | 'TX' | 'UT' | 'VT'
  | 'VA' | 'WA' | 'WV' | 'WI' | 'WY'
