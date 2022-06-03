import { FC } from 'react'

import style from './MenuItems.module.scss'

import { MenuItemsType } from 'constants/menuNames/menuNames'

type MenuItemsPropsType = {
  elements: MenuItemsType[]
  isMobileView?: boolean
}

export const MenuItems: FC<MenuItemsPropsType> = ({ elements, isMobileView }) => (
  <div className={`${style.menuItems} ${isMobileView && style.active}`}>
    {elements.map(({ link, fire, icon, name }) => (
      <a key={name} href={link}>
        <div className={`${style.item}  ${name === 'IT - новости' ? style.active : ''}`}>
          <img className={style.icon} alt="icon" src={icon} />
          <span>
            {name}
            {fire && <img className={style.fire} alt="fire" src={fire} />}
          </span>
        </div>
      </a>
    ))}
  </div>
)
