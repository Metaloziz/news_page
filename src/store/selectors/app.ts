import { RootState } from 'store/store'
import { NewsViewType } from 'store/types'

export const selectorErrorMessage = (state: RootState): string => state.app.errorMessage
export const selectorIsError = (state: RootState): boolean => state.app.isError
export const selectorNewsTypeView = (state: RootState): NewsViewType =>
  state.app.newsModeView
