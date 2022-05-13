import { FC, useCallback, useEffect } from 'react'

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { News } from './News/News'
import style from './NewsContainer.module.scss'

import { Button } from 'components/Button/Button'
import { Path } from 'enums/enums'
import { setCurrentNewsAC } from 'store/reducers/news_reducer'
import { selectorNews } from 'store/selectors/news'
import { selectorIdActiveSection } from 'store/selectors/sections'
import { selectorNumberPage } from 'store/selectors/singlePagination'
import { useAppDispatch } from 'store/store'
import {
  addNewsViewsValueTC,
  getNewsPartTC,
  deleteNewsTC,
} from 'store/thunks/news_thunks'

export const NewsContainer: FC = () => {
  const dispatch = useAppDispatch()

  const navigate = useNavigate()

  const news = useSelector(selectorNews)
  const pageNumber = useSelector(selectorNumberPage)
  const activeSection = useSelector(selectorIdActiveSection)

  useEffect(() => {
    dispatch(getNewsPartTC(pageNumber))
  }, [pageNumber, activeSection])

  const setCurrentNews = useCallback(
    (newsId: number) => {
      dispatch(setCurrentNewsAC(newsId))
      dispatch(addNewsViewsValueTC(newsId))
    },
    [dispatch],
  )

  const newsRouteHandle = (): void => {
    navigate(`/${Path.CURRENT_NEWS}`)
  }

  const removeNews = (newsId: number): void => {
    dispatch(deleteNewsTC(newsId))
  }

  return (
    <div className={style.container}>
      {news.map(newsItem => (
        <div key={newsItem.id}>
          <Button name="удалить" onClick={() => removeNews(newsItem.id)} />
          <News
            data={newsItem}
            newsRouteHandle={newsRouteHandle}
            setCurrentNews={setCurrentNews}
          />
        </div>
      ))}
    </div>
  )
}
