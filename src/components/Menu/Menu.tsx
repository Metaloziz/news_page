import { FC } from 'react'

import style from './Menu.module.scss'

import { MenuItems } from 'components/commonComponents'
import { Contacts } from 'components/Contacts'
import { menuNames } from 'constants/menuNames/menuNames'

export const Menu: FC = () => (
  <div className={style.container}>
    <div>
      <div className={style.header}>
        <span>ITEC</span>
        <p>Education complex</p>
      </div>
      <MenuItems elements={menuNames} />
    </div>
    <Contacts />
  </div>
)
