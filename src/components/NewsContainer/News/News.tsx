import style from "./News.module.scss";
import {FC} from "react";
import {NewsType} from "../data";

type NewsPropsType = { data: Omit<NewsType, 'id'> }

export const News: FC<NewsPropsType> = ({
                                          data: {
                                            title,
                                            someNumber,
                                            description,
                                            date, imgAdress
                                          }
                                        }) => {
  return (
    <div className={style.container}>
      <div><img alt={'ava'}
                src={imgAdress}/>
      </div>
      <div className={style.body}>
        <div>{title}</div>
        <div>{description}</div>
        <div className={style.footer}>
          <div>{someNumber}</div>
          <div>{date}</div>
        </div>
      </div>
    </div>
  );
};
