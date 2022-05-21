import { RootState } from 'store/store'

export const selectCurrentPage = (state: RootState): number =>
  state.pagination.currentPage
export const selectTotalCount = (state: RootState): number =>
  state.pagination.totalCountNews
export const selectCountNewsOnPage = (state: RootState): number =>
  state.pagination.countNewsOnPage
