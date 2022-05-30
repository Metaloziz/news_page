import { FC } from 'react'

import style from './Header.module.scss'

import image from 'assets/images/mainPage/mainPageImage.svg'

export const Header: FC = () => (
  <div className={style.container}>
    <div className={style.preview}>
      <h1>Новости из мира IT</h1>
      <h3>Мы собрали для тебя интересные новости IT-индустрии</h3>{' '}
      <div className={style.text}>
        Выпуск нового в оборудования, учет рыночных тенденций и внимательное отношение к
        потребностям пользователей помогают нам разрабатывать новые продукты для более
        эффективного решения задач корпоративных клиентов. На смену устаревшей серии GTX10
        и дефицитной...
      </div>
    </div>
    <img src={image} className={style.image} alt="header" />
  </div>
)
