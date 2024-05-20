import { Employer } from '@/types/Employer'

export interface EmployerDatabase extends Employer {
  createdAt: string
  updatedAt: string
  __v: string
  _id: string
}

export const removeDatabaseEmployerFields = (employer: EmployerDatabase) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { createdAt, updatedAt, __v, _id, ...cleanedEmployer } = employer
  return cleanedEmployer
}
