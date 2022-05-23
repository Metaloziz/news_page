import { createAsyncThunk } from '@reduxjs/toolkit'

import { NewsPayloadType, newsRequests } from 'api/newsRequests'
import { Error, StatusCode } from 'enums/enums'
import { setErrorTrueAC } from 'store/reducers'
import { setPagesCountAC } from 'store/reducers/single_pagination_reducer'
import { RootState } from 'store/store'
import { ResponseErrorType } from 'store/types/response_error_type'
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
        return Data
      }
      dispatch(setErrorTrueAC(Error.EMPTY_NEWS))
    } catch (error) {
      setError(dispatch, error as ResponseErrorType)
      return null
    }
  },
)

export const getNewsByIdTC = createAsyncThunk(
  'section_news/getNewsByIdTC',
  async (newsId: number, { dispatch }) => {
    try {
      const { data, status } = await newsRequests.getNewsById(newsId)

      if (status === StatusCode.GET_NEWS_SUCCESS) {
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
  'section_news/deleteNewsTC',
  async (newsId: number, { dispatch }) => {
    try {
      const { data } = await newsRequests.deleteNews(newsId)

      if (data.id === newsId) {
        return data.id
      }

      return null
    } catch (error) {
      setError(dispatch, error as ResponseErrorType)
      return null
    }
  },
)

export const addNewsViewsValueTC = createAsyncThunk(
  'section_news/addNewsViewsValueTC',
  async (newsId: number, { dispatch }) => {
    try {
      const { data } = await newsRequests.addNewsViewsValue(newsId)
      if (data.id === newsId) {
        return data.id
      }
    } catch (error) {
      setError(dispatch, error as ResponseErrorType)
    }
  },
)

export const postNewsTC = createAsyncThunk(
  'section_news/postNewsTC',
  async (news: NewsPayloadType, { dispatch }) => {
    try {
      const { status } = await newsRequests.postNews(news)
      if (status === StatusCode.POST_NEWS_SUCCESS) {
        // dispatch(getNewsByIdTC(response.data.id)) // пока не нужно
      }
    } catch (error) {
      setError(dispatch, error as ResponseErrorType)
    }
  },
)
