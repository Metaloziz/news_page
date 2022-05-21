import { ContactsType, CoursesType } from 'api/commonDataRequests'
import { RootState } from 'store/store'
import { NewsViewType } from 'store/types'

export const selectErrorMessage = (state: RootState): string => state.app.errorMessage
export const selectIsError = (state: RootState): boolean => state.app.isError
export const selectNewsTypeView = (state: RootState): NewsViewType =>
  state.app.newsModeView
export const selectIsAdminMode = (state: RootState): boolean => state.app.isAdmin
export const selectIsCourses = (state: RootState): CoursesType[] => state.app.courses
export const selectContacts = (state: RootState): ContactsType => state.app.contacts
