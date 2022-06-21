import { createSlice } from '@reduxjs/toolkit'

import { NEWS_BY_SECTIONS } from 'constants/constants'
import { getContactsTC, getCoursesTC } from 'store/thunks'
import { InitialAppStateType } from 'store/types'
import { separateAddress } from 'utils'

const initialState: InitialAppStateType = {
  isError: false,
  errorMessage: '',
  newsModeView: NEWS_BY_SECTIONS,
  isAdmin: false,
  courses: [
    { description_course: '', name_course: '' },
    { description_course: '', name_course: '' },
  ],
  contacts: {
    address: 'null',
    number_phone: 'null',
    socialFacebook: 'null',
    socialInstagram: 'null',
    socialSkype: 'null',
    socialTG: 'null',
    socialTikTok: 'null',
    socialViber: 'null',
    socialVK: 'null',
  },
  isLoading: false,
}

const mainSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setErrorTrueAC: (state, action) => {
      state.errorMessage = action.payload
      state.isError = true
    },
    setErrorFalseAC: state => {
      state.errorMessage = ''
      state.isError = false
    },
    changeNewsTypeViewAC: (state, action) => {
      if (state.newsModeView === action.payload) return
      state.newsModeView = action.payload
    },
    changeIsAdminModeAC: (state, action) => {
      state.isAdmin = action.payload
    },
    setIsLoadingStatusAC: (state, action) => {
      if (state.isLoading === action.payload) return
      state.isLoading = action.payload
    },
  },
  extraReducers: builder => {
    builder.addCase(getCoursesTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.courses = action.payload
      }
    })
    builder.addCase(getContactsTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.contacts = action.payload
        state.contacts.address = separateAddress(action.payload.address)
      }
    })
  },
})

export const {
  setErrorTrueAC,
  setErrorFalseAC,
  changeNewsTypeViewAC,
  changeIsAdminModeAC,
  setIsLoadingStatusAC,
} = mainSlice.actions

export const appReducer = mainSlice.reducer
