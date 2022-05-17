import { FC } from 'react'

import style from './MainPage.module.scss'

import { Footer, Navigation, NavLinkComponent, NewsContainer } from 'components'
import { Path } from 'enums/enums'

export const MainPage: FC = () => (
  <div className={style.container}>
    <div className={style.header}>НОВОСТИ - текст</div>
    <Navigation />
    <NavLinkComponent nameButton="создать новость" path={Path.CREATE_NEWS} />
    <NewsContainer />
    <Footer />
  </div>
)
