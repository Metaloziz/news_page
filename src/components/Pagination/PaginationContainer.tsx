export {}

// import {FC, memo, ReactElement} from 'react';
//
// import style from './Pagination.module.scss';
// import {useDispatch, useSelector} from "react-redux";
// import {
//   countNewsOnPageSelector,
//   currentPageSelector,
//   totalCountSelector
// } from "utils/selectors/selectors";
// import {setCurrentPageAC} from "store/mainPage_reducer";
//
//
// export const Pagination: FC = memo(
//   (): ReactElement => {
//
//
//     const dispatch = useDispatch()
//     const currentPage = useSelector(currentPageSelector)
//     const totalCountNews = useSelector(totalCountSelector)
//     const countNewsOnPage = useSelector(countNewsOnPageSelector)
//
//     const setCurrentPage = (page: number): void => {
//       dispatch(setCurrentPageAC(page))
//     }
//
//
//     return (<Buttons
//       setCurrentPage={setCurrentPage}
//       currentPage={currentPage}
//       pagesCount={countNewsOnPage}
//       totalCount={totalCountNews}
//     />)
//   },
// );