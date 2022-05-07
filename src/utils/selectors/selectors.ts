import {RootState} from "store/store";

export const currentPageSelector = (state: RootState) => state.main_reducer.currentPage
export const totalCountSelector = (state: RootState) => state.main_reducer.totalCountNews
export const countNewsOnPageSelector = (state: RootState) => state.main_reducer.countNewsOnPage