import React, { FC, useCallback, useEffect } from 'react'

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { News } from './News/News'
import style from './NewsContainer.module.scss'

import { Button } from 'components/Button/Button'
import { setCurrentNewsAC } from 'store/news_reducer'
import { useAppDispatch } from 'store/store'
import {
  addNewsViewsValueTC,
  getNewsPartTC,
  removeNewsTC,
} from 'store/thunks/news_thunks'
import { Paths } from 'utils/enums'
import { newsSelector, numberPageSelector } from 'utils/selectors'

export const NewsContainer: FC = () => {
  const newsArray = useSelector(newsSelector)
  const pageNumber = useSelector(numberPageSelector)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getNewsPartTC(pageNumber))
  }, [pageNumber])

  const setCurrentNews = useCallback(
    (newsId: number) => {
      dispatch(setCurrentNewsAC(newsId))
      dispatch(addNewsViewsValueTC(newsId))
    },
    [dispatch],
  )

  const newsRouteHandle = (): void => {
    navigate(`/${Paths.CURRENT_NEWS}`)
  }

  const removeNews = (newsId: number): void => {
    dispatch(removeNewsTC(newsId))
  }

  return (
    <div className={style.container}>
      {newsArray.map(news => (
        <div key={news.id}>
          <Button name="удалить" onClick={() => removeNews(news.id)} />
          <News
            data={news}
            newsRouteHandle={newsRouteHandle}
            setCurrentNews={setCurrentNews}
          />
        </div>
      ))}
    </div>
  )
}
