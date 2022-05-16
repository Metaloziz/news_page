import { FC, useCallback, useEffect } from 'react'

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { News } from './News/News'
import style from './NewsContainer.module.scss'

import { Button } from 'components/Button/Button'
import { SinglePaginationSearchNews } from 'components/SinglePaginationSearchNews/SinglePaginationSearchNews'
import { SinglePaginationSectionNews } from 'components/SinglePaginationSectionNews/SinglePaginationSectionNews'
import { NEWS_BY_SECTIONS } from 'constants/constants'
import { Path } from 'enums/enums'
import { setPartSearchNewsAC } from 'store/reducers/search_news_reducer'
import { setCurrentNewsAC } from 'store/reducers/section_news_reducer'
import { selectorNewsTypeView } from 'store/selectors/app'
import { selectorNews } from 'store/selectors/news'
import {
  selectorCurrentPageSearchNews,
  selectorPartSearchNews,
} from 'store/selectors/searchNews'
import { selectorIdActiveSection } from 'store/selectors/sections'
import { selectorNumberPage } from 'store/selectors/singlePagination'
import { useAppDispatch } from 'store/store'
import {
  addNewsViewsValueTC,
  deleteNewsTC,
  getNewsPartTC,
} from 'store/thunks/news_thunks'

export const NewsContainer: FC = () => {
  const dispatch = useAppDispatch()

  const navigate = useNavigate()

  const viewMode = useSelector(selectorNewsTypeView)

  const news =
    viewMode === NEWS_BY_SECTIONS
      ? useSelector(selectorNews)
      : useSelector(selectorPartSearchNews)

  const pageNumber = useSelector(selectorNumberPage)
  const activeSection = useSelector(selectorIdActiveSection)
  const pageNumberSearchNews = useSelector(selectorCurrentPageSearchNews)

  useEffect(() => {
    dispatch(getNewsPartTC(pageNumber))
  }, [pageNumber, activeSection])

  useEffect(() => {
    dispatch(setPartSearchNewsAC())
  }, [pageNumberSearchNews])

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
    <div>
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
      {viewMode === NEWS_BY_SECTIONS ? (
        <SinglePaginationSectionNews />
      ) : (
        <SinglePaginationSearchNews />
      )}
    </div>
  )
}
