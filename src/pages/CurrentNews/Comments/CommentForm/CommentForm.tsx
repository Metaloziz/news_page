import React, { FC, memo } from 'react'

import { SubmitHandler, useForm } from 'react-hook-form'

import style from './CommentForm.module.scss'

import { Button } from 'components/Button/Button'
import { CommentType } from 'store/types'

export type CommentFormType = Pick<CommentType, 'author' | 'text'>

type CommentFormPropsType = {
  postComment: (comment: CommentFormType) => void
}

export const CommentForm: FC<CommentFormPropsType> = memo(({ postComment }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CommentFormType>()

  const onSubmit: SubmitHandler<CommentFormType> = data => {
    postComment(data)
  }

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>автор: </label>
          <input
            defaultValue="boss"
            {...register('author', { required: true, maxLength: 100 })}
            placeholder="автор"
          />
          {errors.text && <span>This field is required</span>}
        </div>
        <div>
          <label>комментарий: </label>
          <textarea
            {...register('text', { required: true, maxLength: 300 })}
            defaultValue="какой хороший сайт"
            placeholder="комментарий"
          />
          {errors.text && <span>This field is required</span>}
        </div>
        <Button name="отправить" type="submit" />
      </form>
    </div>
  )
})
