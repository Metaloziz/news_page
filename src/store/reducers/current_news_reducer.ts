import { createSlice } from '@reduxjs/toolkit'

import { CURRENT_NEWS } from 'constants/constants'
import { getNewsByIdTC } from 'store/thunks'
import { CurrentNewsInitialStateType } from 'store/types'

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
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getNewsByIdTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.currentNews = action.payload
        localStorage.setItem(CURRENT_NEWS, JSON.stringify(action.payload))
      }
    })
  },
})

export const currentNewsReducer = mainSlice.reducer
