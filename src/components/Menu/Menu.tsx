import { FC } from 'react'

import { useSelector } from 'react-redux'

import style from './Menu.module.scss'

import { Contacts } from 'components/Contacts/Contacts'
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
      <div>МЕНЮ</div>
      <div>новости</div>
      <h4>режим админа:</h4>
      <span>вкл\выкл</span> <input type="checkbox" onClick={switchIsAdminMode} />
      <Contacts />
    </div>
  )
}
