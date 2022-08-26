import { FC } from 'react'

import style from './Header.module.scss'

import image from 'assets/images/mainPage/mainPageImage.svg'
import { LogoutButton } from 'components/commonComponents/LogoutButton/LogoutButton'
import { useElementWidth } from 'hooks'

export const Header: FC = () => {
  const MOBILE_WIDTH_PX = 500

  const [ref, isDesktopWidth] = useElementWidth(MOBILE_WIDTH_PX)

  const text = (
    <div className={style.text}>
      Выпуск нового в оборудования, учет рыночных тенденций и внимательное отношение к
      потребностям пользователей помогают нам разрабатывать новые продукты для более
      эффективного решения задач корпоративных клиентов. На смену устаревшей серии GTX10 и
      дефицитной...
    </div>
  )

  return (
    <>
      <div className={style.container} ref={ref}>
        <div className={style.preview}>
          <h1>Новости из мира IT</h1>
          <h3>Мы собрали для тебя интересные новости IT-индустрии</h3>
          {isDesktopWidth && text}
        </div>
        <img src={image} className={style.image} alt="header" />

        <LogoutButton />
      </div>
      <div className={style.mobileText}>{!isDesktopWidth && text}</div>
    </>
  )
}
