import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

export type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>
export type ButtonCommonType = DefaultButtonPropsType & {
  name: string // если передать пустую строку, можно вместо имени передать иконку как children
}
