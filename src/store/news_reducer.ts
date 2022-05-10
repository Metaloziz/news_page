import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { NewsType } from 'api/data'
import { getCommentsNewsTC, getNewsPartTC } from 'store/thunks/news_thunks'

export const initialState: NewsInitialStateType = {
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
    {
      id: 1,
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
  currentNews: {
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
  comments: [
    {
      id: 0,
      author: 'author',
      text: 'text',
      date: 'date',
      news_id: 0,
    },
    {
      id: 1,
      author: 'author',
      text: 'text',
      date: 'date',
      news_id: 2,
    },
  ],
}

export const mainSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    getNewsAC: (state, action: PayloadAction<NewsType[]>) => {
      state.news = action.payload
    },
    setCurrentNewsAC: (state, action: PayloadAction<number>) => {
      const currentNews = state.news.find(item => item.id === action.payload)
      if (currentNews) {
        state.currentNews = currentNews
      }
    },
    removeCommentsAC: state => {
      state.comments = []
    },
  },
  extraReducers: builder => {
    builder.addCase(getNewsPartTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.news = action.payload
      }
    })
    builder.addCase(getCommentsNewsTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.comments = action.payload
      } else {
        state.comments = []
      }
    })
  },
})

export const { getNewsAC, setCurrentNewsAC, removeCommentsAC } = mainSlice.actions
export const newsReducer = mainSlice.reducer

// types
export type CommentType = {
  id: number
  author: string
  text: string
  news_id: number
  date: string
}

export type NewsInitialStateType = {
  news: NewsType[]
  currentNews: NewsType
  comments: CommentType[]
}
