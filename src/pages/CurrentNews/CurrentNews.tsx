import { FC, useCallback, useEffect } from 'react'

import { useSelector } from 'react-redux'

import { Comments } from './Comments/Comments'
import style from './CurrentNews.module.scss'
import { NewsBody } from './NewsBody/NewsBody'

import { Navigation, NavLinkComponent, PopularNewsPreview } from 'components'
import { CoursePreview } from 'components/Footer/CoursePreview/CoursePreview'
import { FIRST_ARRAY_ITEM, SECOND_ARRAY_ITEM } from 'components/Footer/Footer'
import { Path } from 'enums/enums'
import { setCurrentNewsAC } from 'store/reducers'
import {
  selectCurrentNews,
  selectIsAdminMode,
  selectIsCourses,
  selectPartSearchNews,
} from 'store/selectors'
import { useAppDispatch } from 'store/store'
import { addNewsViewsValueTC, getPopularNewsTC } from 'store/thunks'

export const CurrentNews: FC = () => {
  const dispatch = useAppDispatch()

  const currentNews = useSelector(selectCurrentNews)
  const popularNews = useSelector(selectPartSearchNews) // пока редьюсер свободен туда сетаются популярные новости
  const isAdmin = useSelector(selectIsAdminMode)
  const courses = useSelector(selectIsCourses)

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
        <CoursePreview courses={courses[FIRST_ARRAY_ITEM]} />
        <CoursePreview courses={courses[SECOND_ARRAY_ITEM]} />
      </div>
    </div>
  )
}
