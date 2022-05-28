/* eslint-disable */
import { FC, memo } from "react";

import style from "./NewsPreview.module.scss";
import { NewsType } from "store/types";
import { DeleteButton } from "components/DeleteButton/DeleteButton";
import eye from "assets/images/common/eye.svg";
import { convertDateView } from "utils/utils";

type NewsPropsType = {
  data: NewsType
  setCurrentNews: (id: number) => void
  newsRouteHandle: () => void
  deleteNews: (id: number) => void
  isAdmin: boolean
}

export const NewsPreview: FC<NewsPropsType> = memo(
  ({
     data: { id, date, image_1, name, full_text_1, views },
     setCurrentNews,
     newsRouteHandle, deleteNews, isAdmin
   }) => {

    const openCurrentNews = (): void => {
      setCurrentNews(id);
      newsRouteHandle();
    };

    return (
      <div className={style.container}>
        {isAdmin && <DeleteButton onClick={() => deleteNews(id)} />}
        <div className={style.body} onClick={openCurrentNews}>
          <div>
            <img alt="ava" src={image_1} />
          </div>
          <div className={style.description}>
            <div className={style.date_and_view}>
              <span>{convertDateView(date)}</span>
              <div className={style.eye}>
                <img alt={"eye"} src={eye} />
                <span>{views}</span>
              </div>
            </div>
            <h3>{name}</h3>
            <div className={style.text}>{full_text_1}</div>
          </div>
          <span className={style.footerText}>Читать далее</span>
        </div>
      </div>
    );
  }
);
