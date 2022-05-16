import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { NEWS_BY_SEARCHING, NEWS_BY_SECTIONS } from 'constants/constants'

export type NewsViewType = typeof NEWS_BY_SECTIONS | typeof NEWS_BY_SEARCHING

export type InitialAppStateType = {
  isError: boolean
  errorMessage: string
  newsModeView: NewsViewType
}

export const initialState: InitialAppStateType = {
  isError: false,
  errorMessage: '',
  newsModeView: NEWS_BY_SECTIONS,
}

export const mainSlice = createSlice({
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
