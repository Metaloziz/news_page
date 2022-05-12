import { createAsyncThunk } from '@reduxjs/toolkit'

import { NewsPayloadType, newsRequests } from 'api/newsRequests'
import { setPreviousPageAC } from 'store/reducers/single_pagination_reducer'
import { RootState } from 'store/store'

export const getNewsPartTC = createAsyncThunk(
  'news/getNewsTC',
  async (pageNumber: number, { dispatch }) => {
    try {
      const res = await newsRequests.getNewsPart(pageNumber)
      if (res.data.Data === null) {
        dispatch(setPreviousPageAC()) // костыль, мне нужна длинна массива без его полной загрузки
      }
      return res.data.Data
    } catch (e) {
      console.warn(e)
      return null
    }
  },
)
export const deleteNewsTC = createAsyncThunk(
  'news/deleteNewsTC',
  async (newsId: number, { dispatch, getState }) => {
    const state = getState() as RootState
    const { currentPage } = state.singlePagination

    try {
      const responce = await newsRequests.deleteNews(newsId)
      dispatch(getNewsPartTC(currentPage))
      return null
    } catch (e) {
      console.warn(e)
      return null
    }
  },
)
export const addNewsViewsValueTC = createAsyncThunk(
  'news/addNewsViewsValueTC',
  async (newsId: number) => {
    try {
      const responce = await newsRequests.addNewsViewsValue(newsId)
      return null
    } catch (e) {
      console.warn(e)
      return null
    }
  },
)

export const postNewsTC = createAsyncThunk(
  'news/postNewsTC',
  async (news: NewsPayloadType, { dispatch, getState }) => {
    const state = getState() as RootState
    const { currentPage } = state.singlePagination

    try {
      const responce = await newsRequests.postNews(news)
      dispatch(getNewsPartTC(currentPage))
      return null
    } catch (e) {
      console.warn(e)
      return null
    }
  },
)
