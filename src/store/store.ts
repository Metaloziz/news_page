import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import {
  appReducer,
  commentsReducer,
  currentNewsReducer,
  paginationReducer,
  searchNewsReducer,
  sectionNewsReducer,
  sectionsReducer,
  singlePaginationReducer,
} from 'store/reducers'
import { loginReducer } from 'store/reducers/login_reducer'

export const store = configureStore({
  reducer: {
    app: appReducer,
    sectionNews: sectionNewsReducer,
    searchNews: searchNewsReducer,
    currentNews: currentNewsReducer,
    sections: sectionsReducer,
    comments: commentsReducer,
    pagination: paginationReducer,
    singlePagination: singlePaginationReducer,
    login: loginReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>()
