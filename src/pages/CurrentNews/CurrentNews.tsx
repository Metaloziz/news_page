import { FC } from 'react'

import { useSelector } from 'react-redux'

import style from './CurrentNews.module.scss'

import { NavLinkComponent } from 'components/NavlinkComponent/NavLinkComponent'
import { Path } from 'enums/enums'
import { Comments } from 'pages/CurrentNews/Comments/Comments'
import { NewsPreview } from 'pages/CurrentNews/NewsPreview/NewsPreview'
import { selectorCurrentNews } from 'store/selectors/news'

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
