import style from "./News.module.scss";
import {FC} from "react";
import {NewsType} from "api/data";

type NewsPropsType = { data: Omit<NewsType, 'id'> }

export const News: FC<NewsPropsType> = ({
                                          data: {
                                            date,
                                            image_1,
                                            name,
                                            fullText_1,
                                            views
                                          }
                                        }) => {
  return (
    <div className={style.container}>
      <div><img alt={'ava'} src={image_1}/>
      </div>
      <div className={style.body}>
        <div>{name}</div>
        <div>{fullText_1}</div>
        <div className={style.footer}>
          <div>{views}</div>
          <div>{date}</div>
        </div>
      </div>
    </div>
  );
};
