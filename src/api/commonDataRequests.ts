import { instanceCommonData } from 'api/instance'
import { RequestCommonData } from 'enums/enums'

export type CoursesData = {
  name_course: string
  description_course: string
}

export const commonDataRequests = {
  getCoursesData: () =>
    instanceCommonData.get<CoursesData[]>(`${RequestCommonData.COURSE}`),
}
