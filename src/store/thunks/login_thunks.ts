import { createAsyncThunk } from '@reduxjs/toolkit'

import { loginRequests } from 'api/loginRequests'
import { StatusCode } from 'enums'
import { setIsLoadingStatusAC } from 'store/reducers'
import { setIsLoginAC } from 'store/reducers/login_reducer'
import { RootState } from 'store/store'
import { ErrorMessageLoginResponse } from 'store/types/error_message_login_response'
import { UserDataRegistrationType } from 'store/types/new_user_data_registration_type'
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
        dispatch(setIsLoginAC(true))
        return authorization
      }
    } catch (error) {
      setLoginError(dispatch, error as ErrorMessageLoginResponse)
    } finally {
      dispatch(setIsLoadingStatusAC(false))
    }
  },
)

export const postLogoutTC = createAsyncThunk(
  'login/postLogoutTC',
  async (_, { dispatch, getState }) => {
    try {
      dispatch(setIsLoadingStatusAC(true))

      const {
        login: { token },
      } = getState() as RootState

      const { status } = await loginRequests.logout(token)

      if (status === StatusCode.LOGOUT_SUCCESS) {
        dispatch(setIsLoginAC(false))
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
  async (userData: UserDataRegistrationType, { dispatch }) => {
    try {
      dispatch(setIsLoadingStatusAC(true))

      const { status } = await loginRequests.registration(userData)

      return status === StatusCode.REGISTRATION_SUCCESS
    } catch (error) {
      setLoginError(dispatch, error as ErrorMessageLoginResponse)
    } finally {
      dispatch(setIsLoadingStatusAC(false))
    }
  },
)
