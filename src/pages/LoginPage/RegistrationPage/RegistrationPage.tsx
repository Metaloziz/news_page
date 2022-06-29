import { FC } from 'react'

import { useSelector } from 'react-redux'

import { Form } from 'pages/LoginPage/Form/Form'
import style from 'pages/LoginPage/LoginPage.module.scss'
import { selectIsRegistered } from 'store/selectors/login'
import { registrationUserTC } from 'store/thunks/login_thunks'

const RegistrationPage: FC = () => {
  const isRegistered = useSelector(selectIsRegistered)

  return (
    <div className={style.container}>
      <h1>Регистрация</h1>
      <Form isSuccessSubmit={isRegistered} sendData={registrationUserTC} mode="create" />
    </div>
  )
}

export default RegistrationPage
