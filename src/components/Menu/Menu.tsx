import { FC } from 'react'

import { useSelector } from 'react-redux'

import style from './Menu.module.scss'

import { MenuItems } from 'components/commonComponents'
import { Contacts } from 'components/Contacts'
import { menuNames } from 'constants/menuNames/menuNames'
import { changeIsAdminModeAC } from 'store/reducers'
import { selectIsAdminMode } from 'store/selectors'
import { useAppDispatch } from 'store/store'

export const Menu: FC = () => {
  const dispatch = useAppDispatch()

  const isAdmin = useSelector(selectIsAdminMode)

  const switchIsAdminMode = (): void => {
    if (isAdmin) {
      dispatch(changeIsAdminModeAC(false))
    } else {
      dispatch(changeIsAdminModeAC(true))
    }
  }

  return (
    <div className={style.container}>
      <div>
        <div className={style.header}>
          <span>ITEC</span>
          <p>Education complex</p>
        </div>
        <MenuItems elements={menuNames} />
        <h4>
          режим админа: вкл\выкл <input type="checkbox" onClick={switchIsAdminMode} />
        </h4>
      </div>
      <Contacts />
    </div>
  )
}
