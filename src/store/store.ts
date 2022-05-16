import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import { appReducer } from 'store/reducers/app_reducer'
import { commentsReducer } from 'store/reducers/comments_reducer'
import { paginationReducer } from 'store/reducers/pagination_reducer'
import { searchNewsReducer } from 'store/reducers/search_news_reducer'
import { sectionNewsReducer } from 'store/reducers/section_news_reducer'
import { sectionsReducer } from 'store/reducers/sections_reducer'
import { singlePaginationReducer } from 'store/reducers/single_pagination_reducer'

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
