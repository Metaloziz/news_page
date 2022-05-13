import { createAsyncThunk } from '@reduxjs/toolkit'

import { sectionsRequests } from 'api/sectionsRequests'
import { StatusCode } from 'enums/enums'
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
  async (section: SectionType) => {
    try {
      const response = await sectionsRequests.changeSection(section)
      if (response.status === StatusCode.SUCCESS) {
        return section
      }
      return null
    } catch (e) {
      console.warn(e)
      return null
    }
  },
)
