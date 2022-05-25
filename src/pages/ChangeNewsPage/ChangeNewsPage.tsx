import { FC } from 'react'

import { SubmitHandler, useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'

import { Button, NavLinkComponent } from 'components'
import { Path } from 'enums/enums'
import style from 'pages/CreateNewsPage/CreateNewsPage.module.scss'
import { NewsBodyForm } from 'pages/CreateNewsPage/NewsBodyForm/NewsBodyForm'
import { Options } from 'pages/CreateNewsPage/Options/Options'
import { selectCurrentNews, selectSections } from 'store/selectors'
import { useAppDispatch } from 'store/store'
import { updateNewsTC } from 'store/thunks/current_news_thunks'
import { FormType } from 'store/types'
import { todayDate } from 'utils/utils'

export const ChangeNewsPage: FC = () => {
  const dispatch = useAppDispatch()

  const sections = useSelector(selectSections)
  const news = useSelector(selectCurrentNews)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>()

  const onSubmit: SubmitHandler<FormType> = data => {
    data.section = Number(data.section)

    const { file, ...body } = data

    dispatch(updateNewsTC({ body, file }))
  }

  return (
    <div className={style.container}>
      <NavLinkComponent nameButton="обратно к новости" path={Path.CURRENT_NEWS} />
      <span>Создать новость:</span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={style.header}>
          <div>
            <label>date </label>
            <input {...register('date')} placeholder="date" value={todayDate()} />
            {errors.date && <span>This field is required</span>}
          </div>
          <div>
            <label htmlFor="section">section </label>
            <select id="section" defaultValue={news.section} {...register('section')}>
              <Options data={sections} />
            </select>
          </div>
        </div>
        <div className={style.name}>
          <label>name </label>
          <input
            {...register('name')}
            placeholder="name"
            required
            defaultValue={news.name}
          />
          {errors.name && <span>This field is required</span>}
        </div>
        <NewsBodyForm
          defaultValues={news}
          useFormRegisterReturn={register('subtitle_1')}
          useFormRegisterReturn1={register('full_text_1')}
          useFormRegisterReturn2={register('image_1')}
          errors={errors}
        />
        <NewsBodyForm
          defaultValues={news}
          useFormRegisterReturn={register('subtitle_2')}
          useFormRegisterReturn1={register('full_text_2')}
          useFormRegisterReturn2={register('image_2')}
          errors={errors}
        />
        <NewsBodyForm
          defaultValues={news}
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
