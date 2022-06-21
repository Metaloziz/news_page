import { FC, lazy, Suspense } from 'react'

import { Navigate, Route, Routes } from 'react-router-dom'

import { PageLoader, ProtectedRoute } from 'components/commonComponents'
import { Path } from 'enums'

const MainPage = lazy(() => import('../../pages/MainPage/MainPage'))
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'))
const CurrentNews = lazy(() => import('../../pages/CurrentNews/CurrentNews'))
const CreateNewsPage = lazy(() => import('../../pages/CreateNewsPage/CreateNewsPage'))
const ChangeNewsPage = lazy(() => import('../../pages/ChangeNewsPage/ChangeNewsPage'))
const Component404 = lazy(() => import('../commonComponents/Component404/Component404'))
const CreateSectionPage = lazy(
  () => import('../../pages/CreateSectionPage/CreateSectionPage'),
)

export const RoutesComponent: FC = () => (
  <Suspense fallback={<PageLoader />}>
    <Routes>
      <Route path={Path.DEFAULT} element={<Navigate to={Path.MAIN} />} />
      <Route path={Path.MAIN} element={<MainPage />} />
      <Route path={Path.CURRENT_NEWS} element={<CurrentNews />} />
      <Route path={Path.LOGIN} element={<LoginPage />} />
      <Route element={<ProtectedRoute redirectPath={Path.MAIN} />}>
        <Route path={Path.CREATE_NEWS} element={<CreateNewsPage />} />
        <Route path={Path.CREATE_SECTION} element={<CreateSectionPage />} />
        <Route path={Path.CHANGE_NEWS} element={<ChangeNewsPage />} />
      </Route>
      <Route path="*" element={<Component404 />} />
    </Routes>
  </Suspense>
)
