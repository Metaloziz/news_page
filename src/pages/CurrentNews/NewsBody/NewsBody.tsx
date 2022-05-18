import React, { FC } from 'react'

import style from './NewsBody.module.scss'

import { NewsType } from 'store/types'

type NewsBodyPropsType = {
  news: NewsType
}

export const NewsBody: FC<NewsBodyPropsType> = ({ news }) => (
  <div className={style.container}>
    <div className={style.date}>{news.date}</div>
    <h1>{news.name}</h1>
    <div className={style.body}>
      <img alt="logo" src={news.image_1} />
      <div className={style.description}>{news.subtitle_1}</div>
    </div>
  </div>
)
