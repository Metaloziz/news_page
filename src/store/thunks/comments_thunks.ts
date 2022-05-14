import { createAsyncThunk } from '@reduxjs/toolkit'

import { commentsRequests, PostCommentPayloadType } from 'api/commentsRequests'
import { setError } from 'utils/utils'

export type ResponseErrorType = {
  response: { data: { message: string } }
}

export const getCommentsNewsTC = createAsyncThunk(
  'news/getCommentsNewsTC',
  async (newsId: number, { dispatch }) => {
    try {
      const response = await commentsRequests.getComments(newsId)
      return response.data.data
    } catch (error) {
      setError(dispatch, error as ResponseErrorType)
      return null
    }
  },
)
export const deleteCommentTC = createAsyncThunk(
  'news/deleteCommentTC',
  async (commentId: number, { dispatch }) => {
    try {
      const response = await commentsRequests.deleteComment(commentId)
      if (response.data.id === commentId) {
        return response.data.id
      }
      return null
    } catch (error) {
      setError(dispatch, error as ResponseErrorType)
      return null
    }
  },
)
export const getCurrentCommentTC = createAsyncThunk(
  'news/getCurrentCommentTC',
  async (commentId: number, { dispatch }) => {
    try {
      const response = await commentsRequests.getCurrentComment(commentId)
      if (response.data.id === commentId) {
        return response.data
      }
      return null
    } catch (error) {
      setError(dispatch, error as ResponseErrorType)
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
    } catch (error) {
      setError(dispatch, error as ResponseErrorType)
      return null
    }
  },
)
