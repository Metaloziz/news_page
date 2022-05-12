import { FC, memo, useCallback, useEffect } from 'react'

import { useSelector } from 'react-redux'

import style from './Comments.module.scss'

import { FIRST_INDEX_NEWS } from 'constants/constants'
import { Comment } from 'pages/CurrentNews/Comments/Comment/Comment'
import {
  CommentForm,
  CommentFormType,
} from 'pages/CurrentNews/Comments/CommentForm/CommentForm'
import { selectorCommentsNews } from 'store/selectors/news'
import { useAppDispatch } from 'store/store'
import {
  deleteCommentTC,
  getCommentsNewsTC,
  postCommentTC,
} from 'store/thunks/comments_thunks'

type CommentsPropsType = {
  newsId: number
}

export const Comments: FC<CommentsPropsType> = memo(({ newsId }) => {
  const comments = useSelector(selectorCommentsNews)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (newsId === FIRST_INDEX_NEWS) return
    dispatch(getCommentsNewsTC(newsId))
  }, [])

  const deleteComment = useCallback(
    (commentId: number) => {
      dispatch(deleteCommentTC(commentId))
    },
    [dispatch],
  )

  const postComment = useCallback(
    (comment: CommentFormType) => {
      dispatch(postCommentTC({ ...comment, news_id: newsId }))
    },
    [dispatch, newsId],
  )

  return (
    <div className={style.container}>
      Comments:
      {comments.map(comment => (
        <Comment key={comment.id} comment={comment} deleteComment={deleteComment} />
      ))}
      <CommentForm postComment={postComment} />
    </div>
  )
})
