import { FC, useCallback, useEffect } from 'react'

import { useSelector } from 'react-redux'

import { Comments } from './Comments/Comments'
import style from './CurrentNews.module.scss'
import { NewsBody } from './NewsBody/NewsBody'

import { Footer, Navigation, PopularNewsPreview } from 'components'
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
      <Navigation />
      <div className={style.body}>
        <NewsBody news={currentNews} isAdmin={isAdmin} />
        <PopularNewsPreview news={popularNews} setCurrentNews={setCurrentNews} />
      </div>
      <Comments newsId={currentNews.id} />
      <Footer />
    </div>
  )
}
