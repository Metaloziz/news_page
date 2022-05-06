import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type InitialStateType = {
  countNewsOnPage: number
  totalCountNews: number
  currentPage: number
}

export const initialState: InitialStateType = {
  countNewsOnPage: 4,
  totalCountNews: 100,
  currentPage: 1
}

export const mainSlice = createSlice({
  name: 'main',
  initialState: initialState,
  reducers: {
    setCurrentPageAC: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    }
  }
})

export const {setCurrentPageAC} = mainSlice.actions
export const main_reducer = mainSlice.reducer


