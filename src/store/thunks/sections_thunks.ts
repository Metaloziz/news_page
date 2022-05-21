import { createAsyncThunk } from '@reduxjs/toolkit'

import { sectionsRequests } from 'api/sectionsRequests'
import { StatusCode } from 'enums/enums'
import { ResponseErrorType } from 'store/types/response_error_type'
import { SectionType } from 'store/types/section_type'
import { setError } from 'utils/utils'

export const getSectionsTC = createAsyncThunk(
  'sections/getSectionsTC',
  async (_, { dispatch }) => {
    try {
      const { data } = await sectionsRequests.getSections()
      return data.Data
    } catch (error) {
      setError(dispatch, error as ResponseErrorType)
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
    } catch (error) {
      setError(dispatch, error as ResponseErrorType)
    }
  },
)

export const deleteSectionTC = createAsyncThunk(
  'sections/removeSectionTC',
  async (sectionId: number, { dispatch }) => {
    try {
      const { data } = await sectionsRequests.deleteSection(sectionId)

      if (data.id === sectionId) {
        return data.id
      }
    } catch (error) {
      setError(dispatch, error as ResponseErrorType)
    }
  },
)

export const changeSectionTC = createAsyncThunk(
  'sections/changeSectionTC',
  async (section: SectionType, { dispatch }) => {
    try {
      const { status } = await sectionsRequests.changeSection(section)
      if (status === StatusCode.SUCCESS) {
        return section
      }
    } catch (error) {
      setError(dispatch, error as ResponseErrorType)
    }
  },
)
