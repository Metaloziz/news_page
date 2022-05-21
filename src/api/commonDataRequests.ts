import { instanceCommonData } from 'api/instance'
import { RequestCommonData } from 'enums/enums'

export type CoursesType = {
  name_course: string
  description_course: string
}

export type ContactsType = {
  address: string
  number_phone: string
  socialTG: string
  socialViber: string
  socialTikTok: string
  socialFacebook: string
  socialInstagram: string
  socialVK: string
  socialSkype: string
}

export const commonDataRequests = {
  getCourses: () => instanceCommonData.get<CoursesType[]>(`${RequestCommonData.COURSE}`),

  getContacts: () => instanceCommonData.get<ContactsType>(`${RequestCommonData.CONTACT}`),
}
