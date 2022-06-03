import { FC } from 'react'

import style from './Comment.module.scss'

import { DeleteButton } from 'components'
import { FIRST_DATE_ELEMENT, LAST_DATE_ELEMENT } from 'constants/constants'
import { CommentType } from 'store/types'
import { convertDateView } from 'utils/convert_date_view'

type CommentPropsType = {
  comment: Omit<CommentType, 'news_id'>
  deleteComment: (commentId: number) => void
  isAdmin: boolean
}

export const Comment: FC<CommentPropsType> = ({
  comment: { author, date, text, id },
  deleteComment,
  isAdmin,
}) => {
  const correctDate = convertDateView(date.slice(FIRST_DATE_ELEMENT, LAST_DATE_ELEMENT))

  return (
    <div className={style.container}>
      <img
        alt="avatar"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9lUdyFZOzGJGzdvnIXJ8y-Mmj9bSZ1AxqLQ&usqp=CAU"
      />
      <div className={style.body}>
        <div>
          <h4>{author}</h4>
          <span>{correctDate}</span>
        </div>
        <p>{text}</p>
      </div>
      {isAdmin && <DeleteButton name="удалить" onClick={() => deleteComment(id)} />}
    </div>
  )
}
