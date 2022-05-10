import { FC, memo, useCallback } from 'react'

import { useSelector } from 'react-redux'

import style from './Comments.module.scss'

import { Comment } from 'pages/CurrentNews/Comments/Comment/Comment'
import {
  CommentForm,
  CommentFormType,
} from 'pages/CurrentNews/Comments/CommentForm/CommentForm'
import { useAppDispatch } from 'store/store'
import {
  addCommentTC,
  getCommentsNewsTC,
  removeCommentTC,
} from 'store/thunks/news_thunks'
import { useEffectOnce } from 'utils/hooks'
import { commentsNewsSelector } from 'utils/selectors'

type CommentsPropsType = {
  newsId: number
}

const FIRST_NEWS = 0

export const Comments: FC<CommentsPropsType> = memo(({ newsId }) => {
  const comments = useSelector(commentsNewsSelector)
  const dispatch = useAppDispatch()

  useEffectOnce(() => {
    if (newsId === FIRST_NEWS) return // чем заменить useEffect ?
    dispatch(getCommentsNewsTC(newsId))
  })

  const removeComment = useCallback(
    (commentId: number) => {
      dispatch(removeCommentTC(commentId))
    },
    [dispatch],
  )

  const addComment = useCallback(
    (comment: CommentFormType) => {
      dispatch(addCommentTC({ ...comment, news_id: newsId }))
    },
    [dispatch, newsId],
  )

  return (
    <div className={style.container}>
      Comments:
      {comments.map(comment => (
        <Comment key={comment.id} comment={comment} removeComment={removeComment} />
      ))}
      <CommentForm addComment={addComment} />
    </div>
  )
})
