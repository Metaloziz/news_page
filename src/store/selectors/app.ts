import { RootState } from 'store/store'
import { NewsViewType } from 'store/types'
import { ContactsType } from 'store/types/contacts_type'
import { CoursesType } from 'store/types/courses_type'

export const selectErrorMessage = (state: RootState): string => state.app.errorMessage
export const selectIsError = (state: RootState): boolean => state.app.isError
export const selectNewsTypeView = (state: RootState): NewsViewType =>
  state.app.newsModeView
export const selectIsCourses = (state: RootState): CoursesType[] => state.app.courses
export const selectContacts = (state: RootState): ContactsType => state.app.contacts
export const selectIsLoading = (state: RootState): boolean => state.app.isLoading
