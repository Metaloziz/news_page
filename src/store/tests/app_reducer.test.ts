import { NEWS_BY_SEARCHING, NEWS_BY_SECTIONS } from 'constants/constants'
import {
  appReducer,
  changeNewsTypeViewAC,
  InitialAppStateType,
  setErrorFalseAC,
  setErrorTrueAC,
} from 'store/reducers/app_reducer'

let appInitialState: InitialAppStateType
let errorMessage: string

beforeEach(() => {
  appInitialState = {
    isError: false,
    errorMessage: '',
    newsModeView: NEWS_BY_SECTIONS,
  }

  errorMessage = 'some error'
})

describe('app reducer', () => {
  test('should set error message', () => {
    const action = setErrorTrueAC(errorMessage)

    const endState = appReducer(appInitialState, action)

    expect(endState.isError).toBeTruthy()
    expect(endState.errorMessage).toBe(errorMessage)
  })

  test('should set default error message', () => {
    const action = setErrorTrueAC('')

    const endState = appReducer(appInitialState, action)

    expect(endState.isError).toBeTruthy()
  })

  test('should set error false', () => {
    const action = setErrorFalseAC()

    const endState = appReducer(appInitialState, action)

    expect(endState.isError).toBeFalsy()
    expect(endState.errorMessage).toBe(appInitialState.errorMessage)
  })

  test('should change view mod', () => {
    const action = changeNewsTypeViewAC(NEWS_BY_SEARCHING)

    const endState = appReducer(appInitialState, action)

    expect(endState.newsModeView).toBe(NEWS_BY_SEARCHING)
  })
})
