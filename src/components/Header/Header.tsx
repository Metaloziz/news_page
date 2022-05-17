import { FC } from 'react'

import style from './Header.module.scss'

import image from 'assets/images/header.png'

export const Header: FC = () => (
  <div className={style.container}>
    <div className={style.text}>
      <h2>Новости из мира IT</h2>
      <h3>Мы собрали для тебя интересные новости IT-индустрии</h3>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem dolores eius
        enim est explicabo fugit illum in laborum libero magni necessitatibus possimus
        provident, quasi rerum, saepe vitae voluptate voluptatum.
      </div>
    </div>
    <img src={image} className={style.image} alt="header" />
  </div>
)
