import { RootState } from 'store/store'
import { CommentType } from 'store/types'

export const selectorCommentsNews = (state: RootState): CommentType[] =>
  state.comments.comments
