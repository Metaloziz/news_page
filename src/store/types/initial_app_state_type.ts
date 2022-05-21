import { ContactsType, CoursesType } from 'api/commonDataRequests'
import { NewsViewType } from 'store/types/news_view_type'

export type InitialAppStateType = {
  isError: boolean
  errorMessage: string
  newsModeView: NewsViewType
  isAdmin: boolean
  courses: CoursesType[]
  contacts: ContactsType
}
