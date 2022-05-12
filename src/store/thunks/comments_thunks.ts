import { createAsyncThunk } from '@reduxjs/toolkit'

import { commentsRequests, PostCommentPayloadType } from 'api/commentsRequests'

export const getCommentsNewsTC = createAsyncThunk(
  'news/getCommentsNewsTC',
  async (newsId: number) => {
    try {
      const response = await commentsRequests.getComments(newsId)
      return response.data.data
    } catch (e) {
      console.warn(e)
      return null
    }
  },
)
export const deleteCommentTC = createAsyncThunk(
  'news/deleteCommentTC',
  async (commentId: number) => {
    try {
      const response = await commentsRequests.deleteComment(commentId)
      if (response.data.id === commentId) {
        return response.data.id
      }
      return null
    } catch (e) {
      console.warn(e)
      return null
    }
  },
)
export const getCurrentCommentTC = createAsyncThunk(
  'news/getCurrentCommentTC',
  async (commentId: number) => {
    try {
      const response = await commentsRequests.getCurrentComment(commentId)
      if (response.data.id === commentId) {
        return response.data
      }
      return null
    } catch (e) {
      console.warn(e)
      return null
    }
  },
)
export const postCommentTC = createAsyncThunk(
  'news/postCommentTC',
  async (comment: PostCommentPayloadType, { dispatch }) => {
    try {
      const response = await commentsRequests.postComment(comment)
      dispatch(getCurrentCommentTC(response.data.id))
      return null
    } catch (e) {
      console.warn(e)
      return null
    }
  },
)
