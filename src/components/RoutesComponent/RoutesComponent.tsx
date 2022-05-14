import { FC } from 'react'

import { Navigate, Route, Routes } from 'react-router-dom'

import { Path } from 'enums/enums'
import { CreateNewsPage } from 'pages/CreateNewsPage/CreateNewsPage'
import { CreateSectionPage } from 'pages/CreateSectionPage/CreateSectionPage'
import { CurrentNews } from 'pages/CurrentNews/CurrentNews'
import { MainPage } from 'pages/MainPage/MainPage'

export const RoutesComponent: FC = () => (
  <div>
    <Routes>
      <Route path={Path.DEFAULT} element={<Navigate to={Path.MAIN} />} />
      <Route path={Path.MAIN} element={<MainPage />} />
      <Route path={Path.CURRENT_NEWS} element={<CurrentNews />} />
      <Route path={Path.CREATE_NEWS} element={<CreateNewsPage />} />
      <Route path={Path.CREATE_SECTION} element={<CreateSectionPage />} />
    </Routes>
  </div>
)
