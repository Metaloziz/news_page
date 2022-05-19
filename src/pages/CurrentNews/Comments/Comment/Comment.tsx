import { FC } from 'react'

import style from './Comment.module.scss'

import { DeleteButton } from 'components/DeleteButton/DeleteButton'
import { FIRST_DATE_ELEMENT, LAST_DATE_ELEMENT } from 'constants/constants'
import { CommentType } from 'store/types'

type CommentPropsType = {
  comment: Omit<CommentType, 'news_id'>
  deleteComment: (commentId: number) => void
  isAdmin: boolean
}

export const Comment: FC<CommentPropsType> = ({
  comment: { author, date, text, id },
  deleteComment,
  isAdmin,
}) => (
  <div className={style.container}>
    <div className={style.avatar}>AVATAR</div>
    <div className={style.body}>
      <div className={style.header}>
        <div>{author}</div>
        <span>{date.slice(FIRST_DATE_ELEMENT, LAST_DATE_ELEMENT)}</span>
      </div>
      <p>{text}</p>
    </div>
    {isAdmin && <DeleteButton name="удалить" onClick={() => deleteComment(id)} />}
  </div>
)
