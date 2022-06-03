import { Dispatch } from 'redux'

import { setErrorTrueAC } from 'store/reducers'
import { ResponseErrorType } from 'store/types'

export const setThunkError = (dispatch: Dispatch, errorData: ResponseErrorType): void => {
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
