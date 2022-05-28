/* eslint-disable */
import { FC } from "react";

import style from "./NewsBody.module.scss";

import { NavLinkComponent } from "components";
import { NewsType } from "store/types";
import { convertDateView } from "utils/utils";
import { Path } from "enums/enums";

type NewsBodyPropsType = {
  news: NewsType
  isAdmin: boolean
}

export const NewsBody: FC<NewsBodyPropsType> = ({
                                                  news: {
                                                    date,
                                                    name,
                                                    subtitle_1,
                                                    image_1,
                                                    full_text_1,
                                                    full_text_3,
                                                    subtitle_2,
                                                    full_text_2,
                                                    image_2,
                                                    image_3,
                                                    subtitle_3
                                                  },
                                                  isAdmin
                                                }) => (
  <div className={style.container}>
    <div className={style.header}>
      <div className={style.date}>{convertDateView(date)}</div>

      <div><h1>{name}</h1>  {isAdmin &&
        <NavLinkComponent nameButton="редактировать" path={Path.CHANGE_NEWS} />}</div>
    </div>
    <div className={style.body}>
      <img alt="logo" src={image_1} />
      <h3>{subtitle_1}</h3>
      <div className={style.description}>{full_text_1}</div>
    </div>
    <div className={style.body}>
      <h3>{subtitle_2}</h3>
      {image_2 && <img alt="logo" src={image_2} />}
      <div className={style.description}>{full_text_2}</div>
    </div>
    <div className={style.body}>
      <h3>{subtitle_3}</h3>
      {image_3 && <img alt="logo" src={image_3} />}
      <div className={style.description}>{full_text_3}</div>
    </div>
  </div>
);
