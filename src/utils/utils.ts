import { Dispatch } from 'redux'

import { setErrorTrueAC } from 'store/reducers/app_reducer'
import { ResponseErrorType } from 'store/types/response_error_type'

const NEXT_MONTH = 1

export const todayDate = (): string =>
  `${new Date().getFullYear()}-${
    new Date().getMonth() + NEXT_MONTH
  }-${new Date().getDate()}`

export const findIndexElement = (array: any[], elementId: number): number =>
  array.findIndex(el => el.id === elementId)

type ObjectType = {
  id: number
}

export const findElement = <T>(array: (T & ObjectType)[], elementId: number): T =>
  array.find(({ id }) => id === elementId)!

export const setError = (dispatch: Dispatch, errorData: ResponseErrorType): void => {
  const {
    response: {
      data: { message },
    },
  } = errorData

  if (message) {
    dispatch(setErrorTrueAC(message))
  } else {
    dispatch(setErrorTrueAC('some error'))
  }
}
