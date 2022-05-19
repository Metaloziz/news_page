import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { CurrentNewsInitialStateType, NewsType } from 'store/types'

const initialState: CurrentNewsInitialStateType = {
  currentNews: {
    id: 0,
    name: '',
    subtitle_1: '',
    full_text_1: '',
    image_1: '',
    subtitle_2: '',
    full_text_2: '',
    image_2: '',
    full_text_3: '',
    image_3: '',
    link: '',
    date: '',
    subtitle_3: '',
    section: 0,
    views: 0,
  },
}

const mainSlice = createSlice({
  name: 'current_news',
  initialState,
  reducers: {
    setCurrentNewsAC: (state, action: PayloadAction<NewsType>) => {
      state.currentNews = action.payload
    },
  },
})

export const { setCurrentNewsAC } = mainSlice.actions
export const currentNewsReducer = mainSlice.reducer
