import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { SinglePaginationReducerType } from 'store/types'

const initialState: SinglePaginationReducerType = {
  currentPage: 1,
  pagesCount: 1,
}

const mainSlice = createSlice({
  name: 'single_pagination',
  initialState,
  reducers: {
    setNextPageAC: state => {
      state.currentPage += 1
    },
    setPreviousPageAC: state => {
      state.currentPage -= 1
    },
    setPagesCountAC: (state, action: PayloadAction<number>) => {
      state.pagesCount = action.payload
    },
    setFirstPageAC: state => {
      // как обойтись без замыканя ?
      state.currentPage = initialState.currentPage
    },
  },
})

export const { setPreviousPageAC, setNextPageAC, setPagesCountAC, setFirstPageAC } =
  mainSlice.actions
export const singlePaginationReducer = mainSlice.reducer
