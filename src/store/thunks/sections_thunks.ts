import { createAsyncThunk } from '@reduxjs/toolkit'

import { sectionsRequests } from 'api/api'

export const getSectionsTC = createAsyncThunk('sections/getSectionsTC', async () => {
  try {
    const response = await sectionsRequests.getSections()
    return response.data.Data
  } catch (e) {
    console.warn(e)
    return null
  }
})
