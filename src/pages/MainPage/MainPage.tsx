import { FC } from 'react'

import style from './MainPage.module.scss'

import { Footer, Navigation, NewsContainer } from 'components'
import { Header } from 'components/Header'

export const MainPage: FC = () => (
  <div className={style.container}>
    <Header />
    <Navigation />
    <NewsContainer />
    <Footer />
  </div>
)
