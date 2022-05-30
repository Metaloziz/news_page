import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'

import style from './Button.module.scss'

export type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>
export type ButtonCommonType = DefaultButtonPropsType & {
  name: string // если передать пустую строку, можно вместо имени передать иконку как children
}

export const Button: FC<ButtonCommonType> = ({ name, ...restProps }) => (
  <button className={style.item} type="button" {...restProps}>
    <span>{name}</span>
    {restProps.children}
  </button>
)
