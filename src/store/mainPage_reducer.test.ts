import {
  InitialStateType,
  main_reducer,
  setCurrentPageAC
} from "store/mainPage_reducer";

const newCurrentPage: number = 10


const initialState: InitialStateType = {
  countNewsOnPage: 1,
  currentPage: 3,
  totalCountNews: 100
}


test('set current page', () => {

  const action = setCurrentPageAC(newCurrentPage)

  const endState = main_reducer(initialState, action)

  expect(initialState).not.toBe(endState)
  expect(endState.currentPage).toBe(newCurrentPage)
})