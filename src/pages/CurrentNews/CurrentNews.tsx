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
  selectCurrentNews,
  selectIsAdminMode,
  selectPartSearchNews,
} from 'store/selectors'
import { useAppDispatch } from 'store/store'
import { addNewsViewsValueTC, getPopularNewsTC } from 'store/thunks'

export const CurrentNews: FC = () => {
  const dispatch = useAppDispatch()

  const currentNews = useSelector(selectCurrentNews)
  const popularNews = useSelector(selectPartSearchNews) // пока редьюсер свободен туда сетаются популярные новости
  const isAdmin = useSelector(selectIsAdminMode)

  useEffect(() => {
    dispatch(getPopularNewsTC())
  }, [])

  const setCurrentNews = useCallback(
    (newsId: number) => {
      const currentNewsItem = popularNews.find(item => item.id === newsId)

      if (currentNewsItem) {
        dispatch(setCurrentNewsAC(currentNewsItem))
      }

      dispatch(addNewsViewsValueTC(newsId))
    },
    [dispatch, currentNews],
  )

  return (
    <div className={style.container}>
      <NavLinkComponent nameButton="на главную" path={Path.MAIN} />
      <Navigation />
      <div className={style.body}>
        <NewsBody news={currentNews} isAdmin={isAdmin} />
        <PopularNewsPreview news={popularNews} setCurrentNews={setCurrentNews} />
      </div>
      <Comments newsId={currentNews.id} />
      <div className={style.footer}>
        <CoursePreview />
        <CoursePreview />
      </div>
    </div>
  )
}
