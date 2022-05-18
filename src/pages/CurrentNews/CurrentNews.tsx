import { FC } from 'react'

import { useSelector } from 'react-redux'

import { Comments } from './Comments/Comments'
import style from './CurrentNews.module.scss'
import { NewsPreview } from './NewsPreview/NewsPreview'

import { Navigation, NavLinkComponent } from 'components'
import { PopularNewsPreview } from 'components/PopularNewsPreview/PopularNewsPreview'
import { Path } from 'enums/enums'
import { NewsBody } from 'pages/CurrentNews/NewsBody/NewsBody'
import { selectorCurrentNews } from 'store/selectors'

export const CurrentNews: FC = () => {
  const news = useSelector(selectorCurrentNews)

  return (
    <div className={style.container}>
      <NavLinkComponent nameButton="на главную" path={Path.MAIN} />
      <Navigation />
      <div className={style.body}>
        <NewsBody news={news} />
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
