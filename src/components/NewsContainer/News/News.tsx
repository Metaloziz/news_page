/* eslint-disable */
import { FC, memo } from 'react'

import style from './News.module.scss'
import { NewsType } from 'store/types'
import { DeleteButton } from 'components/DeleteButton/DeleteButton'

type NewsPropsType = {
  data: NewsType
  setCurrentNews: (id: number) => void
  newsRouteHandle: () => void
  deleteNews: (id: number) => void
  isAdmin: boolean
}

export const News: FC<NewsPropsType> = memo(
  ({
     data: { id, date, image_1, name, fullText_1, views, section, subtitle_1 },
     setCurrentNews,
     newsRouteHandle, deleteNews, isAdmin,
   }) => {

    const openCurrentNews = (): void => {
      setCurrentNews(id)
      newsRouteHandle()
    }

    return (
      <div className={style.container}>
        {isAdmin && <DeleteButton onClick={() => deleteNews(id)} />}
        <div className={style.body} onClick={openCurrentNews}>
          <div>
            <img alt='ava' src={image_1} />
          </div>
          <div className={style.description}>
            <div className={style.date_and_view}>
              <div>{date}</div>
              <div>просмотров: {views}</div>
            </div>
            <h3>{name}</h3>
            <div className={style.text}>{subtitle_1}</div>
          </div>
          <span>Читать далее</span>
        </div>
      </div>
    )
  },
)
