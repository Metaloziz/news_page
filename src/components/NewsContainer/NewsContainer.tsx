import { FC, useCallback, useEffect } from 'react'

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { News } from './News'
import style from './NewsContainer.module.scss'

import { Button } from 'components/Button/Button'
import { SinglePaginationSearchNews } from 'components/SinglePaginationSearchNews'
import { SinglePaginationSectionNews } from 'components/SinglePaginationSectionNews'
import { NEWS_BY_SECTIONS } from 'constants/constants'
import { Path } from 'enums/enums'
import { setCurrentNewsAC, setPartSearchNewsAC } from 'store/reducers'
import {
  selectorCurrentPageSearchNews,
  selectorIdActiveSection,
  selectorNews,
  selectorNewsTypeView,
  selectorNumberPage,
  selectorPartSearchNews,
} from 'store/selectors'
import { useAppDispatch } from 'store/store'
import { addNewsViewsValueTC, deleteNewsTC, getNewsPartTC } from 'store/thunks'

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
