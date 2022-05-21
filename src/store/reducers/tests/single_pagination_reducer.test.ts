import {
  setNextPageAC,
  setPagesCountAC,
  setPreviousPageAC,
  singlePaginationReducer,
} from 'store/reducers/index'
import { SinglePaginationInitialStateType } from 'store/types'

const DIFFERENCE_COUNTER_PAGES: number = 1
const newPagesCount: number = 10

const paginationInitialState: SinglePaginationInitialStateType = {
  currentPage: 1,
  pagesCount: 1,
}

describe('single_pagination_reducer', () => {
  test('should set next page', () => {
    const action = setNextPageAC()

    const endState = singlePaginationReducer(paginationInitialState, action)

    expect(paginationInitialState).not.toBe(endState)
    expect(endState.currentPage).toBe(
      paginationInitialState.currentPage + DIFFERENCE_COUNTER_PAGES,
    )
  })

  test('should set previous page', () => {
    const action = setPreviousPageAC()

    const endState = singlePaginationReducer(paginationInitialState, action)

    expect(endState.currentPage).toBe(
      paginationInitialState.currentPage - DIFFERENCE_COUNTER_PAGES,
    )
  })

  test('should set pages count', () => {
    const action = setPagesCountAC(newPagesCount)

    const endState = singlePaginationReducer(paginationInitialState, action)

    expect(endState.pagesCount).toBe(newPagesCount)
  })
})
