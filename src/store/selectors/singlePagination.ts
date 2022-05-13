import { RootState } from 'store/store'

export const selectorNumberPage = (state: RootState): number =>
  state.singlePagination.currentPage

export const selectorCountPage = (state: RootState): number =>
  state.singlePagination.pagesCount
