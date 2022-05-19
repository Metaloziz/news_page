import { FC, useCallback, useEffect } from 'react'

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import style from './NewsContainer.module.scss'
import { NewsPreview } from './NewsPreview'
import { Pagination } from './Pagination/Pagination'

import { NavLinkComponent } from 'components/NavlinkComponent'
import { NEWS_BY_SECTIONS } from 'constants/constants'
import { Path } from 'enums/enums'
import { setCurrentNewsAC, setPartSearchNewsAC } from 'store/reducers'
import {
  selectorCurrentPageSearchNews,
  selectorIdActiveSection,
  selectorIsAdminMode,
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
  const isAdmin = useSelector(selectorIsAdminMode)

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

  const deleteNews = (newsId: number): void => {
    dispatch(deleteNewsTC(newsId))
  }

  return (
    <div className={style.container}>
      {isAdmin && (
        <div>
          <NavLinkComponent nameButton="создать секцию" path={Path.CREATE_SECTION} />
          <NavLinkComponent nameButton="создать новость" path={Path.CREATE_NEWS} />
        </div>
      )}
      <div className={style.body}>
        {news.map(newsItem => (
          <NewsPreview
            key={newsItem.id}
            data={newsItem}
            newsRouteHandle={newsRouteHandle}
            setCurrentNews={setCurrentNews}
            isAdmin={isAdmin}
            deleteNews={deleteNews}
          />
        ))}
      </div>
      <Pagination viewMode={viewMode} />
    </div>
  )
}
