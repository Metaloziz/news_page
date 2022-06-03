import { FC } from 'react'

import style from './Button.module.scss'

import { ButtonCommonType } from 'store/types'

export const Button: FC<ButtonCommonType> = ({ name, ...restProps }) => (
  <button className={style.item} type="button" {...restProps}>
    <span>{name}</span>
    {restProps.children}
  </button>
)
