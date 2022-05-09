import {createSlice} from "@reduxjs/toolkit";

export const initialState: SinglePaginationReducerType = {
  currentPage: 1
}

export const mainSlice = createSlice({
  name: 'single_pagination',
  initialState,
  reducers: {
    setNextPageAC: (state) => {
      state.currentPage += 1
    },
    setPreviousPageAC: (state) => {
      state.currentPage -= 1
    },
  },
})

export const {setPreviousPageAC, setNextPageAC} = mainSlice.actions
export const single_pagination_reducer = mainSlice.reducer

// types
export type SinglePaginationReducerType = {
  currentPage: number
}
