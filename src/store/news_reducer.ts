import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {NewsType} from "api/data";
import {AddCommentPayloadType, commentsRequests, newsRequests} from "api/api";
import {setPreviousPageAC} from "store/single_pagination_reducer";
import {RootState} from "store/store";

export type CommentType = {
  id: number,
  author: string,
  text: string,
  news_id: number,
  date: string
}

export type NewsInitialStateType = {
  news: NewsType[]
  currentNews: NewsType
  comments: CommentType[]
}

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
      views: 0
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
      views: 0
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
    views: 0
  },
  comments: [
    {
      id: 0,
      author: 'author',
      text: 'text',
      date: 'date',
      news_id: 0
    }, {
      id: 1,
      author: 'author',
      text: 'text',
      date: 'date',
      news_id: 2
    }
  ]
}

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

export const getCommentsNewsTC = createAsyncThunk('news/getCommentsNewsTC', async (newsId: number) => {
  try {
    const res = await commentsRequests.getComments(newsId)
    return res.data.data
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

export const mainSlice = createSlice({
  name: 'news',
  initialState: initialState,
  reducers: {
    getNewsAC: (state, action: PayloadAction<NewsType[]>) => {
      state.news = action.payload
    },
    setCurrentNewsAC: (state, action: PayloadAction<number>) => {

      const currentNews = state.news.find((item) => item.id === action.payload)
      if (currentNews) {
        state.currentNews = currentNews
      }

    },
    removeCommentsAC: (state) => {
      state.comments = []
    }
  },
  extraReducers: (builder) => {
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
  }
})

export const {getNewsAC, setCurrentNewsAC, removeCommentsAC} = mainSlice.actions
export const news_reducer = mainSlice.reducer


