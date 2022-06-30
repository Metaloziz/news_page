import { FC } from 'react'

import { Form } from 'pages/LoginPage/Form/Form'
import style from 'pages/LoginPage/LoginPage.module.scss'
import { registrationUserTC } from 'store/thunks/login_thunks'

export const EditPasswordPage: FC = () => {
  const isSuccessEditPassword = false

  return (
    <div className={style.container}>
      <h1>Смена пароля</h1>
      <Form
        isSuccessSubmit={isSuccessEditPassword}
        sendData={registrationUserTC}
        mode="edit"
      />
    </div>
  )
}
