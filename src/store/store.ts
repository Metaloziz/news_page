import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import { newsReducer } from 'store/reducers/news_reducer'
import { paginationReducer } from 'store/reducers/pagination_reducer'
import { sectionsReducer } from 'store/reducers/sections_reducer'
import { singlePaginationReducer } from 'store/reducers/single_pagination_reducer'

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
