import React, { FC } from 'react'

import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from 'components/Button/Button'
import { SectionType } from 'store/sections_reducer'

type SectionFormPropsType = {
  createSection: (name: string) => void
}

export const SectionForm: FC<SectionFormPropsType> = ({ createSection }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SectionType>()

  const onSubmit: SubmitHandler<Pick<SectionType, 'name'>> = data => {
    createSection(data.name)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>name section </label>
      <input {...register('name')} placeholder="name" required defaultValue="test" />
      {errors.name && <span>This field is required</span>}
      <Button name="отправить" type="submit" />
    </form>
  )
}
