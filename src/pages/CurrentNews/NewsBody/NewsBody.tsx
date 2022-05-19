import { FC } from 'react'

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
      <h3>{news.subtitle_1}</h3>
      <img alt="logo" src={news.image_1} />
      <div className={style.description}>{news.full_text_1}</div>
    </div>
    <div className={style.body}>
      <h3>{news.subtitle_2}</h3>
      <img alt="logo" src={news.image_2} />
      <div className={style.description}>{news.full_text_2}</div>
    </div>
    <div className={style.body}>
      <h3>{news.subtitle_3}</h3>
      <img alt="logo" src={news.image_3} />
      <div className={style.description}>{news.full_text_3}</div>
    </div>
  </div>
)
