import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { deleteCommentTC, getCommentsNewsTC } from 'store/thunks/comments_thunks'
import {
  addNewsViewsValueTC,
  deleteNewsTC,
  getNewsPartTC,
} from 'store/thunks/news_thunks'
import { NewsType } from 'store/types/types'
import { findIndexElement } from 'utils/utils'

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
    }, // пока не используется
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
    builder.addCase(deleteCommentTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.comments = state.comments.filter(comment => comment.id !== action.payload)
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
