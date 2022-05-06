import {configureStore} from "@reduxjs/toolkit";
import {main_reducer} from "store/mainPage_reducer";

export const store = configureStore({
  reducer: {
    main_reducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch