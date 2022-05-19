import { FC } from 'react'

import style from './PopularNewsPreview.module.scss'

import { NewsType } from 'store/types'

type PopularNewsPreviewPropsType = {
  setCurrentNews: (newsId: number) => void
  news: NewsType[]
}

export const PopularNewsPreview: FC<PopularNewsPreviewPropsType> = ({
  news,
  setCurrentNews,
}) => (
  <div className={style.container}>
    <h3>Популярные статьи</h3>
    {news.map(item => (
      <div
        tabIndex={0}
        role="button"
        key={item.id}
        className={style.news}
        onClick={() => setCurrentNews(item.id)}
      >
        <h4> {item.subtitle_1}</h4>
        <span>{item.full_text_1}</span>
        <div>Читать далее</div>
      </div>
    ))}
  </div>
)
