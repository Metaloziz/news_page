import { loginReducer, setIsLoginAC } from 'store/reducers/login_reducer'
import { postLoginTC, registrationUserTC } from 'store/thunks/login_thunks'
import { LoginInitialStateType } from 'store/types/login_initial_state_type'
import { UserDataRegistrationType } from 'store/types/new_user_data_registration_type'
import { UserDataType } from 'store/types/user_data_type'

let loginInitialState: LoginInitialStateType
let newIsLogin: boolean
let newUserData: UserDataType
let newToken: string
let newRegistrationStatus: boolean
let newRegistrationUserType: UserDataRegistrationType

beforeEach(() => {
  loginInitialState = {
    isLogin: false,
    token: '',
    isRegistrationSuccess: false,
    isChangePasswordSuccess: false,
  }

  newToken = '124jh3d98423n054230'

  newIsLogin = true
  newRegistrationStatus = true

  newUserData = {
    email: 'qwer@qwe.by',
    password: '123',
  }

  newRegistrationUserType = {
    email: 'qwe@qwe.by',
    newPassword: '123',
    repeatNewPassword: '123',
  }
})

describe('login reducer', () => {
  test('should set isLogin status', () => {
    const action = setIsLoginAC(newIsLogin)

    const endState = loginReducer(loginInitialState, action)

    expect(endState.isLogin).toBe(newIsLogin)
  })

  test('should set token', () => {
    const action = postLoginTC.fulfilled(newToken, '', newUserData)

    const endState = loginReducer(loginInitialState, action)

    expect(endState.token).toBe(newToken)
  })

  test('should set registration status', () => {
    const action = registrationUserTC.fulfilled(
      newRegistrationStatus,
      '',
      newRegistrationUserType,
    )

    const endState = loginReducer(loginInitialState, action)

    expect(endState.isRegistrationSuccess).toBe(newRegistrationStatus)
  })
})
