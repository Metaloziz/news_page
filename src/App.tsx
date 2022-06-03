import { FC, useEffect } from 'react'

import style from 'App.module.scss'
import { ErrorComponent, Loader, RoutesComponent } from 'components'
import { Menu } from 'components/Menu'
import { useAppDispatch } from 'store/store'
import { getContactsTC, getCoursesTC, getSectionsTC } from 'store/thunks'

const App: FC = () => {
  const dispatch = useAppDispatch()

  // возможно есть место получше для useEffect
  useEffect(() => {
    dispatch(getSectionsTC())
    dispatch(getCoursesTC())
    dispatch(getContactsTC())
  }, [])

  return (
    <div className={style.container}>
      <Loader />
      <Menu />
      <RoutesComponent />
      <ErrorComponent />
    </div>
  )
}

export default App
