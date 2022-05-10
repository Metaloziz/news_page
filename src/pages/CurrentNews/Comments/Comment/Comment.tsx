import { FC } from 'react'

import { Button } from 'components/Button/Button'
import style from 'pages/CurrentNews/Comments/Comments.module.scss'
import { CommentType } from 'store/news_reducer'

type CommentPropsType = {
  comment: Omit<CommentType, 'news_id'>
  removeComment: (commentId: number) => void
}

export const Comment: FC<CommentPropsType> = ({ comment, removeComment }) => (
  <div className={style.comment}>
    <div>
      <div>
        <h3>author: </h3>
        {comment.author}
      </div>
      <div>
        <h4>text: </h4>
        {comment.text}
      </div>
      <div>
        <h5>date: </h5>
        {comment.date}
      </div>
    </div>
    <Button name="удалить" onClick={() => removeComment(comment.id)} />
  </div>
)
