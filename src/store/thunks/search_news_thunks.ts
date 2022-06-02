import { createAsyncThunk } from '@reduxjs/toolkit'

import { newsRequests } from 'api'
import { StatusCode } from 'enums'
import { setIsLoadingStatusAC } from 'store/reducers'
import { ResponseErrorType } from 'store/types'
import { setThunkError } from 'utils'

export const getSearchNewsTC = createAsyncThunk(
  'search_news/getSearchNewsTC',
  async (keyWord: string, { dispatch }) => {
    try {
      dispatch(setIsLoadingStatusAC(true))
      const {
        data: { Data },
        status,
      } = await newsRequests.getSearchNews(keyWord)

      if (status === StatusCode.GET_NEWS_SUCCESS) {
        return Data
      }
    } catch (error) {
      setThunkError(dispatch, error as ResponseErrorType)
    } finally {
      dispatch(setIsLoadingStatusAC(false))
    }
  },
)
