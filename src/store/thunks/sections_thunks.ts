import { createAsyncThunk } from '@reduxjs/toolkit'

import { sectionsRequests } from 'api/sectionsRequests'
import { SectionType } from 'store/reducers/sections_reducer'

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
  async (name: string) => {
    try {
      const {
        data: { id },
      } = await sectionsRequests.postSection(name)
      if (id) {
        return { id, name }
      }

      // dispatch(getSectionsTC()) // косяк
      return null
    } catch (e) {
      console.warn(e)
      return null
    }
  },
)

export const deleteSectionTC = createAsyncThunk(
  'sections/removeSectionTC',
  async (sectionId: number) => {
    try {
      const response = await sectionsRequests.deleteSection(sectionId)

      if (response.data.id === sectionId) {
        return response.data.id
      }

      return null
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
