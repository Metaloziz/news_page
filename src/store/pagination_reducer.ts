import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getNewsTC} from "store/news_reducer";


export const initialState: PaginationInitialStateType = {
  countNewsOnPage: 1,
  totalCountNews: 1,
  currentPage: 1
}

export const mainSlice = createSlice({
  name: 'pagination',
  initialState: initialState,
  reducers: {
    setCurrentPageAC: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    },
  },
  extraReducers: builder => {
    builder.addCase(getNewsTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.totalCountNews = action.payload.length
      }
    })
  }
})

export const {setCurrentPageAC} = mainSlice.actions
export const pagination_reducer = mainSlice.reducer


// types
export type PaginationInitialStateType = {
  countNewsOnPage: number
  totalCountNews: number
  currentPage: number
}

export type SetCountNewsAction = Omit<PaginationInitialStateType, 'currentPage'>