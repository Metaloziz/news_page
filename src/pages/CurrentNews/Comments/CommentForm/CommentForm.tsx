import { FC, memo, useState } from 'react'

import { SubmitHandler, useForm } from 'react-hook-form'

import style from './CommentForm.module.scss'

import { Button } from 'components'
import { COMMENT_AUTHOR_LENGTH, COMMENT_LENGTH } from 'constants/constants'
import { CommentType } from 'store/types'

export type CommentFormType = Pick<CommentType, 'author' | 'text'>

type CommentFormPropsType = {
  postComment: (comment: CommentFormType) => void
}

export const CommentForm: FC<CommentFormPropsType> = memo(({ postComment }) => {
  const [isDisable, setIsDisable] = useState<boolean>(false)
  const [buttonName, setButtonName] = useState<string>('отправить')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CommentFormType>({ mode: 'onChange' })

  const onSubmit: SubmitHandler<CommentFormType> = data => {
    setButtonName('спасибо за отзыв, после модерации комментарий будет опубликован')
    setIsDisable(true)
    postComment(data)
  }

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            {...register('author', {
              required: { value: true, message: 'обяазаетельно поле' },
              maxLength: {
                value: COMMENT_AUTHOR_LENGTH,
                message: `максимальная длинна:  ${COMMENT_AUTHOR_LENGTH} символов`,
              },
            })}
            placeholder="ваше имя"
          />
          <p>{errors.author?.message}</p>
        </div>
        <div>
          <textarea
            {...register('text', {
              required: { value: true, message: 'обяазаетельно поле' },
              maxLength: {
                value: COMMENT_LENGTH,
                message: `максимальная длинна:  ${COMMENT_LENGTH} символов`,
              },
            })}
            placeholder="что думаете ?"
          />
          <p>{errors.text?.message}</p>
        </div>
        <Button disabled={isDisable} name={buttonName} type="submit" />
      </form>
    </div>
  )
})
