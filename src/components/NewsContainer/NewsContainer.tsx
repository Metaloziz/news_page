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
  selectCurrentPageSearchNews,
  selectIdActiveSection,
  selectIsAdminMode,
  selectNews,
  selectNewsTypeView,
  selectNumberPage,
  selectPartSearchNews,
} from 'store/selectors'
import { useAppDispatch } from 'store/store'
import { addNewsViewsValueTC, deleteNewsTC, getNewsPartTC } from 'store/thunks'

export const NewsContainer: FC = () => {
  const dispatch = useAppDispatch()

  const navigate = useNavigate()

  const viewMode = useSelector(selectNewsTypeView)

  const allNews =
    viewMode === NEWS_BY_SECTIONS
      ? useSelector(selectNews)
      : useSelector(selectPartSearchNews)

  const pageNumber = useSelector(selectNumberPage)
  const activeSection = useSelector(selectIdActiveSection)
  const pageNumberSearchNews = useSelector(selectCurrentPageSearchNews)
  const isAdmin = useSelector(selectIsAdminMode)

  useEffect(() => {
    dispatch(getNewsPartTC(pageNumber))
  }, [pageNumber, activeSection])

  useEffect(() => {
    dispatch(setPartSearchNewsAC())
  }, [pageNumberSearchNews])

  const setCurrentNews = useCallback(
    (newsId: number) => {
      const currentNews = allNews.find(({ id }) => id === newsId)

      if (currentNews) {
        dispatch(setCurrentNewsAC(currentNews))
      }

      dispatch(addNewsViewsValueTC(newsId))
    },
    [dispatch, allNews],
  )

  const newsRouteHandle = useCallback((): void => {
    navigate(`/${Path.CURRENT_NEWS}`)
  }, [])

  const deleteNews = useCallback((newsId: number): void => {
    dispatch(deleteNewsTC(newsId))
  }, [])

  const allNewsTags = allNews.map(newsItem => (
    <NewsPreview
      key={newsItem.id}
      data={newsItem}
      newsRouteHandle={newsRouteHandle}
      setCurrentNews={setCurrentNews}
      isAdmin={isAdmin}
      deleteNews={deleteNews}
    />
  ))

  return (
    <div className={style.container}>
      {isAdmin && (
        <div>
          <NavLinkComponent nameButton="создать секцию" path={Path.CREATE_SECTION} />
          <NavLinkComponent nameButton="создать новость" path={Path.CREATE_NEWS} />
        </div>
      )}
      <div className={style.body}>{allNewsTags}</div>
      <Pagination viewMode={viewMode} />
    </div>
  )
}
