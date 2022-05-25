import React, { FC } from 'react'

import { SubmitHandler, useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'

import style from './CreateNewsPage.module.scss'

import { Button, NavLinkComponent } from 'components'
import { Path } from 'enums/enums'
import { NewsBodyForm } from 'pages/CreateNewsPage/NewsBodyForm/NewsBodyForm'
import { SelectOptions } from 'pages/CreateNewsPage/SelectOptions/SelectOptions'
import { selectSections } from 'store/selectors'
import { useAppDispatch } from 'store/store'
import { postNewsTC } from 'store/thunks'
import { FormType } from 'store/types'
import { todayDate } from 'utils/utils'

export const CreateNewsPage: FC = () => {
  const dispatch = useAppDispatch()

  const sections = useSelector(selectSections)

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
      <h2>Добавьте новость</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={style.header}>
          <div className={style.date}>
            <label>Date </label>
            <input {...register('date')} placeholder="date" value={todayDate()} />
            {errors.date && <span>This field is required</span>}
          </div>
          <div className={style.sections}>
            <label htmlFor="section">Section</label>
            <select id="section" defaultValue={1} {...register('section')}>
              <SelectOptions data={sections} />
            </select>
          </div>
        </div>
        <div className={style.name}>
          <label>Name</label>
          <input {...register('name')} placeholder="name" required defaultValue="title" />
          {errors.name && <span>This field is required</span>}
        </div>
        <NewsBodyForm
          useFormRegisterReturn={register('subtitle_1')}
          useFormRegisterReturn1={register('full_text_1')}
          useFormRegisterReturn2={register('image_1')}
          errors={errors}
        />
        <NewsBodyForm
          useFormRegisterReturn={register('subtitle_2')}
          useFormRegisterReturn1={register('full_text_2')}
          useFormRegisterReturn2={register('image_2')}
          errors={errors}
        />
        <NewsBodyForm
          useFormRegisterReturn={register('subtitle_3')}
          useFormRegisterReturn1={register('full_text_3')}
          useFormRegisterReturn2={register('image_3')}
          errors={errors}
        />
        <Button name="отправить" type="submit" />
      </form>
    </div>
  )
}
