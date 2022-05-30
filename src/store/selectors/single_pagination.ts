import { RootState } from 'store/store'

export const selectNumberPage = (state: RootState): number =>
  state.singlePagination.currentPage

export const selectCountPage = (state: RootState): number =>
  state.singlePagination.pagesCount
