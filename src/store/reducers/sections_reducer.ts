import { createSlice } from '@reduxjs/toolkit'

import {
  deleteSectionTC,
  getSectionsTC,
  postSectionsTC,
} from 'store/thunks/sections_thunks'

export const initialState: SectionsInitialStateType = {
  sections: [{ id: 0, name: 'все' }],
  defaultSection: { id: 0, name: 'все' },
  activeSectionId: 0,
}

export const mainSlice = createSlice({
  name: 'sections',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getSectionsTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.sections.push(...action.payload)
      }
    })
    builder.addCase(deleteSectionTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.sections = state.sections.filter(({ id }) => id !== action.payload)
      }
    })
    builder.addCase(postSectionsTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.sections.push(action.payload)
      }
    })
  },
})

export const sectionsReducer = mainSlice.reducer

// types
export type SectionType = {
  id: number
  name: string
}

export type SectionsInitialStateType = {
  sections: SectionType[]
  defaultSection: SectionType
  activeSectionId: number
}
