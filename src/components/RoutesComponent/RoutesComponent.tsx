import { FC } from 'react'

import { Navigate, Route, Routes } from 'react-router-dom'

import { Component404 } from 'components/commonComponents/Component404/Component404'
import { Path } from 'enums'
import {
  ChangeNewsPage,
  CreateNewsPage,
  CreateSectionPage,
  CurrentNews,
  MainPage,
} from 'pages'

export const RoutesComponent: FC = () => (
  <Routes>
    <Route path={Path.DEFAULT} element={<Navigate to={Path.MAIN} />} />
    <Route path={Path.MAIN} element={<MainPage />} />
    <Route path={Path.CURRENT_NEWS} element={<CurrentNews />} />
    <Route path={Path.CREATE_NEWS} element={<CreateNewsPage />} />
    <Route path={Path.CREATE_SECTION} element={<CreateSectionPage />} />
    <Route path={Path.CHANGE_NEWS} element={<ChangeNewsPage />} />
    <Route path="*" element={<Component404 />} />
  </Routes>
)
