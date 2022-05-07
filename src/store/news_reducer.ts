import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {NewsType} from "api/data";
import {appRequest} from "api/api";


export type NewsInitialStateType = {
  news: NewsType[]
  currentNews: NewsType
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
  }
}

export const getNewsTC = createAsyncThunk('news/getNewsTC', async () => {
  try {
    const res = await appRequest.getAllNews()
    return res.data
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

    }
  },
  extraReducers: (builder) => {
    builder.addCase(getNewsTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.news = action.payload
      }
    })
  }
})

export const {getNewsAC, setCurrentNewsAC} = mainSlice.actions
export const news_reducer = mainSlice.reducer


