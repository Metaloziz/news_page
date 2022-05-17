import { FC } from 'react'

import { useSelector } from 'react-redux'

import { Comments } from './Comments/Comments'
import style from './CurrentNews.module.scss'
import { NewsPreview } from './NewsPreview/NewsPreview'

import { NavLinkComponent } from 'components'
import { Path } from 'enums/enums'
import { selectorCurrentNews } from 'store/selectors'

export const CurrentNews: FC = () => {
  const news = useSelector(selectorCurrentNews)

  return (
    <div className={style.container}>
      <div>{`HOME -------------> Новости -------------> ${news.name}`}</div>
      <NavLinkComponent nameButton="на главную" path={Path.MAIN} />
      <img alt="logo" src={news.image_1} />
      <h3>{news.name}</h3>
      <div>{`количество просмотров: ${news.views}`}</div>
      <div>{`дата публикации: ${news.date}`}</div>
      <div className={style.description}>{news.fullText_1}</div>
      <div>
        <h4>Больше интересных новостей:</h4>
        <NewsPreview />
        <NewsPreview />
      </div>
      <Comments newsId={news.id} />
    </div>
  )
}
