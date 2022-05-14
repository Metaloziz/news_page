import { RootState } from 'store/store'

export const selectorErrorMessage = (state: RootState): string => state.app.errorMessage
export const selectorIsError = (state: RootState): boolean => state.app.isError
