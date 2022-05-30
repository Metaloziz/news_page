import { FC } from 'react'

import { useSelector } from 'react-redux'

import arrow from 'assets/images/common/arrow.svg'
import { Button } from 'components/Button/Button'
import style from 'components/SinglePaginationSectionNews/SinglePaginationSectionNews.module.scss'
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
