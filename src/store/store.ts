import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import { newsReducer } from 'store/news_reducer'
import { paginationReducer } from 'store/pagination_reducer'
import { sectionsReducer } from 'store/sections_reducer'
import { singlePaginationReducer } from 'store/single_pagination_reducer'

export const store = configureStore({
  reducer: {
    news: newsReducer,
    pagination: paginationReducer,
    singlePagination: singlePaginationReducer,
    sections: sectionsReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>()
