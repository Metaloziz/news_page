import { FC } from 'react'

import style from './MainPage.module.scss'

import { Footer, MobileNavigation, Navigation, NewsContainer } from 'components'
import { Header } from 'components/Header'

const MainPage: FC = () => (
  <div className={style.container}>
    <MobileNavigation />
    <Header />
    <Navigation />
    <NewsContainer />
    <Footer />
  </div>
)
export default MainPage
