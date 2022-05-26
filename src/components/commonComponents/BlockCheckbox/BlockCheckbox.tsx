import React, { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react'

import style from './BlockCheckbox.module.scss'

type DefaultRadioPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

export const BlockCheckbox: FC<DefaultRadioPropsType> = ({ ...props }) => (
  <label className={style.switch}>
    <input type="checkbox" {...props} />
    <span className={style.slider} />
  </label>
)
