import { RootState } from 'store/store'
import { NewsType } from 'store/types/news_type'

export const selectCurrentNews = (state: RootState): NewsType =>
  state.currentNews.currentNews
