import { FC } from 'react'

import style from 'components/PopularNewsPreview/PopularNewsPreview.module.scss'
import { NewsType } from 'store/types'

type PopularNewsPreviewBodyPropsType = {
  setCurrentNews: (newsId: number) => void
  news: NewsType
}
export const PopularNewsPreviewBody: FC<PopularNewsPreviewBodyPropsType> = ({
  setCurrentNews,
  news,
}) => (
  <div
    tabIndex={0}
    role="button"
    className={style.news}
    onClick={() => setCurrentNews(news.id)}
  >
    <h4> {news.subtitle_1}</h4>
    <span>{news.full_text_1}</span>
    <div>Читать далее</div>
  </div>
)
