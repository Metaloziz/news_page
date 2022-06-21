import { FC } from 'react'

import style from './NewsBody.module.scss'

import { NavLinkComponent } from 'components'
import { Path } from 'enums'
import { NewsBodyPropsType } from 'store/types/news_body_props_type'
import { convertDateView } from 'utils'
import { imageUrlHandle } from 'utils/image_url_handle'

export const NewsBody: FC<NewsBodyPropsType> = ({
  news: {
    date,
    name,
    subtitle_1: subtitle1,
    image_1: image1,
    full_text_1: fullText1,
    full_text_3: fullText3,
    subtitle_2: subtitle2,
    full_text_2: fullText2,
    image_2: image2,
    image_3: image3,
    subtitle_3: subtitle3,
  },
  isAdmin,
}) => (
  <div className={style.container}>
    <div className={style.header}>
      <div className={style.date}>{convertDateView(date)}</div>

      <div>
        <h1>{name}</h1>
        {isAdmin && (
          <NavLinkComponent nameButton="редактировать" path={Path.CHANGE_NEWS} />
        )}
      </div>
    </div>
    <div className={style.body}>
      <img alt="logo" src={imageUrlHandle(image1)} />
      <h3>{subtitle1}</h3>
      <div className={style.description}>{fullText1}</div>
    </div>
    <div className={style.body}>
      <h3>{subtitle2}</h3>
      {image2 && <img alt="logo" src={imageUrlHandle(image2)} />}
      <div className={style.description}>{fullText2}</div>
    </div>
    <div className={style.body}>
      <h3>{subtitle3}</h3>
      {image3 && <img alt="logo" src={imageUrlHandle(image3)} />}
      <div className={style.description}>{fullText3}</div>
    </div>
  </div>
)
