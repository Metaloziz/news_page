import { createSlice } from '@reduxjs/toolkit'

import { NewsInitialStateType } from 'store/reducers/news_reducer'
import { getNewsByKeyWordTC } from 'store/thunks/search_news_thunks'

export type SearchNewsInitialStateType = Pick<NewsInitialStateType, 'news'>

export const initialState: SearchNewsInitialStateType = {
  news: [
    {
      id: 0,
      name: '',
      subtitle_1: '',
      fullText_1: '',
      image_1: '',
      subtitle_2: '',
      fullText_2: '',
      image_2: '',
      fullText_3: '',
      image_3: '',
      link: '',
      date: '',
      subtitle_3: '',
      section: 0,
      views: 0,
    },
  ],
}

export const mainSlice = createSlice({
  name: 'search_news',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getNewsByKeyWordTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.news = action.payload
      }
    })
  },
})

export const searchNewsReducer = mainSlice.reducer
