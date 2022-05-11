import React, { FC } from 'react'

import { SubmitHandler, useForm } from 'react-hook-form'

import style from './CreateNews.module.scss'

import { NewsPayloadType } from 'api/api'
import { FormType } from 'api/data'
import { Button } from 'components/Button/Button'
import { NavLinkComponent } from 'components/NavlinkComponent/NavLinkComponent'
import { useAppDispatch } from 'store/store'
import { createNewsTC } from 'store/thunks/news_thunks'
import { Paths } from 'utils/enums'

const NEXT_MONTH = 1

export const CreateNews: FC = () => {
  const dispatch = useAppDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>()
  const onSubmit: SubmitHandler<FormType> = data => {
    data.section = Number(data.section)
    const { file, ...body } = data

    const news: NewsPayloadType = {
      body,
      file,
    }

    dispatch(createNewsTC(news))
  }

  const date = `${new Date().getFullYear()}-${
    new Date().getMonth() + NEXT_MONTH
  }-${new Date().getDate()}`
  return (
    <div className={style.container}>
      <NavLinkComponent nameButton="на главную" path={Paths.MAIN} />
      Создать новость:
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="section">section </label>
          <select id="section" defaultValue={1} {...register('section')}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        <div>
          <label>date </label>
          <input {...register('date')} placeholder="date" value={date} />
          {errors.date && <span>This field is required</span>}
        </div>
        <div>
          <label>name </label>
          <input {...register('name')} placeholder="name" required value="test" />
          {errors.name && <span>This field is required</span>}
        </div>
        <div>
          <label>subtitle_1 </label>
          <input
            {...register('subtitle_1')}
            placeholder="subtitle_1"
            required
            value="test"
          />
          {errors.subtitle_1 && <span>This field is required</span>}
        </div>
        <div>
          <label>full_text_1 </label>
          <input
            {...register('full_text_1')}
            placeholder="full_text_1"
            required
            value="test"
          />
          {errors.full_text_1 && <span>This field is required</span>}
        </div>
        <div>
          <label>image_1 </label>
          <input {...register('image_1')} placeholder="image_1" value="test" />
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
