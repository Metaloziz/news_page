import { FC, useState } from 'react'

import style from './MobileNavigation.module.scss'

import menuIcon from 'assets/images/common/menuIcon.svg'
import { MenuItems } from 'components/commonComponents'
import { menuNames } from 'constants/menuNames/menuNames'

export const MobileNavigation: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const hideMenuHandel = (): void => {
    setIsOpen(!isOpen)
  }

  document.onclick = event => {
    if (!document.getElementById('select')?.contains(event.target as Node)) {
      setIsOpen(false)
    }
  }

  return (
    <div id="select" className={style.container}>
      <div className={style.header} role="button" tabIndex={-1} onClick={hideMenuHandel}>
        <div className={style.title}>
          <span>ITEC</span>
          <p>Education complex</p>
        </div>
        <div className={style.icon}>
          <img alt="menu icon" src={menuIcon} />
        </div>
      </div>
      <div className={style.selector}>
        {isOpen && <MenuItems elements={menuNames} isMobileView />}
      </div>
    </div>
  )
}
