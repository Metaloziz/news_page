import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { NEWS_BY_SECTIONS } from 'constants/constants'
import { InitialAppStateType, NewsViewType } from 'store/types'

const initialState: InitialAppStateType = {
  isError: false,
  errorMessage: '',
  newsModeView: NEWS_BY_SECTIONS,
}

const mainSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setErrorTrueAC: (state, action: PayloadAction<string>) => {
      state.errorMessage = action.payload
      state.isError = true
    },
    setErrorFalseAC: state => {
      state.errorMessage = ''
      state.isError = false
    },
    changeNewsTypeViewAC: (state, action: PayloadAction<NewsViewType>) => {
      if (state.newsModeView === action.payload) return
      state.newsModeView = action.payload
    },
  },
})

export const { setErrorTrueAC, setErrorFalseAC, changeNewsTypeViewAC } = mainSlice.actions
export const appReducer = mainSlice.reducer
