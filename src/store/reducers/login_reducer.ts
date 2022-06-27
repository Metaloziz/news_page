import { createSlice } from '@reduxjs/toolkit'

import { postLoginTC } from 'store/thunks/login_thunks'
import { UserDataType } from 'store/types/user_data_type'

type InitialLoginStateType = {
  isLogin: boolean
  userData: UserDataType
}

const initialState: InitialLoginStateType = {
  isLogin: true,
  userData: {
    email: '',
    password: '',
  },
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
        state.userData = action.payload
      }
    })
  },
})

export const { setIsLoginAC } = mainSlice.actions

export const loginReducer = mainSlice.reducer
