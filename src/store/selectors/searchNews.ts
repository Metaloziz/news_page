import { RootState } from 'store/store'
import { NewsType } from 'store/types/news_type'

export const selectorPartSearchNews = (state: RootState): NewsType[] =>
  state.searchNews.partNews

export const selectorCountPageSearchNews = (state: RootState): number =>
  state.searchNews.pageCount

export const selectorCurrentPageSearchNews = (state: RootState): number =>
  state.searchNews.currentPage
