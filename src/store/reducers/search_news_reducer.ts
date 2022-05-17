import { createSlice } from '@reduxjs/toolkit'

import { NEWS_ON_PAGE } from 'constants/constants'
import { getNewsByKeyWordTC } from 'store/thunks/search_news_thunks'
import { SearchNewsInitialStateType } from 'store/types'

const initialState: SearchNewsInitialStateType = {
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
  partNews: [],
  currentPage: 1,
  pageCount: 1,
  part: {
    firstElementIndex: 0,
    lastElementIndex: 4,
  },
}

const mainSlice = createSlice({
  name: 'search_news',
  initialState,
  reducers: {
    setNextPageSearchNewsAC: state => {
      state.currentPage += 1
      state.part.firstElementIndex += NEWS_ON_PAGE
      state.part.lastElementIndex += NEWS_ON_PAGE
    },
    setPreviewPageSearchNewsAC: state => {
      state.currentPage -= 1
      state.part.firstElementIndex -= NEWS_ON_PAGE
      state.part.lastElementIndex -= NEWS_ON_PAGE
    },
    setPartSearchNewsAC: state => {
      state.partNews = state.news.slice(
        state.part.firstElementIndex,
        state.part.lastElementIndex,
      )
    },
  },
  extraReducers: builder => {
    builder.addCase(getNewsByKeyWordTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.news = action.payload
        state.pageCount = Math.ceil(action.payload.length / NEWS_ON_PAGE)
        state.part = {
          firstElementIndex: initialState.part.firstElementIndex,
          lastElementIndex: initialState.part.lastElementIndex,
        }
        state.currentPage = initialState.currentPage
        state.partNews = state.news.slice(
          state.part.firstElementIndex,
          state.part.lastElementIndex,
        )
      }
    })
  },
})

export const {
  setNextPageSearchNewsAC,
  setPreviewPageSearchNewsAC,
  setPartSearchNewsAC,
} = mainSlice.actions
export const searchNewsReducer = mainSlice.reducer
