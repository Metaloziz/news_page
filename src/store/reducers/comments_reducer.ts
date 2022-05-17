import { createSlice } from '@reduxjs/toolkit'

import { deleteCommentTC, getCommentsNewsTC, getCurrentCommentTC } from 'store/thunks'
import { CommentsInitialStateType } from 'store/types'

const initialState: CommentsInitialStateType = {
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

const mainSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    removeCommentsAC: state => {
      state.comments = []
    },
  },
  extraReducers: builder => {
    builder.addCase(getCommentsNewsTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.comments = action.payload
      } else {
        state.comments = []
      }
    })
    builder.addCase(getCurrentCommentTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.comments.push(action.payload)
      }
    })
    builder.addCase(deleteCommentTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.comments = state.comments.filter(comment => comment.id !== action.payload)
      }
    })
  },
})

export const { removeCommentsAC } = mainSlice.actions
export const commentsReducer = mainSlice.reducer
