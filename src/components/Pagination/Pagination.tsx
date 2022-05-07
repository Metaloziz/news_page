import {FC, ReactElement} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
  countNewsOnPageSelector,
  currentPageSelector,
  totalCountSelector
} from "utils/selectors/selectors";
import {setCurrentPageAC} from "store/mainPage_reducer";
import {Buttons} from "components/Pagination/Buttons";


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
