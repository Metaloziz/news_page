import { createAsyncThunk } from '@reduxjs/toolkit'

import { PostCommentPayloadType, commentsRequests } from 'api/commentsRequests'
import { RootState } from 'store/store'

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
export const postCommentTC = createAsyncThunk(
  'news/postCommentTC',
  async (comment: PostCommentPayloadType, { dispatch }) => {
    try {
      const responce = await commentsRequests.postComment(comment)
      dispatch(getCommentsNewsTC(comment.news_id))
      return null
    } catch (e) {
      console.warn(e)
      return null
    }
  },
)
