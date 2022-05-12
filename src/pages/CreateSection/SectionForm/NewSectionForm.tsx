import React, { FC } from 'react'

import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from 'components/Button/Button'
import { SectionType } from 'store/reducers/sections_reducer'

type SectionFormPropsType = {
  setSectionData: (data: SectionType) => void
  mode: 'add' | 'edit'
  sectionsId?: number[]
}

export const NewSectionForm: FC<SectionFormPropsType> = ({
  setSectionData,
  mode,
  sectionsId,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SectionType>()

  const onSubmit: SubmitHandler<SectionType> = data => {
    setSectionData(data)
  }

  const select =
    mode === 'edit' ? (
      <div>
        <label htmlFor="section">section </label>
        <select id="section" defaultValue={1} {...register('id')}>
          {sectionsId?.map(id => (
            <option key={id}>{id}</option>
          ))}
        </select>
      </div>
    ) : null

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {select}
      <div>
        <label>name section </label>
        <input {...register('name')} placeholder="name" required defaultValue="test" />
        {errors.name && <span>This field is required</span>}
      </div>
      <Button name="отправить" type="submit" />
    </form>
  )
}
