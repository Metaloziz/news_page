import { RootState } from 'store/store'
import { NewsType } from 'store/types/news_type'

export const selectPartSearchNews = (state: RootState): NewsType[] =>
  state.searchNews.partNews

export const selectCountPageSearchNews = (state: RootState): number =>
  state.searchNews.pageCount

export const selectCurrentPageSearchNews = (state: RootState): number =>
  state.searchNews.currentPage
