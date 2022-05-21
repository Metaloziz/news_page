import { RootState } from 'store/store'
import { CommentType } from 'store/types'

export const selectCommentsNews = (state: RootState): CommentType[] =>
  state.comments.comments
