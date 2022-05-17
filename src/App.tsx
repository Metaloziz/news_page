import { FC, useEffect } from 'react'

import style from 'App.module.scss'
import { ErrorComponent, RoutesComponent } from 'components'
import { useAppDispatch } from 'store/store'
import { getSectionsTC } from 'store/thunks/sections_thunks'

const App: FC = () => {
  const dispatch = useAppDispatch()

  // возможно есть место получше для useEffect
  useEffect(() => {
    dispatch(getSectionsTC())
  }, [])

  return (
    <div className={style.container}>
      <div className={style.menu}>MENU</div>
      <RoutesComponent />
      <ErrorComponent />
    </div>
  )
}

export default App
