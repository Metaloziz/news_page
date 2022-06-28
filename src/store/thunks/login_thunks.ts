import { createAsyncThunk } from '@reduxjs/toolkit'

import { loginRequests } from 'api/loginRequests'
import { StatusCode } from 'enums'
import { setIsLoadingStatusAC } from 'store/reducers'
import { ErrorMessageLoginResponse } from 'store/types/error_message_login_response'
import { NewUserDataRegistrationType } from 'store/types/new_user_data_registration_type'
import { UserDataType } from 'store/types/user_data_type'
import { setLoginError } from 'utils'

export const postLoginTC = createAsyncThunk(
  'login/postLoginTC',
  async (userData: UserDataType, { dispatch }) => {
    try {
      dispatch(setIsLoadingStatusAC(true))

      const {
        status,
        headers: { authorization },
      } = await loginRequests.login(userData)
      if (status === StatusCode.LOGIN_SUCCESS) {
        return authorization
      }
    } catch (error) {
      setLoginError(dispatch, error as ErrorMessageLoginResponse)
    } finally {
      dispatch(setIsLoadingStatusAC(false))
    }
  },
)

export const registrationUserTC = createAsyncThunk(
  'login/registrationUserTC',
  async (userData: NewUserDataRegistrationType, { dispatch }) => {
    try {
      dispatch(setIsLoadingStatusAC(true))

      const { status } = await loginRequests.registration(userData)
      if (status === StatusCode.LOGIN_SUCCESS) {
        return userData
      }
    } catch (error) {
      setLoginError(dispatch, error as ErrorMessageLoginResponse)
    } finally {
      dispatch(setIsLoadingStatusAC(false))
    }
  },
)
