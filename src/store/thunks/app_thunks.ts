import { createAsyncThunk } from '@reduxjs/toolkit'

import { commonDataRequests } from 'api/commonDataRequests'
import { FIRST_ARRAY_ITEM } from 'constants/constants'
import { StatusCode } from 'enums'
import { setIsLoadingStatusAC } from 'store/reducers'
import { ResponseErrorType } from 'store/types'
import { setThunkError } from 'utils'

export const getCoursesTC = createAsyncThunk(
  'app/getCoursesTC',
  async (_, { dispatch }) => {
    try {
      dispatch(setIsLoadingStatusAC(true))

      const { data, status } = await commonDataRequests.getCourses()
      if (status === StatusCode.GET_COURSES_SUCCESS) {
        return data
      }
    } catch (error) {
      setThunkError(dispatch, error as ResponseErrorType)
    } finally {
      dispatch(setIsLoadingStatusAC(false))
    }
  },
)

export const getContactsTC = createAsyncThunk(
  'app/getContactsTC',
  async (_, { dispatch }) => {
    try {
      dispatch(setIsLoadingStatusAC(true))
      const { data, status } = await commonDataRequests.getContacts()
      if (status === StatusCode.GET_CONTACTS_SUCCESS) {
        return data[FIRST_ARRAY_ITEM]
      }
    } catch (error) {
      setThunkError(dispatch, error as ResponseErrorType)
    } finally {
      dispatch(setIsLoadingStatusAC(false))
    }
  },
)
