import { NewsType } from 'api/data'
import { CommentType } from 'store/news_reducer'
import { RootState } from 'store/store'

// pagination
export const currentPageSelector = (state: RootState): number =>
  state.pagination.currentPage
export const totalCountSelector = (state: RootState): number =>
  state.pagination.totalCountNews
export const countNewsOnPageSelector = (state: RootState): number =>
  state.pagination.countNewsOnPage

// news
export const newsSelector = (state: RootState): NewsType[] => state.news.news
export const newsLengthSelector = (state: RootState): number => state.news.news.length
export const currentNewsSelector = (state: RootState): NewsType => state.news.currentNews
export const commentsNewsSelector = (state: RootState): CommentType[] =>
  state.news.comments

// single pagination
export const numberPageSelector = (state: RootState): number =>
  state.singlePagination.currentPage
