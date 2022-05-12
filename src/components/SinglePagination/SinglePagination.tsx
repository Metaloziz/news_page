import { FC } from 'react'

import { useSelector } from 'react-redux'

import { Button } from 'components/Button/Button'
import { FIRST_PAGE_PAGINATION, NEWS_ON_PAGE } from 'constants/constants'
import {
  setNextPageAC,
  setPreviousPageAC,
} from 'store/reducers/single_pagination_reducer'
import { selectorNews } from 'store/selectors/news'
import { selectorNumberPage } from 'store/selectors/singlePagination'
import { useAppDispatch } from 'store/store'

export const SinglePagination: FC = () => {
  const dispatch = useAppDispatch()

  const news = useSelector(selectorNews)
  const pageNumber = useSelector(selectorNumberPage)

  const setPreviousPage = (): void => {
    dispatch(setPreviousPageAC())
  }
  const setNextPage = (): void => {
    dispatch(setNextPageAC())
  }

  return (
    <div>
      <Button
        name="<<"
        onClick={setPreviousPage}
        disabled={pageNumber === FIRST_PAGE_PAGINATION}
      />
      <h3>page number: {pageNumber}</h3>
      <Button name=">>" onClick={setNextPage} disabled={news.length < NEWS_ON_PAGE} />
    </div>
  )
}
