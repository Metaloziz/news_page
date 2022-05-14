import { createAsyncThunk } from '@reduxjs/toolkit'

import { sectionsRequests } from 'api/sectionsRequests'
import { StatusCode } from 'enums/enums'
import { SectionType } from 'store/reducers/sections_reducer'
import { ResponseErrorType } from 'store/thunks/comments_thunks'
import { setError } from 'utils/utils'

export const getSectionsTC = createAsyncThunk(
  'sections/getSectionsTC',
  async (_, { dispatch }) => {
    try {
      const response = await sectionsRequests.getSections()
      return response.data.Data
    } catch (error) {
      setError(dispatch, error as ResponseErrorType)
      return null
    }
  },
)

export const postSectionsTC = createAsyncThunk(
  'sections/createSectionsTC',
  async (name: string, { dispatch }) => {
    try {
      const {
        data: { id },
      } = await sectionsRequests.postSection(name)
      if (id) {
        return { id, name }
      }

      return null
    } catch (error) {
      setError(dispatch, error as ResponseErrorType)

      return null
    }
  },
)

export const deleteSectionTC = createAsyncThunk(
  'sections/removeSectionTC',
  async (sectionId: number, { dispatch }) => {
    try {
      const response = await sectionsRequests.deleteSection(sectionId)

      if (response.data.id === sectionId) {
        return response.data.id
      }

      return null
    } catch (error) {
      setError(dispatch, error as ResponseErrorType)

      return null
    }
  },
)

export const changeSectionTC = createAsyncThunk(
  'sections/changeSectionTC',
  async (section: SectionType, { dispatch }) => {
    try {
      const response = await sectionsRequests.changeSection(section)
      if (response.status === StatusCode.SUCCESS) {
        return section
      }
      return null
    } catch (error) {
      setError(dispatch, error as ResponseErrorType)

      return null
    }
  },
)
