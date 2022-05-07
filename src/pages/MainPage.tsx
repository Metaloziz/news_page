import style from './MainPage.module.scss'
import {Navigation} from "components/Navigation/Navigation";
import {NewsContainer} from "components/NewsContainer/NewsContainer";
import {Pagination} from "components/Pagination/Pagination";
import {FC} from "react";
import {Footer} from "components/Footer/Footer";


export const MainPage: FC = () => {

  return (
    <div className={style.container}>
      <div className={style.header}>НОВОСТИ - текст</div>
      <Navigation/>
      <NewsContainer/>
      <Pagination/>
      <Footer/>
    </div>
  )
}