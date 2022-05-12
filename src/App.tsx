import { FC } from 'react'

import { Navigate, Route, Routes } from 'react-router-dom'

import { CreateNews } from 'pages/CreateNews/CreateNews'
import { CreateSection } from 'pages/CreateSection/CreateSection'
import { CurrentNews } from 'pages/CurrentNews/CurrentNews'
import { MainPage } from 'pages/MainPage/MainPage'
import { Path } from 'utils/enums'

const App: FC = () => (
  <div>
    <Routes>
      <Route path="/" element={<Navigate to={Path.MAIN} />} />
      <Route path={Path.MAIN} element={<MainPage />} />
      <Route path={Path.CURRENT_NEWS} element={<CurrentNews />} />
      <Route path={Path.CREATE_NEWS} element={<CreateNews />} />
      <Route path={Path.CREATE_SECTION} element={<CreateSection />} />
    </Routes>
  </div>
)

export default App
