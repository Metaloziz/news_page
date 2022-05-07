import {RootState} from "store/store";

export const currentPageSelector = (state: RootState) => state.pagination_reducer.currentPage
export const totalCountSelector = (state: RootState) => state.pagination_reducer.totalCountNews
export const countNewsOnPageSelector = (state: RootState) => state.pagination_reducer.countNewsOnPage


export const newsSelector = (state: RootState) => state.news_reducer.news
export const currentNewsSelector = (state: RootState) => state.news_reducer.currentNews