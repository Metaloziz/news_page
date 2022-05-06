import style from './MainPage.module.scss'
import {Navigation} from "components/Navigation/Navigation";
import {NewsContainer} from "components/NewsContainer/NewsContainer";
import {Pagination} from "components/Pagination/Pagination";
import {useSelector} from "react-redux";
import {currentPageSelector} from "utils/selectors/selectors";
import {FC} from "react";


export const MainPage: FC = () => {

  const currentPage = useSelector(currentPageSelector)

  const setCurrentPage = (page: number): void => {
    // dispatch(setCurrentPage(page))
  }

  const totalCount = 100
  const pagesCount = 4

  return (
    <div className={style.container}>
      <div className={style.header}>НОВОСТИ - текст</div>
      <Navigation/>
      <NewsContainer/>
      <Pagination totalCount={totalCount}
                  pagesCount={pagesCount}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
      />
      <div>Footer</div>
    </div>
  )
}