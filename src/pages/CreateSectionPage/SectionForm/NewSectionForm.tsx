import { FC } from 'react'

import { SubmitHandler, useForm } from 'react-hook-form'

import style from './NewSectionForm.module.scss'

import { Button } from 'components/Button/Button'
import { SectionType } from 'store/types/section_type'

type SectionFormPropsType = {
  setSectionData: (data: SectionType) => void
  mode: 'add' | 'edit'
  sections?: SectionType[]
}

export const NewSectionForm: FC<SectionFormPropsType> = ({
  setSectionData,
  mode,
  sections,
}) => {
  const { register, handleSubmit } = useForm<SectionType>()

  const onSubmit: SubmitHandler<SectionType> = data => {
    setSectionData({ ...data, id: Number(data.id) })
  }

  const select =
    mode === 'edit' ? (
      <div>
        <label htmlFor="section">Cекция</label>
        <select id="section" defaultValue={1} {...register('id')}>
          {sections?.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </select>
      </div>
    ) : null

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.container}>
      <div>
        <label>Имя секции</label>
        <input {...register('name')} placeholder="имя" required />
      </div>
      {select}
      <Button name="отправить" type="submit" />
    </form>
  )
}
