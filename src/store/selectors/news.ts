import { RootState } from 'store/store'
import { NewsType } from 'store/types/news_type'

export const selectorNews = (state: RootState): NewsType[] => state.sectionNews.news
