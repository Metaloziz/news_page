import { FC } from 'react'

import style from '../Menu.module.scss'

import { MenuItemsType } from 'constants/menuNames/menuNames'

type MenuItemPropsType = {
  item: MenuItemsType
}

export const MenuItem: FC<MenuItemPropsType> = ({ item: { name, fire, icon } }) => (
  <div className={style.item}>
    <img className={style.icon} alt="icon" src={icon} />
    <span>
      {name}
      {fire && <img className={style.fire} alt="fire" src={fire} />}
    </span>
  </div>
)
