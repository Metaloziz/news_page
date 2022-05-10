import { FC } from 'react'

import { useSelector } from 'react-redux'

import { Button } from 'components/Button/Button'
import { setNextPageAC, setPreviousPageAC } from 'store/single_pagination_reducer'
import { useAppDispatch } from 'store/store'
import { NEWS_ON_PAGE } from 'utils/consts'
import { newsLengthSelector, numberPageSelector } from 'utils/selectors'

const FIRST_PAGE = 1

export const SinglePagination: FC = () => {
  const dispatch = useAppDispatch()
  const pageNumber = useSelector(numberPageSelector)
  const newsLength = useSelector(newsLengthSelector)

  const previousPageHandle = (): void => {
    dispatch(setPreviousPageAC())
  }
  const nextPageHandle = (): void => {
    dispatch(setNextPageAC())
  }

  return (
    <div>
      <Button
        name="<<"
        onClick={previousPageHandle}
        disabled={pageNumber === FIRST_PAGE}
      />
      <h3>page number: {pageNumber}</h3>
      <Button name=">>" onClick={nextPageHandle} disabled={newsLength < NEWS_ON_PAGE} />
    </div>
  )
}
