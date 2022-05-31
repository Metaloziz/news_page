import { FC } from 'react'

import { useSelector } from 'react-redux'

import style from './Contacts.module.scss'

import facebook from 'assets/images/socialNetworkIcons/facebook.png'
import instagram from 'assets/images/socialNetworkIcons/instagram.png'
import skype from 'assets/images/socialNetworkIcons/skype.png'
import telegram from 'assets/images/socialNetworkIcons/telegram.png'
import tikTok from 'assets/images/socialNetworkIcons/tiktok.png'
import viber from 'assets/images/socialNetworkIcons/viber.png'
import vk from 'assets/images/socialNetworkIcons/vk.png'
import { Link } from 'components/Contacts/Link/Link'
import { selectContacts } from 'store/selectors'

export const Contacts: FC = () => {
  const {
    socialVK,
    socialTG,
    socialFacebook,
    socialViber,
    socialSkype,
    socialInstagram,
    socialTikTok,
    address,
    number_phone: phone,
  } = useSelector(selectContacts)

  return (
    <div className={style.container}>
      <div>
        <h5>Адрес:</h5> <span>{address}</span>
      </div>
      <span>Мы всегда онлайн и ждём твоё сообщение</span>

      <div className={style.links}>
        <Link href={socialTG} src={telegram} />
        <Link href={socialVK} src={vk} />
        <Link href={socialFacebook} src={facebook} />
        <Link href={socialTikTok} src={tikTok} />
        <Link href={socialInstagram} src={instagram} />
        <Link href={socialSkype} src={skype} />
        <Link href={socialViber} src={viber} />
      </div>
      <span>Или звоните:</span>
      <div className={style.phone}>{phone}</div>
      <div className={style.footer}> © ITEC, 2022</div>
    </div>
  )
}
