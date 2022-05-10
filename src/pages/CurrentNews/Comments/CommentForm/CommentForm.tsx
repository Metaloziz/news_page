import React, { FC, memo } from 'react'

import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from 'components/Button/Button'
import { CommentType } from 'store/news_reducer'

export type CommentFormType = Pick<CommentType, 'author' | 'text'>

type CommentFormPropsType = {
  addComment: (comment: CommentFormType) => void
}

export const CommentForm: FC<CommentFormPropsType> = memo(({ addComment }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CommentFormType>()
  const onSubmit: SubmitHandler<CommentFormType> = data => {
    addComment(data)
  }

  return (
    <div>
      Ваш комментарий:
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input defaultValue="boss" {...register('author')} placeholder="автор" />
        </div>
        {errors.text && <span>This field is required</span>}
        <div>
          <input
            {...register('text', { required: true })}
            defaultValue="какой хороший сайт"
            placeholder="комментарий"
            maxLength={300}
          />
        </div>
        {errors.text && <span>This field is required</span>}
        <Button name="отправить" type="submit" />
      </form>
    </div>
  )
})
