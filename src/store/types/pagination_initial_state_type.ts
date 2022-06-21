// types
export type PaginationInitialStateType = {
  countNewsOnPage: number
  totalCountNews: number
  currentPage: number
}
export type SetCountNewsAction = Omit<PaginationInitialStateType, 'currentPage'>
