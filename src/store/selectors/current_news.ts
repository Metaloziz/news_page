import { RootState } from 'store/store'
import { NewsType } from 'store/types/news_type'

export const selectCurrentNews = (state: RootState): NewsType => {
  if (!state.currentNews.currentNews.name) {
    const currentNews = localStorage.getItem('currentNews')
    if (currentNews) {
      return JSON.parse(currentNews)
    }
  }
  return state.currentNews.currentNews
}
