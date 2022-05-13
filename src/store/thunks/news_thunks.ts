import { createAsyncThunk } from '@reduxjs/toolkit'

import { NewsPayloadType, newsRequests } from 'api/newsRequests'
import { setPagesCountAC } from 'store/reducers/single_pagination_reducer'
import { RootState } from 'store/store'

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
    } catch (e) {
      console.warn(e)
      return null
    }
  },
)
export const deleteNewsTC = createAsyncThunk(
  'news/deleteNewsTC',
  async (newsId: number) => {
    try {
      const response = await newsRequests.deleteNews(newsId)

      if (response.data.id === newsId) {
        return response.data.id
      }

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
      const response = await newsRequests.addNewsViewsValue(newsId)
      if (response.data.id === newsId) {
        return response.data.id
      }
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
      const response = await newsRequests.postNews(news)
      dispatch(getNewsPartTC(currentPage))
      return null
    } catch (e) {
      console.warn(e)
      return null
    }
  },
)
