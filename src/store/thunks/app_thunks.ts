import { createAsyncThunk } from '@reduxjs/toolkit'

import { commonDataRequests } from 'api/commonDataRequests'
import { StatusCode } from 'enums/enums'
import { ResponseErrorType } from 'store/types/response_error_type'
import { setError } from 'utils/utils'

export const getCoursesTC = createAsyncThunk(
  'app/getCoursesTC',
  async (_, { dispatch }) => {
    try {
      const { data, status } = await commonDataRequests.getCoursesData()
      if (status === StatusCode.SUCCESS) {
        return data
      }
    } catch (error) {
      setError(dispatch, error as ResponseErrorType)
    }
  },
)
