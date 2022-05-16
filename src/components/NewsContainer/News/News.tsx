/* eslint-disable */
import { FC, memo } from 'react'

import style from './News.module.scss'

import {NewsType} from "store/types/news_type";

type NewsPropsType = {
  data: NewsType
  setCurrentNews: (id: number) => void
  newsRouteHandle: () => void
}

export const News: FC<NewsPropsType> = memo(
  ({
    data: { id, date, image_1, name, fullText_1, views, section },
    setCurrentNews,
    newsRouteHandle,
  }) => {

    const openCurrentNews = (): void => {
      setCurrentNews(id)
      newsRouteHandle()
    }

    return (
      <div className={style.container} onClick={openCurrentNews}>
        <div>
          <img alt="ava" src={image_1} />
        </div>
        <div className={style.body}>
          <div>{name}</div>
          <div>{fullText_1}</div>
          <div className={style.footer}>
            <div>views: {views}</div>
            <div>{date}</div>
          </div>
          <h4>section: {section}</h4>
        </div>
      </div>
    )
  },
)
