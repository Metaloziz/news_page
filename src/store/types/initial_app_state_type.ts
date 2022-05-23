import { ContactsType } from 'store/types/contacts_type'
import { CoursesType } from 'store/types/courses_type'
import { NewsViewType } from 'store/types/news_view_type'

export type InitialAppStateType = {
  isError: boolean
  errorMessage: string
  newsModeView: NewsViewType
  isAdmin: boolean
  courses: CoursesType[]
  contacts: ContactsType
}
