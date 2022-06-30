import { RootState } from 'store/store'

export const selectIsLogin = (state: RootState): boolean => state.login.isLogin
export const selectIsRegistered = (state: RootState): boolean =>
  state.login.isRegistrationSuccess
