import React, { FC } from 'react'

import { Footer } from 'components/Footer/Footer'
import { Navigation } from 'components/Navigation/Navigation'
import { NavLinkComponent } from 'components/NavlinkComponent/NavLinkComponent'
import { NewsContainer } from 'components/NewsContainer/NewsContainer'
import { SinglePagination } from 'components/SinglePagination/SinglePagination'
import { Path } from 'enums/enums'
import style from 'pages/MainPage/MainPage.module.scss'

export const MainPage: FC = () => (
  <div className={style.container}>
    <div className={style.header}>НОВОСТИ - текст</div>
    <Navigation />
    <NavLinkComponent nameButton="создать новость" path={Path.CREATE_NEWS} />
    <NewsContainer />
    <SinglePagination />
    <Footer />
  </div>
)
