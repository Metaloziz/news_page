import { createAsyncThunk } from '@reduxjs/toolkit'

import { NewsPayloadType, newsRequests } from 'api'
import { StatusCode } from 'enums'
import { setCurrentNewsAC, setIsLoadingStatusAC } from 'store/reducers'
import { RootState } from 'store/store'
import { ResponseErrorType } from 'store/types'
import { setThunkError } from 'utils'

export const updateNewsTC = createAsyncThunk(
  'current_news/updateNewsTC',
  async (news: NewsPayloadType, { dispatch, getState }) => {
    const {
      currentNews: { currentNews },
    } = getState() as RootState

    try {
      dispatch(setIsLoadingStatusAC(true))
      const { status } = await newsRequests.updateNews(news, currentNews.id)
      if (status === StatusCode.UPDATE_NEWS_SUCCESS) {
        dispatch(setCurrentNewsAC({ ...currentNews, ...news.body }))
      }
    } catch (error) {
      setThunkError(dispatch, error as ResponseErrorType)
    } finally {
      dispatch(setIsLoadingStatusAC(false))
    }
  },
)
