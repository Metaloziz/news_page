import { createAsyncThunk } from '@reduxjs/toolkit'

import { NewsPayloadType, newsRequests } from 'api/newsRequests'
import { NEWS_ON_PAGE } from 'constants/constants'
import { StatusCode } from 'enums/enums'
import { setFirstPageAC, setPagesCountAC } from 'store/reducers/single_pagination_reducer'
import { RootState } from 'store/store'
import { ResponseErrorType } from 'store/thunks/comments_thunks'
import { setError } from 'utils/utils'

export const getNewsPartTC = createAsyncThunk(
  'news/getNewsPartTC',
  async (pageNumber: number, { dispatch, getState }) => {
    const {
      sections: { activeSectionId },
    } = getState() as RootState

    try {
      const {
        data: { Data },
        headers: { pages },
      } = await newsRequests.getNewsPart(pageNumber, activeSectionId)

      if (Data) {
        dispatch(setPagesCountAC(Number(pages)))
      }
      return Data
    } catch (error) {
      setError(dispatch, error as ResponseErrorType)
      return null
    }
  },
)

export const getNewsByIdTC = createAsyncThunk(
  'news/getNewsByIdTC',
  async (newsId: number, { dispatch }) => {
    try {
      const { data, status } = await newsRequests.getNewsById(newsId)

      if (status === StatusCode.GET_NEWS_BY_ID_SUCCESS) {
        return data
      }
      return null
    } catch (error) {
      setError(dispatch, error as ResponseErrorType)
      return null
    }
  },
)

export const deleteNewsTC = createAsyncThunk(
  'news/deleteNewsTC',
  async (newsId: number, { dispatch }) => {
    try {
      const response = await newsRequests.deleteNews(newsId)

      if (response.data.id === newsId) {
        return response.data.id
      }

      return null
    } catch (error) {
      setError(dispatch, error as ResponseErrorType)
      return null
    }
  },
)

export const addNewsViewsValueTC = createAsyncThunk(
  'news/addNewsViewsValueTC',
  async (newsId: number, { dispatch }) => {
    try {
      const response = await newsRequests.addNewsViewsValue(newsId)
      if (response.data.id === newsId) {
        return response.data.id
      }
      return null
    } catch (error) {
      setError(dispatch, error as ResponseErrorType)
      return null
    }
  },
)

export const postNewsTC = createAsyncThunk(
  'news/postNewsTC',
  async (news: NewsPayloadType, { dispatch }) => {
    try {
      const response = await newsRequests.postNews(news)
      if (response.status === StatusCode.POST_NEWS_SUCCESS) {
        dispatch(getNewsByIdTC(response.data.id))
      }
      return null
    } catch (error) {
      setError(dispatch, error as ResponseErrorType)
      return null
    }
  },
)

export const getNewsByKeyWordTC = createAsyncThunk(
  'news/getNewsByKeyWordTC',
  async (keyWord: string, { dispatch }) => {
    try {
      const {
        data: { Data },
      } = await newsRequests.getNewsByKeyWord(keyWord)
      if (Data) {
        const pageCount = Math.round(Data.length / NEWS_ON_PAGE)
        dispatch(setPagesCountAC(pageCount)) // доделать, так как сетается больше 4 новостей
        dispatch(setFirstPageAC())
        dispatch(getNewsPartTC.fulfilled(Data, '', pageCount))
      }
      return null
    } catch (error) {
      setError(dispatch, error as ResponseErrorType)
      return null
    }
  },
)
