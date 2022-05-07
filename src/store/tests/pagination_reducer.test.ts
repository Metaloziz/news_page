import {
  pagination_reducer,
  PaginationInitialStateType,
  setCurrentPageAC
} from "store/pagination_reducer";

const newCurrentPage: number = 10


const paginationInitialState: PaginationInitialStateType = {
  countNewsOnPage: 1,
  totalCountNews: 1,
  currentPage: 1
}

describe('main page', () => {
  test('set current page', () => {

    const action = setCurrentPageAC(newCurrentPage)

    const endState = pagination_reducer(paginationInitialState, action)

    expect(paginationInitialState).not.toBe(endState)
    expect(endState.currentPage).toBe(newCurrentPage)
  })


})
