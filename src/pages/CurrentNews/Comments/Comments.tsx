import { FC, memo, useCallback, useEffect } from 'react'

import { useSelector } from 'react-redux'

import { Comment } from './Comment/Comment'
import { CommentForm, CommentFormType } from './CommentForm/CommentForm'
import style from './Comments.module.scss'

import { FIRST_INDEX_NEWS } from 'constants/constants'
import { selectCommentsNews, selectIsAdminMode } from 'store/selectors'
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
  const dispatch = useAppDispatch()

  const comments = useSelector(selectCommentsNews)
  const isAdmin = useSelector(selectIsAdminMode)

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
      <h3>Комментарии:</h3>
      <div className={style.body}>
        {comments.map(comment => (
          <Comment
            key={comment.id}
            comment={comment}
            deleteComment={deleteComment}
            isAdmin={isAdmin}
          />
        ))}
      </div>
      <CommentForm postComment={postComment} />
    </div>
  )
})
