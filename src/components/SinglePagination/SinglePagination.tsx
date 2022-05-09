import React from 'react';
import {Button} from "components/Button/Button";
import {useAppDispatch} from "store/store";
import {useSelector} from "react-redux";
import {newsLengthSelector, numberPageSelector} from "utils/selectors";
import {setNextPageAC, setPreviousPageAC} from "store/single_pagination_reducer";
import {newsOnPage} from "utils/consts";

export const SinglePagination = () => {

  const dispatch = useAppDispatch()
  const pageNumber = useSelector(numberPageSelector)
  const newsLength = useSelector(newsLengthSelector)

  const previousPageHandle = () => {
    dispatch(setPreviousPageAC())
  }
  const nextPageHandle = () => {
    dispatch(setNextPageAC())
  }


  return (
    <div>
      <Button name={'<<'} onClick={previousPageHandle} disabled={pageNumber === 1}/>
      <h3>page number: {pageNumber}</h3>
      <Button name={'>>'} onClick={nextPageHandle}
              disabled={newsLength < newsOnPage}/>
    </div>
  );
};
