import { FC } from 'react'

import { useNavigate } from 'react-router-dom'

import { SearchButton } from '../SearchButton/SearchButton'

import style from './Navigation.module.scss'

import { Button } from 'components/Button/Button'
import { NavLinkComponent } from 'components/NavlinkComponent/NavLinkComponent'
import { Paths } from 'utils/enums'

export const paths: string[] = ['Всё', 'ITEC', 'Разделы']

export const Navigation: FC = () => {
  console.log('')

  return (
    <div className={style.main}>
      <div className={style.container}>
        {paths.map(path => (
          <div key={path} className={style.path}>
            {path}
          </div>
        ))}
        <NavLinkComponent nameButton="создать секцию" path={Paths.CREATE_SECTION} />
      </div>
      <SearchButton />
    </div>
  )
}
