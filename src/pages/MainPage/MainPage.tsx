import React, { FC } from 'react'

import { Footer } from 'components/Footer/Footer'
import { Navigation } from 'components/Navigation/Navigation'
import { NavLinkComponent } from 'components/NavlinkComponent/NavLinkComponent'
import { NewsContainer } from 'components/NewsContainer/NewsContainer'
import { SinglePagination } from 'components/SinglePagination/SinglePagination'
import style from 'pages/MainPage/MainPage.module.scss'
import { Paths } from 'utils/enums'

export const MainPage: FC = () => (
  <div className={style.container}>
    <div className={style.header}>НОВОСТИ - текст</div>
    <Navigation />
    <NavLinkComponent nameButton="создать новость" path={Paths.CREATE_NEWS} />
    <NewsContainer />
    <SinglePagination />
    <Footer />
  </div>
)
