import { FC } from 'react'

import { SubmitHandler, useForm } from 'react-hook-form'

import style from './NewSectionForm.module.scss'

import { Button } from 'components/commonComponents/Button/Button'
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SectionType>({ mode: 'onChange' })

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
        <input
          {...register('name', {
            maxLength: { value: 15, message: '15 символов максимум' },
            minLength: { value: 3, message: '3 символа минимум' },
            required: { value: true, message: 'обязательное поле' },
          })}
          placeholder="имя"
        />
        <p>{errors.name?.message}</p>
      </div>
      {select}
      <Button name="отправить" type="submit" />
    </form>
  )
}
