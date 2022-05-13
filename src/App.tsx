import { FC, useEffect } from 'react'

import { Navigate, Route, Routes } from 'react-router-dom'

import { Path } from 'enums/enums'
import { CreateNews } from 'pages/CreateNews/CreateNews'
import { CreateSection } from 'pages/CreateSection/CreateSection'
import { CurrentNews } from 'pages/CurrentNews/CurrentNews'
import { MainPage } from 'pages/MainPage/MainPage'
import { useAppDispatch } from 'store/store'
import { getSectionsTC } from 'store/thunks/sections_thunks'

const App: FC = () => {
  const dispatch = useAppDispatch()

  // initial request
  useEffect(() => {
    dispatch(getSectionsTC())
    console.log('App')
  }, [])

  return (
    <div>
      <Routes>
        <Route path={Path.DEFAULT} element={<Navigate to={Path.MAIN} />} />
        <Route path={Path.MAIN} element={<MainPage />} />
        <Route path={Path.CURRENT_NEWS} element={<CurrentNews />} />
        <Route path={Path.CREATE_NEWS} element={<CreateNews />} />
        <Route path={Path.CREATE_SECTION} element={<CreateSection />} />
      </Routes>
    </div>
  )
}

export default App
