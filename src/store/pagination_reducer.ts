import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getNewsPartTC} from "store/news_reducer";


// не используется на главной странице, пока

export const initialState: PaginationInitialStateType = {
  countNewsOnPage: 2,
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
    builder.addCase(getNewsPartTC.fulfilled, (state, action) => {
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