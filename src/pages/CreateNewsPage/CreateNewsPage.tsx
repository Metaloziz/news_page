import React, { FC } from 'react'

import { SubmitHandler, useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'

import style from './CreateNewsPage.module.scss'

import { Button, NavLinkComponent } from 'components'
import { IMAGE } from 'constants/constants'
import { Path } from 'enums/enums'
import { selectorSections } from 'store/selectors'
import { useAppDispatch } from 'store/store'
import { postNewsTC } from 'store/thunks'
import { FormType } from 'store/types/news_type'
import { TODAY_DATE } from 'utils/utils'

export const CreateNewsPage: FC = () => {
  const dispatch = useAppDispatch()

  const sections = useSelector(selectorSections)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>()

  const onSubmit: SubmitHandler<FormType> = data => {
    data.section = Number(data.section)

    const { file, ...body } = data

    dispatch(postNewsTC({ body, file }))
  }

  return (
    <div className={style.container}>
      <NavLinkComponent nameButton="на главную" path={Path.MAIN} />
      <span>Создать новость:</span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="section">section </label>
          <select id="section" defaultValue={1} {...register('section')}>
            {sections.map(({ name, id }) => (
              <option key={id} value={id}>
                {id} - {name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>date </label>
          <input {...register('date')} placeholder="date" value={TODAY_DATE()} />
          {errors.date && <span>This field is required</span>}
        </div>
        <div>
          <label>name </label>
          <input {...register('name')} placeholder="name" required defaultValue="test" />
          {errors.name && <span>This field is required</span>}
        </div>
        <div>
          <label>subtitle_1 </label>
          <input
            {...register('subtitle_1')}
            placeholder="subtitle_1"
            required
            defaultValue="test"
          />
          {errors.subtitle_1 && <span>This field is required</span>}
        </div>
        <div>
          <label>full_text_1 </label>
          <input
            {...register('full_text_1')}
            placeholder="full_text_1"
            required
            defaultValue="test"
          />
          {errors.full_text_1 && <span>This field is required</span>}
        </div>
        <div>
          <label>image_1 </label>
          <input {...register('image_1')} placeholder="image_1" defaultValue={IMAGE} />
          {errors.image_1 && <span>This field is required</span>}
        </div>
        <div>
          <label>file </label>
          <input {...register('file')} type="file" />
        </div>
        <Button name="отправить" type="submit" />
      </form>
    </div>
  )
}
