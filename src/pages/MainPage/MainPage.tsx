import { FC } from 'react'

import { CreatePageNavigate } from 'components/CreatePageNavigate/CreatePageNavigate'
import { Footer } from 'components/Footer/Footer'
import { Navigation } from 'components/Navigation/Navigation'
import { NewsContainer } from 'components/NewsContainer/NewsContainer'
import { SinglePagination } from 'components/SinglePagination/SinglePagination'
import style from 'pages/MainPage/MainPage.module.scss'

export const MainPage: FC = () => (
  <div className={style.container}>
    <div className={style.header}>НОВОСТИ - текст</div>
    <Navigation />
    <CreatePageNavigate />
    <NewsContainer />
    <SinglePagination />
    <Footer />
  </div>
)
