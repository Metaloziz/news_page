import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { FIRST_ARRAY_ITEM, OTHER_SECTION_ID } from 'constants/constants'
import {
  changeSectionTC,
  deleteSectionTC,
  getSectionsTC,
  postSectionsTC,
} from 'store/thunks/sections_thunks'
import { SectionsInitialStateType } from 'store/types'
import { SectionType } from 'store/types/section_type'
import { findIndexElement } from 'utils/utils'

const initialState: SectionsInitialStateType = {
  sections: [{ id: 0, name: 'Все новости' }],
  defaultSection: { id: 0, name: 'все' },
  activeSectionId: 0,
}

const mainSlice = createSlice({
  name: 'sections',
  initialState,
  reducers: {
    setCurrentSectionAC: (state, action: PayloadAction<number>) => {
      state.activeSectionId = action.payload
    },
  },
  extraReducers: builder => {
    builder.addCase(getSectionsTC.fulfilled, (state, action) => {
      if (action.payload) {
        const otherSectionIndex = findIndexElement(action.payload, OTHER_SECTION_ID)
        const count = 1
        const otherSection = action.payload.splice(otherSectionIndex, count)[
          FIRST_ARRAY_ITEM
        ]
        action.payload.push(otherSection)
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
    builder.addCase(
      changeSectionTC.fulfilled,
      (state, action: PayloadAction<SectionType | undefined>) => {
        if (action.payload) {
          const indexSection = findIndexElement(state.sections, action.payload.id)
          state.sections[indexSection].name = action.payload.name
        }
      },
    )
  },
})

export const { setCurrentSectionAC } = mainSlice.actions
export const sectionsReducer = mainSlice.reducer
