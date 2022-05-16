import { RootState } from 'store/store'
import { NewsType } from 'store/types/types'

export const selectorNews = (state: RootState): NewsType[] => state.news.news
export const selectorCurrentNews = (state: RootState): NewsType => state.news.currentNews
