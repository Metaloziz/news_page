import { CommentType } from 'store/reducers/section_news_reducer'
import { RootState } from 'store/store'

export const selectorCommentsNews = (state: RootState): CommentType[] =>
  state.comments.comments
