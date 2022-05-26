import React, { FC, useState } from 'react'

import { SubmitHandler, useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'

import style from './CreateNewsPage.module.scss'

import { Button, NavLinkComponent } from 'components'
import { BlockCheckbox } from 'components/commonComponents/BlockCheckbox/BlockCheckbox'
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

  const [isActiveSecondBlock, setIsActiveSecondBlock] = useState(false)
  const [isActiveThirdBlock, setIsActiveThirdBlock] = useState(false)

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

  const viewSecondBlockHandel = (): void => {
    setIsActiveSecondBlock(!isActiveSecondBlock)
  }

  const viewThirdBlockHandel = (): void => {
    setIsActiveThirdBlock(!isActiveThirdBlock)
  }

  return (
    <div className={style.container}>
      <NavLinkComponent nameButton="на главную" path={Path.MAIN} />
      <h2>Добавьте новость</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={style.header}>
          <div className={style.date}>
            <label>Дата</label>
            <input {...register('date')} placeholder="date" value={todayDate()} />
          </div>
          <div className={style.sections}>
            <label htmlFor="section">Section</label>
            <select id="section" defaultValue={1} {...register('section')}>
              <SelectOptions data={sections} />
            </select>
          </div>
        </div>
        <div className={style.name}>
          <label>Главный заголовок статьи</label>
          <input {...register('name')} placeholder="name" required defaultValue="title" />
        </div>

        <h3>Блок 1</h3>
        <NewsBodyForm
          useFormRegisterReturn={register('subtitle_1')}
          useFormRegisterReturn1={register('full_text_1')}
          useFormRegisterReturn2={register('image_1')}
          errors={errors}
        />

        <div className={style.blockTitle}>
          <h3>Блок 2</h3>
          <BlockCheckbox checked={isActiveSecondBlock} onChange={viewSecondBlockHandel} />
        </div>
        {isActiveSecondBlock && (
          <NewsBodyForm
            useFormRegisterReturn={register('subtitle_2')}
            useFormRegisterReturn1={register('full_text_2')}
            useFormRegisterReturn2={register('image_2')}
            errors={errors}
          />
        )}
        <div className={style.blockTitle}>
          <h3>Блок 3</h3>
          <BlockCheckbox checked={isActiveThirdBlock} onChange={viewThirdBlockHandel} />
        </div>
        {isActiveThirdBlock && (
          <NewsBodyForm
            useFormRegisterReturn={register('subtitle_3')}
            useFormRegisterReturn1={register('full_text_3')}
            useFormRegisterReturn2={register('image_3')}
            errors={errors}
          />
        )}

        <Button name="отправить" type="submit" />
      </form>
    </div>
  )
}
