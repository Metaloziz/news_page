import { createAsyncThunk } from '@reduxjs/toolkit'

import { sectionsRequests } from 'api'
import { StatusCode } from 'enums'
import { setIsLoadingStatusAC } from 'store/reducers'
import { RootState } from 'store/store'
import { ResponseErrorType, SectionType } from 'store/types'
import { setThunkError } from 'utils'

export const getSectionsTC = createAsyncThunk(
  'sections/getSectionsTC',
  async (_, { dispatch }) => {
    try {
      dispatch(setIsLoadingStatusAC(true))
      const { data } = await sectionsRequests.getSections()
      return data.Data
    } catch (error) {
      setThunkError(dispatch, error as ResponseErrorType)
    } finally {
      dispatch(setIsLoadingStatusAC(false))
    }
  },
)

export const postSectionsTC = createAsyncThunk(
  'sections/createSectionsTC',
  async (name: string, { dispatch, getState }) => {
    try {
      dispatch(setIsLoadingStatusAC(true))

      const {
        login: { token },
      } = getState() as RootState

      const {
        data: { id },
      } = await sectionsRequests.postSection(name, token)

      if (id) {
        return { id, name }
      }
    } catch (error) {
      setThunkError(dispatch, error as ResponseErrorType)
    } finally {
      dispatch(setIsLoadingStatusAC(false))
    }
  },
)

export const deleteSectionTC = createAsyncThunk(
  'sections/removeSectionTC',
  async (sectionId: number, { dispatch, getState }) => {
    try {
      dispatch(setIsLoadingStatusAC(true))

      const {
        login: { token },
      } = getState() as RootState

      const { data } = await sectionsRequests.deleteSection(sectionId, token)

      if (data.id === sectionId) {
        return data.id
      }
    } catch (error) {
      setThunkError(dispatch, error as ResponseErrorType)
    } finally {
      dispatch(setIsLoadingStatusAC(false))
    }
  },
)

export const changeSectionTC = createAsyncThunk(
  'sections/changeSectionTC',
  async (section: SectionType, { dispatch, getState }) => {
    try {
      dispatch(setIsLoadingStatusAC(true))

      const {
        login: { token },
      } = getState() as RootState

      const { status } = await sectionsRequests.changeSection(section, token)

      if (status === StatusCode.SUCCESS) {
        return section
      }
    } catch (error) {
      setThunkError(dispatch, error as ResponseErrorType)
    } finally {
      dispatch(setIsLoadingStatusAC(false))
    }
  },
)
