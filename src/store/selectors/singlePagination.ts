import { RootState } from 'store/store'

export const selectorNumberPage = (state: RootState): number =>
  state.singlePagination.currentPage
