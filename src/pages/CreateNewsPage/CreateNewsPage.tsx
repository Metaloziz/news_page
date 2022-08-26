import { FC, useState } from 'react'

import { SubmitHandler, useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'

import style from './CreateNewsPage.module.scss'
import { NewsBodyForm } from './NewsBodyForm/NewsBodyForm'
import { SelectOptions } from './SelectOptions/SelectOptions'

import { BlockCheckbox, Button, NavLinkComponent } from 'components'
import { ALL_SECTION_ID, OTHER_SECTION_ID, POPULAR_SECTION_ID } from 'constants/constants'
import { Path } from 'enums'
import { selectSections } from 'store/selectors'
import { useAppDispatch } from 'store/store'
import { postNewsTC } from 'store/thunks'
import { FormType } from 'store/types'
import { todayDate } from 'utils'

const CreateNewsPage: FC = () => {
  const dispatch = useAppDispatch()

  const sections = useSelector(selectSections)

  const newSection = sections.filter(
    el =>
      el.id !== ALL_SECTION_ID &&
      el.id !== OTHER_SECTION_ID &&
      el.id !== POPULAR_SECTION_ID,
  )

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
              <SelectOptions data={newSection} />
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
          useFormRegisterReturn3={register('file')}
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
            useFormRegisterReturn3={register('file')}
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
            useFormRegisterReturn3={register('file')}
            errors={errors}
          />
        )}

        <Button name="отправить" type="submit" />
      </form>
      <NavLinkComponent nameButton="ПОСМОТРЕТЬ РЕЗУЛЬТАТ" path={Path.CURRENT_NEWS} />
    </div>
  )
}

export default CreateNewsPage
