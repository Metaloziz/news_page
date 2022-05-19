import { FC, useCallback, useEffect } from 'react'

import { useSelector } from 'react-redux'

import { Comments } from './Comments/Comments'
import style from './CurrentNews.module.scss'
import { NewsBody } from './NewsBody/NewsBody'
import { NewsPreview } from './NewsPreview/NewsPreview'

import { Navigation, NavLinkComponent, PopularNewsPreview } from 'components'
import { Path } from 'enums/enums'
import { setCurrentNewsAC } from 'store/reducers'
import {
  selectorCurrentNews,
  selectorIsAdminMode,
  selectorPartSearchNews,
} from 'store/selectors'
import { useAppDispatch } from 'store/store'
import { addNewsViewsValueTC } from 'store/thunks'
import { getPopularNewsTC } from 'store/thunks/popular_news_thunks'

export const CurrentNews: FC = () => {
  const dispatch = useAppDispatch()

  const news = useSelector(selectorCurrentNews)
  const popularNews = useSelector(selectorPartSearchNews) // пока редьюсер свободен туда сетаются популярные новости
  const isAdmin = useSelector(selectorIsAdminMode)

  useEffect(() => {
    dispatch(getPopularNewsTC())
  }, [])

  const setCurrentNews = useCallback(
    (newsId: number) => {
      dispatch(setCurrentNewsAC(newsId))
      dispatch(addNewsViewsValueTC(newsId))
    },
    [dispatch],
  )

  return (
    <div className={style.container}>
      <NavLinkComponent nameButton="на главную" path={Path.MAIN} />
      <Navigation />
      <div className={style.body}>
        <NewsBody news={news} isAdmin={isAdmin} />
        <PopularNewsPreview news={popularNews} setCurrentNews={setCurrentNews} />
      </div>
      <div>
        <NewsPreview />
        <NewsPreview />
      </div>
      <Comments newsId={news.id} />
    </div>
  )
}
