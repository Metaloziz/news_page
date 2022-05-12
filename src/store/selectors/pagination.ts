import { RootState } from 'store/store'

export const selectorCurrentPage = (state: RootState): number =>
  state.pagination.currentPage
export const selectorTotalCount = (state: RootState): number =>
  state.pagination.totalCountNews
export const selectCountNewsOnPage = (state: RootState): number =>
  state.pagination.countNewsOnPage
