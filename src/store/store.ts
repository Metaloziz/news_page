import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import {
  appReducer,
  commentsReducer,
  paginationReducer,
  searchNewsReducer,
  sectionNewsReducer,
  sectionsReducer,
  singlePaginationReducer,
} from 'store/reducers'

export const store = configureStore({
  reducer: {
    news: sectionNewsReducer,
    pagination: paginationReducer,
    singlePagination: singlePaginationReducer,
    sections: sectionsReducer,
    app: appReducer,
    comments: commentsReducer,
    searchNews: searchNewsReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>()
