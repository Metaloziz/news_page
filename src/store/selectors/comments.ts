import { CommentType } from 'store/reducers/news_reducer'
import { RootState } from 'store/store'

export const selectorCommentsNews = (state: RootState): CommentType[] =>
  state.comments.comments
