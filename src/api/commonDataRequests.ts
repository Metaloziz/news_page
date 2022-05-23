import { instanceCommonData } from 'api/instance'
import { RequestCommonData } from 'enums/enums'
import { ContactsType } from 'store/types/contacts_type'
import { CoursesType } from 'store/types/courses_type'

export const commonDataRequests = {
  getCourses: () => instanceCommonData.get<CoursesType[]>(`${RequestCommonData.COURSE}`),

  getContacts: () =>
    instanceCommonData.get<ContactsType[]>(`${RequestCommonData.CONTACT}`),
}
