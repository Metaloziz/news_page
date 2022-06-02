import { createAsyncThunk } from '@reduxjs/toolkit'

import { commentsRequests, PostCommentPayloadType } from 'api'
import { setIsLoadingStatusAC } from 'store/reducers'
import { ResponseErrorType } from 'store/types'
import { setThunkError } from 'utils'

export const getCommentsNewsTC = createAsyncThunk(
  'comments/getCommentsNewsTC',
  async (newsId: number, { dispatch }) => {
    try {
      dispatch(setIsLoadingStatusAC(true))
      const { data } = await commentsRequests.getComments(newsId)
      return data.data
    } catch (error) {
      setThunkError(dispatch, error as ResponseErrorType)
    } finally {
      dispatch(setIsLoadingStatusAC(false))
    }
  },
)
export const deleteCommentTC = createAsyncThunk(
  'comments/deleteCommentTC',
  async (commentId: number, { dispatch }) => {
    try {
      dispatch(setIsLoadingStatusAC(true))
      const { data } = await commentsRequests.deleteComment(commentId)
      if (data.id === commentId) {
        return data.id
      }
    } catch (error) {
      setThunkError(dispatch, error as ResponseErrorType)
    } finally {
      dispatch(setIsLoadingStatusAC(false))
    }
  },
)
export const getCurrentCommentTC = createAsyncThunk(
  'comments/getCurrentCommentTC',
  async (commentId: number, { dispatch }) => {
    try {
      dispatch(setIsLoadingStatusAC(true))
      const { data } = await commentsRequests.getCurrentComment(commentId)
      if (data.id === commentId) {
        return data
      }
    } catch (error) {
      setThunkError(dispatch, error as ResponseErrorType)
    } finally {
      dispatch(setIsLoadingStatusAC(false))
    }
  },
)
export const postCommentTC = createAsyncThunk(
  'comments/postCommentTC',
  async (comment: PostCommentPayloadType, { dispatch }) => {
    try {
      dispatch(setIsLoadingStatusAC(true))
      const { data } = await commentsRequests.postComment(comment)
      dispatch(getCurrentCommentTC(data.id)) // потом улучшить, чтобы не было запроса
    } catch (error) {
      setThunkError(dispatch, error as ResponseErrorType)
    } finally {
      dispatch(setIsLoadingStatusAC(false))
    }
  },
)
