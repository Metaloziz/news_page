import { ContactsType } from './contacts_type'
import { CoursesType } from './courses_type'
import { NewsViewType } from './news_view_type'

export type InitialAppStateType = {
  isError: boolean
  errorMessage: string
  newsModeView: NewsViewType
  courses: CoursesType[]
  contacts: ContactsType
  isLoading: boolean
}
