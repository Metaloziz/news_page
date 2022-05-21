import { createAsyncThunk } from '@reduxjs/toolkit'

import { newsRequests } from 'api/newsRequests'
import { StatusCode } from 'enums/enums'
import { getSearchNewsTC } from 'store/thunks/search_news_thunks'
import { ResponseErrorType } from 'store/types'
import { setError } from 'utils/utils'

export const getPopularNewsTC = createAsyncThunk(
  'search_news/getPopularNewsTC',
  async (_, { dispatch }) => {
    try {
      const {
        data: { Data },
        status,
      } = await newsRequests.getPopularNews()
      if (status === StatusCode.GET_NEWS_SUCCESS) {
        dispatch(getSearchNewsTC.fulfilled(Data, '', ''))
      }
    } catch (error) {
      setError(dispatch, error as ResponseErrorType)
    }
  },
)
