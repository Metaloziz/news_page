import React, { FC } from 'react'

import { useSelector } from 'react-redux'

import style from './Contacts.module.scss'

import { selectContacts } from 'store/selectors'

export const Contacts: FC = () => {
  const contacts = useSelector(selectContacts)
  return (
    <div className={style.container}>
      <div>
        <h5>Адрес:</h5> <span>{contacts.address}</span>
      </div>
      <span>Мы всегда онлайн и ждём твоё сообщение</span>
      <div className={style.links}>
        <a href={contacts.socialTG} target="_blank" rel="noreferrer">
          telegram
        </a>
        <a href={contacts.socialVK} target="_blank" rel="noreferrer">
          VK
        </a>
        <a href={contacts.socialFacebook} target="_blank" rel="noreferrer">
          Facebook
        </a>
        <a href={contacts.socialTikTok} target="_blank" rel="noreferrer">
          TickTook
        </a>
        <a href={contacts.socialInstagram} target="_blank" rel="noreferrer">
          Instagram
        </a>
      </div>
      <span>Или звоните:</span>
      <div>{contacts.number_phone}</div>
      <div className={style.footer}> © ITEC, 2022</div>
    </div>
  )
}
