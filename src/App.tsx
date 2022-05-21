import { FC, useEffect } from 'react'

import style from 'App.module.scss'
import { ErrorComponent, RoutesComponent } from 'components'
import { Menu } from 'components/Menu/Menu'
import { useAppDispatch } from 'store/store'
import { getCoursesTC } from 'store/thunks/app_thunks'
import { getSectionsTC } from 'store/thunks/sections_thunks'

const App: FC = () => {
  const dispatch = useAppDispatch()

  // возможно есть место получше для useEffect
  useEffect(() => {
    dispatch(getSectionsTC())
    dispatch(getCoursesTC())
  }, [])

  return (
    <div className={style.container}>
      <Menu />
      <RoutesComponent />
      <ErrorComponent />
    </div>
  )
}

export default App
