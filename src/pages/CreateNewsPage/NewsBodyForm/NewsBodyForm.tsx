import { FC } from 'react'

import { FieldErrors, UseFormRegisterReturn } from 'react-hook-form'

import style from './NewsBodyForm.module.scss'

import { NewsBodyType, NewsFileType } from 'store/types'

type DefaultValuesFormBlockType = {
  [key: string]: string | number
}

type NewsBodyFormPropsType = {
  defaultValues?: DefaultValuesFormBlockType
  useFormRegisterReturn: UseFormRegisterReturn
  errors: FieldErrors<NewsBodyType & NewsFileType>
  useFormRegisterReturn1: UseFormRegisterReturn
  useFormRegisterReturn2: UseFormRegisterReturn
  useFormRegisterReturn3?: UseFormRegisterReturn
}

export const NewsBodyForm: FC<NewsBodyFormPropsType> = props => {
  const setDefaultValue = (str: string): string | number => {
    const obj = props.defaultValues as DefaultValuesFormBlockType

    if (props.defaultValues) {
      return obj[`${str}`]
    }

    return ''
  }

  return (
    <div className={style.container}>
      <div className={style.subtitle}>
        <label>Подзаголовок</label>
        <input
          {...props.useFormRegisterReturn}
          placeholder="Подзаголовок"
          required
          defaultValue={setDefaultValue(props.useFormRegisterReturn.name)}
        />
      </div>

      <div className={style.text}>
        <label>Текст</label>
        <textarea
          {...props.useFormRegisterReturn1}
          placeholder="основной текст блока"
          required
          rows={5}
          defaultValue={setDefaultValue(props.useFormRegisterReturn1.name)}
        />
      </div>
      <div className={style.image}>
        <label>Ссылка на картинку из интернета</label>
        <input
          {...props.useFormRegisterReturn2}
          placeholder="https://www.ixbt.com/img.jpg"
          defaultValue={setDefaultValue(props.useFormRegisterReturn2.name)}
        />
      </div>
      {props.useFormRegisterReturn3 && (
        <div>
          <label>file </label>
          <input {...props.useFormRegisterReturn3} type="file" multiple />
        </div>
      )}
    </div>
  )
}
