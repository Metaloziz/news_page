import { createAsyncThunk } from '@reduxjs/toolkit'

import { sectionsRequests } from 'api/sectionsRequests'
import { SectionType } from 'store/sections_reducer'

export const getSectionsTC = createAsyncThunk('sections/getSectionsTC', async () => {
  try {
    const response = await sectionsRequests.getSections()
    return response.data.Data
  } catch (e) {
    console.warn(e)
    return null
  }
})

export const postSectionsTC = createAsyncThunk(
  'sections/createSectionsTC',
  async (name: string, { dispatch }) => {
    try {
      const response = await sectionsRequests.postSection(name)
      dispatch(getSectionsTC())
      return response.data.id
    } catch (e) {
      console.warn(e)
      return null
    }
  },
)

export const deleteSectionTC = createAsyncThunk(
  'sections/removeSectionTC',
  async (id: number, { dispatch }) => {
    try {
      const response = await sectionsRequests.deleteSection(id)
      dispatch(getSectionsTC())
      return response.data.id
    } catch (e) {
      console.warn(e)
      return null
    }
  },
)

export const changeSectionTC = createAsyncThunk(
  'sections/changeSectionTC',
  async (section: SectionType, { dispatch }) => {
    try {
      const response = await sectionsRequests.changeSection(section)
      dispatch(getSectionsTC())
      return response.data.id
    } catch (e) {
      console.warn(e)
      return null
    }
  },
)
