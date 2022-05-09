import style from './NewsContainer.module.scss'
import {News} from "./News/News";
import {useSelector} from "react-redux";
import {newsSelector, numberPageSelector} from "utils/selectors";
import {FC, useCallback, useEffect} from "react";
import {
  setCurrentNewsAC
} from "store/news_reducer";
import {useAppDispatch} from "store/store";
import {useNavigate} from "react-router-dom";
import {Paths} from "utils/enums";
import {Button} from "components/Button/Button";
import {
  addNewsViewsValueTC,
  getNewsPartTC,
  removeNewsTC
} from "store/thunks/news_thunks";


export const NewsContainer: FC = () => {

  const news = useSelector(newsSelector)
  const pageNumber = useSelector(numberPageSelector)
  const dispatch = useAppDispatch()
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getNewsPartTC(pageNumber))
  }, [dispatch, pageNumber])

  const setCurrentNews = useCallback((newsId: number) => {
    dispatch(setCurrentNewsAC(newsId))
    dispatch(addNewsViewsValueTC(newsId))
  }, [dispatch])

  const newsRouteHandle = () => {
    navigate(`/${Paths.CURRENT_NEWS}`);
  }

  const removeNews = (newsId: number) => {
    dispatch(removeNewsTC(newsId))
  }

  return (
    <div className={style.container}>
      {news.map((news) => {
        return <div key={news.id}>
          <Button name={'удалить'} onClick={() => removeNews(news.id)}/>
          <News
            data={news}
            newsRouteHandle={newsRouteHandle}
            setCurrentNews={setCurrentNews}/>
        </div>
      })}
    </div>
  );
};
