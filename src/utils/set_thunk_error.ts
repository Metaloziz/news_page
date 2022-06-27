import { Dispatch } from 'redux'

import { setErrorTrueAC } from 'store/reducers'
import { ResponseErrorType } from 'store/types'
import { ErrorMessageLoginResponse } from 'store/types/error_message_login_response'

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

export const setLoginError = (
  dispatch: Dispatch,
  errorData: ErrorMessageLoginResponse,
): void => {
  const { message } = errorData

  if (message) {
    dispatch(setErrorTrueAC(message))
  } else {
    dispatch(setErrorTrueAC('some error'))
  }
}
