import { createAsyncThunk } from '@reduxjs/toolkit'

import { commentsRequests, PostCommentPayloadType } from 'api/commentsRequests'
import { ResponseErrorType } from 'store/types/response_error_type'
import { setError } from 'utils/utils'

export const getCommentsNewsTC = createAsyncThunk(
  'comments/getCommentsNewsTC',
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
  'comments/deleteCommentTC',
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
  'comments/getCurrentCommentTC',
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
  'comments/postCommentTC',
  async (comment: PostCommentPayloadType, { dispatch }) => {
    try {
      const response = await commentsRequests.postComment(comment)
      dispatch(getCurrentCommentTC(response.data.id)) // потом улучшить, чтобы не было запроса
      return null
    } catch (error) {
      setError(dispatch, error as ResponseErrorType)
      return null
    }
  },
)
