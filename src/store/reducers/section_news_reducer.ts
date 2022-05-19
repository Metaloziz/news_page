import { createSlice } from '@reduxjs/toolkit'

import {
  addNewsViewsValueTC,
  deleteNewsTC,
  getNewsByIdTC,
  getNewsPartTC,
} from 'store/thunks/news_thunks'
import { SectionNewsInitialStateType } from 'store/types'
import { findIndexElement } from 'utils/utils'

const initialState: SectionNewsInitialStateType = {
  news: [
    {
      id: 0,
      name: '',
      subtitle_1: '',
      full_text_1: '',
      image_1: '',
      subtitle_2: '',
      full_text_2: '',
      image_2: '',
      full_text_3: '',
      image_3: '',
      link: '',
      date: '',
      subtitle_3: '',
      section: 0,
      views: 0,
    },
  ],
}

const mainSlice = createSlice({
  name: 'section_news',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getNewsPartTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.news = action.payload
      }
    })
    builder.addCase(deleteNewsTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.news = state.news.filter(comment => comment.id !== action.payload)
      }
    })
    builder.addCase(addNewsViewsValueTC.fulfilled, (state, action) => {
      if (action.payload) {
        const indexElement = findIndexElement(state.news, action.payload)
        state.news[indexElement].views += 1
      }
    })
    builder.addCase(getNewsByIdTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.news.push(action.payload)
      }
    })
  },
})

export const sectionNewsReducer = mainSlice.reducer
