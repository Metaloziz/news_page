import style from './NewsContainer.module.scss'
import {News} from "./News/News";
import {useSelector} from "react-redux";
import {currentPageSelector, newsSelector} from "utils/selectors/selectors";
import {FC, useEffect} from "react";
import {getNewsTC} from "store/news_reducer";
import {useAppDispatch} from "store/store";


export const NewsContainer: FC = () => {

  const news = useSelector(newsSelector)
  const currentPage = useSelector(currentPageSelector)
  const dispatch = useAppDispatch()

  const currentNews = news[currentPage]

  useEffect(() => {
    dispatch(getNewsTC())
  }, [])

  return (
    <div className={style.container}>
      <News data={currentNews}/>
      {/*{news.map(({id, ...news}) => {*/}
      {/*  return <News key={id} data={news}/>*/}
      {/*})}*/}
    </div>
  );
};
