import {RootState} from "store/store";

// pagination
export const currentPageSelector = (state: RootState) => state.pagination_reducer.currentPage
export const totalCountSelector = (state: RootState) => state.pagination_reducer.totalCountNews
export const countNewsOnPageSelector = (state: RootState) => state.pagination_reducer.countNewsOnPage

// news
export const newsSelector = (state: RootState) => state.news_reducer.news
export const newsLengthSelector = (state: RootState) => state.news_reducer.news.length
export const currentNewsSelector = (state: RootState) => state.news_reducer.currentNews
export const commentsNewsSelector = (state: RootState) => state.news_reducer.comments

// single pagination
export const numberPageSelector = (state: RootState) => state.single_pagination_reducer.currentPage