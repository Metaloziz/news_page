import {configureStore} from "@reduxjs/toolkit";
import {pagination_reducer} from "store/pagination_reducer";
import {news_reducer} from "store/news_reducer";
import thunkMiddleware from 'redux-thunk'
import {useDispatch} from "react-redux";

export const store = configureStore({
  reducer: {
    pagination_reducer,
    news_reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>();