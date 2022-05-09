import style from "./News.module.scss";
import {FC, memo} from "react";
import {NewsType} from "api/data";

export type NewsPropsType = {
  data: NewsType
  setCurrentNews: (id: number) => void
}

export const News: FC<NewsPropsType> = memo(({
                                               data: {
                                                 id,
                                                 date,
                                                 image_1,
                                                 name,
                                                 fullText_1,
                                                 views
                                               }, setCurrentNews
                                             }) => {


    return (
      <div className={style.container} onClick={() => setCurrentNews(id)}>
        <div><img alt={'ava'} src={image_1}/>
        </div>
        <div className={style.body}>
          <div>{name}</div>
          <div>{fullText_1}</div>
          <div className={style.footer}>
            <div>views: {views}</div>
            <div>{date}</div>
          </div>
        </div>
      </div>
    );
  }
)