import React, { FC } from 'react'

import { useSelector } from 'react-redux'

import { selectContacts } from 'store/selectors'

export const Contacts: FC = () => {
  const contacts = useSelector(selectContacts)

  return (
    <div>
      <div>{contacts.socialVK}</div>
      <div>{contacts.socialViber}</div>
      <div>{contacts.socialTikTok}</div>
      <div>{contacts.socialTG}</div>
      <div>{contacts.socialSkype}</div>
      <div>{contacts.number_phone}</div>
      <div>{contacts.address}</div>
      <div>{contacts.socialInstagram}</div>
      <div>{contacts.socialFacebook}</div>
    </div>
  )
}
