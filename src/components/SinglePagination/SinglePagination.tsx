import { FC } from 'react'

import { useSelector } from 'react-redux'

import { Button } from 'components/Button/Button'
import { FIRST_PAGE_PAGINATION } from 'constants/constants'
import {
  setNextPageAC,
  setPreviousPageAC,
} from 'store/reducers/single_pagination_reducer'
import { selectorCountPage, selectorNumberPage } from 'store/selectors/singlePagination'
import { useAppDispatch } from 'store/store'

export const SinglePagination: FC = () => {
  const dispatch = useAppDispatch()

  const pagesCount = useSelector(selectorCountPage)
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
      <Button name=">>" onClick={setNextPage} disabled={pageNumber === pagesCount} />
    </div>
  )
}
