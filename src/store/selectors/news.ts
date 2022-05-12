import { CommentType } from 'store/reducers/news_reducer'
import { RootState } from 'store/store'
import { NewsType } from 'store/types/types'

export const selectorNews = (state: RootState): NewsType[] => state.news.news
export const selectorCurrentNews = (state: RootState): NewsType => state.news.currentNews
export const selectorCommentsNews = (state: RootState): CommentType[] =>
  state.news.comments
