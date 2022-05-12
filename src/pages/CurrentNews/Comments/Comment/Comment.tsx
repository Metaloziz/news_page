import { FC } from 'react'

import { Button } from 'components/Button/Button'
import { FIRST_DATE_ELEMENT, LAST_DATE_ELEMENT } from 'constants/constants'
import style from 'pages/CurrentNews/Comments/Comments.module.scss'
import { CommentType } from 'store/reducers/news_reducer'

type CommentPropsType = {
  comment: Omit<CommentType, 'news_id'>
  deleteComment: (commentId: number) => void
}

export const Comment: FC<CommentPropsType> = ({
  comment: { author, date, text, id },
  deleteComment,
}) => (
  <div className={style.comment}>
    <div>
      <div>
        <h3>author: </h3>
        {author}
      </div>
      <div>
        <h4>text: </h4>
        {text}
      </div>
      <div>
        <h5>date: </h5>
        {date.slice(FIRST_DATE_ELEMENT, LAST_DATE_ELEMENT)}
      </div>
    </div>
    <Button name="удалить" onClick={() => deleteComment(id)} />
  </div>
)
