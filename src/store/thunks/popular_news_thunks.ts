import { createAsyncThunk } from '@reduxjs/toolkit'

import { getSearchNewsTC } from './search_news_thunks'

import { newsRequests } from 'api'
import { StatusCode } from 'enums'
import { setIsLoadingStatusAC } from 'store/reducers'
import { ResponseErrorType } from 'store/types'
import { setThunkError } from 'utils'

export const getPopularNewsTC = createAsyncThunk(
  'search_news/getPopularNewsTC',
  async (_, { dispatch }) => {
    try {
      dispatch(setIsLoadingStatusAC(true))
      const {
        data: { Data },
        status,
      } = await newsRequests.getPopularNews()
      if (status === StatusCode.GET_NEWS_SUCCESS) {
        dispatch(getSearchNewsTC.fulfilled(Data, '', ''))
      }
    } catch (error) {
      setThunkError(dispatch, error as ResponseErrorType)
    } finally {
      dispatch(setIsLoadingStatusAC(false))
    }
  },
)
