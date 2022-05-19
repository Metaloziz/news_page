import { FC, useCallback, useEffect } from 'react'

import { useSelector } from 'react-redux'

import { Comments } from './Comments/Comments'
import style from './CurrentNews.module.scss'
import { NewsBody } from './NewsBody/NewsBody'

import { Navigation, NavLinkComponent, PopularNewsPreview } from 'components'
import { CoursePreview } from 'components/Footer/CoursePreview/CoursePreview'
import { Path } from 'enums/enums'
import { setCurrentNewsAC } from 'store/reducers'
import {
  selectorCurrentNews,
  selectorIsAdminMode,
  selectorPartSearchNews,
} from 'store/selectors'
import { useAppDispatch } from 'store/store'
import { addNewsViewsValueTC, getPopularNewsTC } from 'store/thunks'

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
      const currentNews = popularNews.find(item => item.id === newsId)

      if (currentNews) {
        dispatch(setCurrentNewsAC(currentNews))
      }

      dispatch(addNewsViewsValueTC(newsId))
    },
    [dispatch, news],
  )

  return (
    <div className={style.container}>
      <NavLinkComponent nameButton="на главную" path={Path.MAIN} />
      <Navigation />
      <div className={style.body}>
        <NewsBody news={news} isAdmin={isAdmin} />
        <PopularNewsPreview news={popularNews} setCurrentNews={setCurrentNews} />
      </div>
      <Comments newsId={news.id} />
      <div className={style.footer}>
        <CoursePreview />
        <CoursePreview />
      </div>
    </div>
  )
}
