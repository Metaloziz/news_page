import { FC, useCallback, useEffect } from 'react'

import { useSelector } from 'react-redux'

import { Comments } from './Comments/Comments'
import style from './CurrentNews.module.scss'
import { NewsBody } from './NewsBody/NewsBody'

import { Footer, MobileNavigation, Navigation, PopularNewsPreview } from 'components'
import {
  selectCurrentNews,
  selectIsAdminMode,
  selectPartSearchNews,
} from 'store/selectors'
import { useAppDispatch } from 'store/store'
import { addNewsViewsValueTC, getNewsByIdTC, getPopularNewsTC } from 'store/thunks'

const CurrentNews: FC = () => {
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
        dispatch(getNewsByIdTC.fulfilled(currentNewsItem, '', currentNewsItem.id))
      }

      dispatch(addNewsViewsValueTC(newsId))
    },
    [dispatch, currentNews],
  )

  return (
    <div className={style.container}>
      <MobileNavigation />
      <div className={style.bodyContainer}>
        <Navigation />
        <div className={style.body}>
          <NewsBody news={currentNews} isAdmin={isAdmin} />
          <PopularNewsPreview news={popularNews} setCurrentNews={setCurrentNews} />
        </div>
        <Comments newsId={currentNews.id} />
        <Footer />
      </div>
    </div>
  )
}

export default CurrentNews
