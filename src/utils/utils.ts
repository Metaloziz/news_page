import { Dispatch } from 'redux'

import { setErrorTrueAC } from 'store/reducers/app_reducer'
import { ResponseErrorType } from 'store/thunks/comments_thunks'

const NEXT_MONTH = 1

export const TODAY_DATE = (): string =>
  `${new Date().getFullYear()}-${
    new Date().getMonth() + NEXT_MONTH
  }-${new Date().getDate()}`

export const findIndexElement = (array: any[], elementId: number): number =>
  array.findIndex(el => el.id === elementId)

// надо придумать формулу
// export const findElement = <T>(array: T[], elementId: number): T | undefined =>
//   array.find(el => el.id === elementId)

export const setError = (dispatch: Dispatch, errorData: ResponseErrorType): void => {
  const {
    response: {
      data: { message },
    },
  } = errorData

  dispatch(setErrorTrueAC(message))
}
