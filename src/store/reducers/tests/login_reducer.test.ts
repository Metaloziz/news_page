import { loginReducer, setIsLoginAC } from 'store/reducers/login_reducer'
import { postLoginTC } from 'store/thunks/login_thunks'
import { LoginInitialStateType } from 'store/types/login_initial_state_type'
import { UserDataType } from 'store/types/user_data_type'

let loginInitialState: LoginInitialStateType
let newIsLogin: boolean
let newUserData: UserDataType
let newToken: string

beforeEach(() => {
  loginInitialState = {
    isLogin: false,
    token: '',
  }

  newToken = '124jh3d98423n054230'

  newIsLogin = true

  newUserData = {
    email: 'qwer@qwe.by',
    password: '123',
  }
})

describe('login reducer', () => {
  test('should set error message', () => {
    const action = setIsLoginAC(newIsLogin)

    const endState = loginReducer(loginInitialState, action)

    expect(endState.isLogin).toBe(newIsLogin)
  })

  test('should set token', () => {
    const action = postLoginTC.fulfilled(newToken, '', newUserData)

    const endState = loginReducer(loginInitialState, action)

    expect(endState.token).toBe(newToken)
  })
})
