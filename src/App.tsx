import { FC } from 'react'

import style from 'App.module.scss'
import { ErrorComponent, Loader, RoutesComponent } from 'components'
import { Menu } from 'components/Menu'

const App: FC = () => (
  <div className={style.container}>
    <Loader />
    <Menu />
    <RoutesComponent />
    <ErrorComponent />
  </div>
)

export default App
