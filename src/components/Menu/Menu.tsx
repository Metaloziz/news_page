import { FC } from 'react'

import { useSelector } from 'react-redux'

import style from './Menu.module.scss'

import { Button, MenuItems } from 'components/commonComponents'
import { Contacts } from 'components/Contacts'
import { menuNames } from 'constants/menuNames/menuNames'
import { setIsLoginAC } from 'store/reducers/login_reducer'
import { selectIsLogin } from 'store/selectors/login'
import { useAppDispatch } from 'store/store'
import { postLogoutTC } from 'store/thunks/login_thunks'

export const Menu: FC = () => {
  const dispatch = useAppDispatch()

  const isAdmin = useSelector(selectIsLogin)

  const switchIsAdminMode = (): void => {
    if (isAdmin) {
      dispatch(setIsLoginAC(false))
    } else {
      dispatch(setIsLoginAC(true))
    }
  }

  const logout = (): void => {
    dispatch(postLogoutTC())
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
          <Button name="выйти" onClick={logout} />
        </h4>
      </div>
      <Contacts />
    </div>
  )
}
