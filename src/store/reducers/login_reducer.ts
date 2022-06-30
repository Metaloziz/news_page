import { createSlice } from '@reduxjs/toolkit'

import { TOKEN } from 'constants/constants'
import { postLoginTC, registrationUserTC } from 'store/thunks/login_thunks'
import { LoginInitialStateType } from 'store/types/login_initial_state_type'
import { separateToken } from 'utils/separate_token'

const initialState: LoginInitialStateType = {
  isLogin: false,
  token: '',
  isRegistrationSuccess: false,
  isChangePasswordSuccess: false,
}

const mainSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setIsLoginAC: (state, action) => {
      state.isLogin = action.payload
    },
  },
  extraReducers: ({ addCase }) => {
    addCase(postLoginTC.fulfilled, (state, action) => {
      if (action.payload) {
        const token = separateToken(action.payload)

        state.token = token
        localStorage.setItem(TOKEN, JSON.stringify(token))
      }
    })

    addCase(registrationUserTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.isRegistrationSuccess = action.payload
      }
    })
  },
})

export const { setIsLoginAC } = mainSlice.actions

export const loginReducer = mainSlice.reducer
