import { FC } from 'react'

import { useSelector } from 'react-redux'

import style from './SinglePaginationSectionNews.module.scss'

import arrow from 'assets/images/common/arrow.svg'
import { Button } from 'components/Button/Button'
import { FIRST_PAGE_PAGINATION } from 'constants/constants'
import {
  setNextPageAC,
  setPreviousPageAC,
} from 'store/reducers/single_pagination_reducer'
import { selectCountPage, selectNumberPage } from 'store/selectors/singlePagination'
import { useAppDispatch } from 'store/store'

export const SinglePaginationSectionNews: FC = () => {
  const dispatch = useAppDispatch()

  const pagesCount = useSelector(selectCountPage)
  const pageNumber = useSelector(selectNumberPage)

  const setPreviousPage = (): void => {
    dispatch(setPreviousPageAC())
  }
  const setNextPage = (): void => {
    dispatch(setNextPageAC())
  }

  return (
    <div className={style.container}>
      <Button
        name=""
        onClick={setPreviousPage}
        disabled={pageNumber === FIRST_PAGE_PAGINATION}
        className={style.leftButton}
      >
        <img alt="" src={arrow} />
      </Button>
      <h4>
        {pageNumber} / {pagesCount}
      </h4>
      <Button
        name=""
        onClick={setNextPage}
        disabled={pageNumber === pagesCount}
        className={style.rightButton}
      >
        <img alt="" src={arrow} />
      </Button>
    </div>
  )
}
