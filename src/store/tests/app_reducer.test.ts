import {
  appReducer,
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

  test('should set error false', () => {
    const action = setErrorFalseAC()

    const endState = appReducer(appInitialState, action)

    expect(endState.isError).toBeFalsy()
    expect(endState.errorMessage).toBe(appInitialState.errorMessage)
  })
})
