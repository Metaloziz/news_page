import { FC } from 'react'

import { useSelector } from 'react-redux'

import { Button } from 'components/Button/Button'
import { FIRST_PAGE_PAGINATION } from 'constants/constants'
import {
  setNextPageSearchNewsAC,
  setPreviewPageSearchNewsAC,
} from 'store/reducers/search_news_reducer'
import {
  selectCountPageSearchNews,
  selectCurrentPageSearchNews,
} from 'store/selectors/searchNews'
import { useAppDispatch } from 'store/store'

export const SinglePaginationSearchNews: FC = () => {
  const dispatch = useAppDispatch()

  const pagesCount = useSelector(selectCountPageSearchNews)
  const pageNumber = useSelector(selectCurrentPageSearchNews)

  const setPreviousPage = (): void => {
    dispatch(setPreviewPageSearchNewsAC())
  }
  const setNextPage = (): void => {
    dispatch(setNextPageSearchNewsAC())
  }

  return (
    <div>
      <Button
        name="<<"
        onClick={setPreviousPage}
        disabled={pageNumber === FIRST_PAGE_PAGINATION}
      />
      <h3>page number Search news: {pageNumber}</h3>
      <Button name=">>" onClick={setNextPage} disabled={pageNumber === pagesCount} />
    </div>
  )
}
