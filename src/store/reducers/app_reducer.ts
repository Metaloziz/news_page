import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type InitialAppStateType = {
  isError: boolean
  errorMessage: string
}

export const initialState: InitialAppStateType = {
  isError: false,
  errorMessage: '',
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
  },
})

export const { setErrorTrueAC, setErrorFalseAC } = mainSlice.actions
export const appReducer = mainSlice.reducer
