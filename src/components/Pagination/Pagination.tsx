import {FC, ReactElement} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
  countNewsOnPageSelector,
  currentPageSelector,
  totalCountSelector
} from "utils/selectors";
import {Buttons} from "components/Pagination/Buttons";
import {setCurrentPageAC} from 'store/pagination_reducer';


export const Pagination: FC = (): ReactElement => {

  const dispatch = useDispatch()
  const currentPage = useSelector(currentPageSelector)
  const totalCountNews = useSelector(totalCountSelector)
  const countNewsOnPage = useSelector(countNewsOnPageSelector)

  const setCurrentPage = (page: number): void => {
    dispatch(setCurrentPageAC(page))
  }

  return (<Buttons
    setCurrentPage={setCurrentPage}
    currentPage={currentPage}
    pagesCount={countNewsOnPage}
    totalCount={totalCountNews}
  />)
}
