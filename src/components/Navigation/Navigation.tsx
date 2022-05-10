import { FC } from 'react'

import { SearchButton } from '../SearchButton/SearchButton'

import style from './Navigation.module.scss'

export const paths: string[] = ['Всё', 'Лучшее', 'ITEC', 'Разделы']

export const Navigation: FC = () => (
  <div className={style.main}>
    <div className={style.container}>
      {paths.map(path => (
        <div key={path} className={style.path}>
          {path}
        </div>
      ))}
    </div>
    <SearchButton />
  </div>
)
