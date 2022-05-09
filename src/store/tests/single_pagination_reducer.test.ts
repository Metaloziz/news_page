import {
  setNextPageAC, setPreviousPageAC,
  single_pagination_reducer, SinglePaginationReducerType,
} from "store/single_pagination_reducer";

const paginationInitialState: SinglePaginationReducerType = {
  currentPage: 1
}

describe('single_pagination_reducer', () => {
  test('set current page', () => {

    const action = setNextPageAC()

    const endState = single_pagination_reducer(paginationInitialState, action)

    expect(paginationInitialState).not.toBe(endState)
    expect(endState.currentPage).toBe(paginationInitialState.currentPage + 1)
  })

  test('set previous page', () => {

    const action = setPreviousPageAC()

    const endState = single_pagination_reducer(paginationInitialState, action)

    expect(paginationInitialState).not.toBe(endState)
    expect(endState.currentPage).toBe(paginationInitialState.currentPage - 1)
  })

})
