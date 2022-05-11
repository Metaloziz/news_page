import { FC } from 'react'

import style from './Section.module.scss'

import { SectionType } from 'store/sections_reducer'

export const Section: FC<{ section: SectionType }> = ({ section }) => (
  <div className={style.container}>
    <div>{section.id}</div>
    <div>{section.name}</div>
  </div>
)
