import { RootState } from 'store/store'
import { NewsType } from 'store/types/news_type'

export const selectorCurrentNews = (state: RootState): NewsType =>
  state.currentNews.currentNews
