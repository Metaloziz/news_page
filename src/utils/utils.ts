import { Dispatch } from 'redux'

import { FIRST_ARRAY_ITEM, SECOND_ARRAY_ITEM } from 'components/Footer/Footer'
import { setErrorTrueAC } from 'store/reducers/app_reducer'
import { ResponseErrorType } from 'store/types/response_error_type'

const NEXT_MONTH = 1

// today date
export const todayDate = (): string =>
  `${new Date().getFullYear()}-${
    new Date().getMonth() + NEXT_MONTH
  }-${new Date().getDate()}`

// find object
export const findIndexElement = (array: any[], elementId: number): number =>
  array.findIndex(el => el.id === elementId)

type ObjectType = {
  id: number
}

export const findElement = <T>(array: (T & ObjectType)[], elementId: number): T =>
  array.find(({ id }) => id === elementId)!

// separate the error from the request
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

// separate the address from the request
export const separateAddress = (address: string): string => {
  const arr = address.split('<br>')

  return arr[FIRST_ARRAY_ITEM] + arr[SECOND_ARRAY_ITEM]
}
