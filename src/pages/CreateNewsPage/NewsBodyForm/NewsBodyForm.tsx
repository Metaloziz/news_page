import { FC } from 'react'

import { FieldErrors, UseFormRegisterReturn } from 'react-hook-form'

import style from 'pages/CreateNewsPage/CreateNewsPage.module.scss'
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
    <div className={style.fullText}>
      <h3>Блок 1</h3>
      <div>
        <label>Заголовок</label>
        <input
          {...props.useFormRegisterReturn}
          placeholder="subtitle_1"
          required
          defaultValue={setDefaultValue(props.useFormRegisterReturn.name)}
        />
        {props.errors.subtitle_1 && <span>This field is required</span>}
      </div>

      <div>
        <label>Основной текс </label>
        <textarea
          {...props.useFormRegisterReturn1}
          placeholder="full_text_1"
          required
          rows={5}
          defaultValue={setDefaultValue(props.useFormRegisterReturn1.name)}
        />
        {props.errors.full_text_1 && <span>This field is required</span>}
      </div>
      <div>
        <label>ссылка на картинку</label>
        <input
          {...props.useFormRegisterReturn2}
          placeholder="image_1"
          defaultValue={setDefaultValue(props.useFormRegisterReturn2.name)}
        />
        {props.errors.image_1 && <span>This field is required</span>}
      </div>
      {/* <div> */}
      {/*  <label>file </label> */}
      {/*  <input {...register('file')} type="file" /> */}
      {/* </div> */}
    </div>
  )
}
