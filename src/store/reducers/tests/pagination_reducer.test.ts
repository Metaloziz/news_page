import { paginationReducer, setCurrentPageAC } from 'store/reducers/pagination_reducer'
import { PaginationInitialStateType } from 'store/types/pagination_initial_state_type'

const newCurrentPage: number = 10

const paginationInitialState: PaginationInitialStateType = {
  countNewsOnPage: 1,
  totalCountNews: 1,
  currentPage: 1,
}

describe('pagination reducer', () => {
  test('should set current page', () => {
    const action = setCurrentPageAC(newCurrentPage)

    const endState = paginationReducer(paginationInitialState, action)

    expect(paginationInitialState).not.toBe(endState)
    expect(endState.currentPage).toBe(newCurrentPage)
  })
})
