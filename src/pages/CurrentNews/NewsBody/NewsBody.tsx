import { FC } from 'react'

import style from './NewsBody.module.scss'

import { Button } from 'components'
import { NewsType } from 'store/types'

type NewsBodyPropsType = {
  news: NewsType
  isAdmin: boolean
}

export const NewsBody: FC<NewsBodyPropsType> = ({ news, isAdmin }) => (
  <div className={style.container}>
    <div className={style.header}>
      <div>
        <div className={style.date}>{news.date}</div>
        {isAdmin && <Button name="change" />}
      </div>
      <h1>{news.name}</h1>
    </div>
    <div className={style.body}>
      <h3>{news.subtitle_1}</h3>
      <img alt="logo" src={news.image_1} />
      <div className={style.description}>{news.full_text_1}</div>
    </div>
    <div className={style.body}>
      <h3>{news.subtitle_2}</h3>
      {news.image_2 && <img alt="logo" src={news.image_2} />}
      <div className={style.description}>{news.full_text_2}</div>
    </div>
    <div className={style.body}>
      <h3>{news.subtitle_3}</h3>
      {news.image_3 && <img alt="logo" src={news.image_3} />}
      <div className={style.description}>{news.full_text_3}</div>
    </div>
  </div>
)
