import { createAsyncThunk } from '@reduxjs/toolkit'

import { commentsRequests, PostCommentPayloadType } from 'api/commentsRequests'
import { ResponseErrorType } from 'store/types/response_error_type'
import { setError } from 'utils/utils'

export const getCommentsNewsTC = createAsyncThunk(
  'comments/getCommentsNewsTC',
  async (newsId: number, { dispatch }) => {
    try {
      const { data } = await commentsRequests.getComments(newsId)
      return data.data
    } catch (error) {
      setError(dispatch, error as ResponseErrorType)
    }
  },
)
export const deleteCommentTC = createAsyncThunk(
  'comments/deleteCommentTC',
  async (commentId: number, { dispatch }) => {
    try {
      const { data } = await commentsRequests.deleteComment(commentId)
      if (data.id === commentId) {
        return data.id
      }
    } catch (error) {
      setError(dispatch, error as ResponseErrorType)
    }
  },
)
export const getCurrentCommentTC = createAsyncThunk(
  'comments/getCurrentCommentTC',
  async (commentId: number, { dispatch }) => {
    try {
      const { data } = await commentsRequests.getCurrentComment(commentId)
      if (data.id === commentId) {
        return data
      }
    } catch (error) {
      setError(dispatch, error as ResponseErrorType)
    }
  },
)
export const postCommentTC = createAsyncThunk(
  'comments/postCommentTC',
  async (comment: PostCommentPayloadType, { dispatch }) => {
    try {
      const { data } = await commentsRequests.postComment(comment)
      dispatch(getCurrentCommentTC(data.id)) // потом улучшить, чтобы не было запроса
    } catch (error) {
      setError(dispatch, error as ResponseErrorType)
    }
  },
)
