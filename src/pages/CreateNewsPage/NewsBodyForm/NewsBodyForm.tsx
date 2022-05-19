import React, { FC } from 'react'

import { FieldErrors, UseFormRegisterReturn } from 'react-hook-form'

import { IMAGE } from 'constants/constants'
import style from 'pages/CreateNewsPage/CreateNewsPage.module.scss'
import { NewsBodyType, NewsFileType } from 'store/types'

type NewsBodyFormPropsType = {
  useFormRegisterReturn: UseFormRegisterReturn
  errors: FieldErrors<NewsBodyType & NewsFileType>
  useFormRegisterReturn1: UseFormRegisterReturn
  useFormRegisterReturn2: UseFormRegisterReturn
}

export const NewsBodyForm: FC<NewsBodyFormPropsType> = props => (
  <div className={style.fullText}>
    <h3>fullText 1</h3>
    <div>
      <label>subtitle_1 </label>
      <input
        {...props.useFormRegisterReturn}
        placeholder="subtitle_1"
        required
        defaultValue="Lorem  Lorem "
      />
      {props.errors.subtitle_1 && <span>This field is required</span>}
    </div>

    <div>
      <label>full_text_1 </label>
      <textarea
        {...props.useFormRegisterReturn1}
        placeholder="full_text_1"
        required
        rows={5}
        defaultValue=" Lorem Lorem ipsum dolor sit amet, consectetur  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam eaque nemo nulla officiis tenetur ut vero? Dolorem laudantium molestias nulla sequi. A adipisci culpa delectus dolorem laboriosam quisquam sapiente suscipit? "
      />
      {props.errors.full_text_1 && <span>This field is required</span>}
    </div>
    <div>
      <label>image_1 </label>
      <input
        {...props.useFormRegisterReturn2}
        placeholder="image_1"
        defaultValue={IMAGE}
      />
      {props.errors.image_1 && <span>This field is required</span>}
    </div>
    {/* <div> */}
    {/*  <label>file </label> */}
    {/*  <input {...register('file')} type="file" /> */}
    {/* </div> */}
  </div>
)
