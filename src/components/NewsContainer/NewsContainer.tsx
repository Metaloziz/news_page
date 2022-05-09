import style from './NewsContainer.module.scss'
import {News} from "./News/News";
import {useSelector} from "react-redux";
import {newsSelector, numberPageSelector} from "utils/selectors/selectors";
import {FC, useCallback, useEffect} from "react";
import {getNewsPartTC, setCurrentNewsAC} from "store/news_reducer";
import {useAppDispatch} from "store/store";
import {useNavigate} from "react-router-dom";
import {Paths} from "utils/enums/enums";


export const NewsContainer: FC = () => {

  const news = useSelector(newsSelector)
  const pageNumber = useSelector(numberPageSelector)
  const dispatch = useAppDispatch()
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getNewsPartTC(pageNumber))
  }, [dispatch, pageNumber])

  const setCurrentNews = useCallback((id: number) => {
    dispatch(setCurrentNewsAC(id))
  }, [dispatch])

  const newsHandler = () => {
    navigate(`/${Paths.CURRENT_NEWS}`);
  }


  return (
    <div className={style.container} onClick={newsHandler}>
      {news.map((news) => {
        return <News key={news.id} data={news} setCurrentNews={setCurrentNews}/>
      })}
    </div>
  );
};
