import { FC } from 'react'

import style from './MainPage.module.scss'

import { Footer, Navigation, NewsContainer } from 'components'

export const MainPage: FC = () => (
  <div className={style.container}>
    <div className={style.header}>НОВОСТИ - текст</div>
    <Navigation />

    <NewsContainer />
    <Footer />
  </div>
)
