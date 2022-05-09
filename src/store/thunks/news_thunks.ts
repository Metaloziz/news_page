import {createAsyncThunk} from "@reduxjs/toolkit";
import {AddCommentPayloadType, commentsRequests, newsRequests} from "api/api";
import {RootState} from "store/store";
import {setPreviousPageAC} from "store/single_pagination_reducer";

export const getNewsPartTC = createAsyncThunk('news/getNewsTC', async (pageNumber: number, {dispatch}) => {
  try {
    const res = await newsRequests.getNewsPart(pageNumber)
    if (res.data.Data === null) {
      dispatch(setPreviousPageAC())  // костыль, мне нужна длинна массива без его полной загрузки
    }
    return res.data.Data
  } catch (e) {
    console.warn(e)
    return null
  }
})
export const removeNewsTC = createAsyncThunk('news/removeNewsTC', async (newsId: number, {
  dispatch,
  getState
}) => {

  const state = getState() as RootState
  const currentPage = state.single_pagination_reducer.currentPage

  try {
    const responce = await newsRequests.deleteNews(newsId)
    dispatch(getNewsPartTC(currentPage))
    return null
  } catch (e) {
    console.warn(e)
    return null
  }
})
export const getCommentsNewsTC = createAsyncThunk('news/getCommentsNewsTC', async (newsId: number) => {
  try {
    const responce = await commentsRequests.getComments(newsId)
    return responce.data.data
  } catch (e) {
    console.warn(e)
    return null
  }
})
export const addNewsViewsValueTC = createAsyncThunk('news/addNewsViewsValueTC', async (newsId: number) => {
  try {
    const responce = await newsRequests.addNewsViewsValue(newsId)
    return null
  } catch (e) {
    console.warn(e)
    return null
  }
})
export const removeCommentTC = createAsyncThunk('news/removeCommentTC', async (commentId: number, {
  dispatch,
  getState
}) => {

  const state = getState() as RootState
  const newsId = state.news_reducer.currentNews.id
  try {
    const responce = await commentsRequests.removeComment(commentId)
    dispatch(getCommentsNewsTC(newsId))
    return null
  } catch (e) {
    console.warn(e)
    return null
  }
})
export const addCommentTC = createAsyncThunk('news/addCommentTC', async (comment: AddCommentPayloadType, {dispatch}) => {
  try {
    const responce = await commentsRequests.addComment(comment)
    dispatch(getCommentsNewsTC(comment.news_id))
    return null
  } catch (e) {
    console.warn(e)
    return null
  }
})