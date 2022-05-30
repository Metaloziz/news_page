import { FC, memo } from 'react'

import style from './NewsPreview.module.scss'

import eye from 'assets/images/common/eye.svg'
import { DeleteButton } from 'components/commonComponents'
import { NewsType } from 'store/types'
import { convertDateView } from 'utils'

type NewsPropsType = {
  data: NewsType
  setCurrentNews: (id: number) => void
  newsRouteHandle: () => void
  deleteNews: (id: number) => void
  isAdmin: boolean
}

export const NewsPreview: FC<NewsPropsType> = memo(
  ({
    data: { id, date, image_1: image, name, full_text_1: fullText, views },
    setCurrentNews,
    newsRouteHandle,
    deleteNews,
    isAdmin,
  }) => {
    const openCurrentNews = (): void => {
      setCurrentNews(id)
      newsRouteHandle()
    }

    return (
      <div className={style.container}>
        {isAdmin && <DeleteButton onClick={() => deleteNews(id)} />}
        <div role="button" tabIndex={-1} className={style.body} onClick={openCurrentNews}>
          <div>
            <img alt="ava" src={image} />
          </div>
          <div className={style.description}>
            <div className={style.date_and_view}>
              <span>{convertDateView(date)}</span>
              <div className={style.eye}>
                <img alt="eye" src={eye} />
                <span>{views}</span>
              </div>
            </div>
            <h3>{name}</h3>
            <div className={style.text}>{fullText}</div>
          </div>
          <span className={style.footerText}>Читать далее</span>
        </div>
      </div>
    )
  },
)
