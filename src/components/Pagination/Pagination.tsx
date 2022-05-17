import { FC, ReactElement } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { Buttons } from './Buttons'

import { setCurrentPageAC } from 'store/reducers/pagination_reducer'
import {
  selectCountNewsOnPage,
  selectorCurrentPage,
  selectorTotalCount,
} from 'store/selectors/pagination'

export const Pagination: FC = (): ReactElement => {
  const dispatch = useDispatch()
  const currentPage = useSelector(selectorCurrentPage)
  const totalCountNews = useSelector(selectorTotalCount)
  const countNewsOnPage = useSelector(selectCountNewsOnPage)

  const setCurrentPage = (page: number): void => {
    dispatch(setCurrentPageAC(page))
  }

  return (
    <Buttons
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}
      pagesCount={countNewsOnPage}
      totalCount={totalCountNews}
    />
  )
}
