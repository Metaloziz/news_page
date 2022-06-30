import { createAsyncThunk } from '@reduxjs/toolkit'

import { NewsPayloadType, newsRequests } from 'api'
import { Error, StatusCode } from 'enums'
import { setErrorTrueAC, setIsLoadingStatusAC, setPagesCountAC } from 'store/reducers'
import { RootState } from 'store/store'
import { ResponseErrorType } from 'store/types'
import { setThunkError } from 'utils'

export const getNewsPartTC = createAsyncThunk(
  'section_news/getNewsPartTC',
  async (pageNumber: number, { dispatch, getState }) => {
    const {
      sections: { activeSectionId },
    } = getState() as RootState

    try {
      dispatch(setIsLoadingStatusAC(true))
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
      setThunkError(dispatch, error as ResponseErrorType)
    } finally {
      dispatch(setIsLoadingStatusAC(false))
    }
  },
)

export const getNewsByIdTC = createAsyncThunk(
  'section_news/getNewsByIdTC',
  async (newsId: number, { dispatch }) => {
    try {
      dispatch(setIsLoadingStatusAC(true))
      const { data, status } = await newsRequests.getNewsById(newsId)

      if (status === StatusCode.GET_NEWS_SUCCESS) {
        return data
      }
    } catch (error) {
      setThunkError(dispatch, error as ResponseErrorType)
    } finally {
      dispatch(setIsLoadingStatusAC(false))
    }
  },
)

export const deleteNewsTC = createAsyncThunk(
  'section_news/deleteNewsTC',
  async (newsId: number, { dispatch, getState }) => {
    try {
      dispatch(setIsLoadingStatusAC(true))

      const {
        login: { token },
      } = getState() as RootState

      const { data } = await newsRequests.deleteNews(newsId, token)

      if (data.id === newsId) {
        return data.id
      }
    } catch (error) {
      setThunkError(dispatch, error as ResponseErrorType)
    } finally {
      dispatch(setIsLoadingStatusAC(false))
    }
  },
)

export const addNewsViewsValueTC = createAsyncThunk(
  'section_news/addNewsViewsValueTC',
  async (newsId: number, { dispatch }) => {
    try {
      dispatch(setIsLoadingStatusAC(true))
      const { data } = await newsRequests.addNewsViewsValue(newsId)
      if (data.id === newsId) {
        return data.id
      }
    } catch (error) {
      setThunkError(dispatch, error as ResponseErrorType)
    } finally {
      dispatch(setIsLoadingStatusAC(false))
    }
  },
)

export const postNewsTC = createAsyncThunk(
  'section_news/postNewsTC',
  async (news: NewsPayloadType, { dispatch, getState }) => {
    try {
      dispatch(setIsLoadingStatusAC(true))

      const {
        login: { token },
      } = getState() as RootState

      const {
        status,
        data: { id },
      } = await newsRequests.postNews(news, token)

      if (status === StatusCode.POST_NEWS_SUCCESS) {
        dispatch(getNewsByIdTC(id))
      }
    } catch (error) {
      setThunkError(dispatch, error as ResponseErrorType)
    } finally {
      dispatch(setIsLoadingStatusAC(false))
    }
  },
)
