import { createAsyncThunk } from '@reduxjs/toolkit'

import { newsRequests } from 'api/newsRequests'
import { ResponseErrorType } from 'store/types/response_error_type'
import { setError } from 'utils/utils'

export const getNewsByKeyWordTC = createAsyncThunk(
  'news/getNewsByKeyWordTC',
  async (keyWord: string, { dispatch }) => {
    try {
      const {
        data: { Data },
      } = await newsRequests.getNewsByKeyWord(keyWord)
      if (Data) {
        // const pageCount = Math.round(Data.length / NEWS_ON_PAGE)
        // dispatch(setPagesCountAC(pageCount)) // доделать, так как сетается больше 4 новостей
        // dispatch(setFirstPageAC())
        // dispatch(getNewsPartTC.fulfilled(Data, '', pageCount))
        return Data
      }
      return null
    } catch (error) {
      setError(dispatch, error as ResponseErrorType)
      return null
    }
  },
)
