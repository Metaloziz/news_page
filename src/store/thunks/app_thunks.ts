import { createAsyncThunk } from '@reduxjs/toolkit'

import { commonDataRequests } from 'api/commonDataRequests'
import { FIRST_ARRAY_ITEM } from 'constants/constants'
import { StatusCode } from 'enums/enums'
import { ResponseErrorType } from 'store/types/response_error_type'
import { setThunkError } from 'utils/set_thunk_error'

export const getCoursesTC = createAsyncThunk(
  'app/getCoursesTC',
  async (_, { dispatch }) => {
    try {
      const { data, status } = await commonDataRequests.getCourses()
      if (status === StatusCode.GET_COURSES_SUCCESS) {
        return data
      }
    } catch (error) {
      setThunkError(dispatch, error as ResponseErrorType)
    }
  },
)

export const getContactsTC = createAsyncThunk(
  'app/getContactsTC',
  async (_, { dispatch }) => {
    try {
      const { data, status } = await commonDataRequests.getContacts()
      if (status === StatusCode.GET_CONTACTS_SUCCESS) {
        return data[FIRST_ARRAY_ITEM]
      }
    } catch (error) {
      setThunkError(dispatch, error as ResponseErrorType)
    }
  },
)
