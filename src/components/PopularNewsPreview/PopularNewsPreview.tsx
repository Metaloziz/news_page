import { FC } from 'react'

import style from './PopularNewsPreview.module.scss'
import { PopularNewsPreviewBody } from './PopularNewsPreviewBody/PopularNewsPreviewBody'

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
      <PopularNewsPreviewBody key={item.id} setCurrentNews={setCurrentNews} news={item} />
    ))}
  </div>
)
