import { FC } from 'react'

import { useSelector } from 'react-redux'

import { Comments } from './Comments/Comments'
import style from './CurrentNews.module.scss'
import { NewsBody } from './NewsBody/NewsBody'
import { NewsPreview } from './NewsPreview/NewsPreview'

import { Navigation, NavLinkComponent, PopularNewsPreview } from 'components'
import { Path } from 'enums/enums'
import { selectorCurrentNews, selectorIsAdminMode } from 'store/selectors'

export const CurrentNews: FC = () => {
  const news = useSelector(selectorCurrentNews)
  const isAdmin = useSelector(selectorIsAdminMode)

  return (
    <div className={style.container}>
      <NavLinkComponent nameButton="на главную" path={Path.MAIN} />
      <Navigation />
      <div className={style.body}>
        <NewsBody news={news} isAdmin={isAdmin} />
        <PopularNewsPreview />
      </div>
      <div>
        <NewsPreview />
        <NewsPreview />
      </div>
      <Comments newsId={news.id} />
    </div>
  )
}
