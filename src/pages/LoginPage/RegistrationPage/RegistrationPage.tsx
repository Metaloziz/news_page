import { FC } from 'react'

import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { Button } from 'components'
import { PASSWORD_VALIDATE_REG_EXP } from 'constants/constants'
import { Path } from 'enums'
import style from 'pages/LoginPage/LoginPage.module.scss'
import { NewUserDataRegistrationType } from 'store/types/new_user_data_registration_type'

export const RegistrationPage: FC = () => {
  const navigate = useNavigate()

  const navigateLoginPage = (): void => {
    navigate(Path.LOGIN)
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewUserDataRegistrationType>()

  const onSubmit: SubmitHandler<NewUserDataRegistrationType> = userData => {
    console.log(userData)
  }

  const passwordRegExp = new RegExp(PASSWORD_VALIDATE_REG_EXP)

  return (
    <div className={style.container}>
      <div className={style.block}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>LOGIN: </label>
            <input
              {...register('email', {
                required: { value: true, message: 'This field is required' },
              })}
              type="email"
            />
            {errors.email && <span className={style.error}>{errors.email.message}</span>}
          </div>
          <div>
            <label>PASSWORD: </label>
            <input
              {...register('newPassword', {
                required: {
                  value: true,
                  message: 'This field is required',
                },
                pattern: {
                  value: passwordRegExp,
                  message:
                    'пароль должен быть длинной от 8 до 15, содержать хотя бы одну цифру, заглавную, прописную букву и спецсимвол: !@#$%^&*()',
                },
              })}
              type="password"
            />
            {errors.newPassword && (
              <span className={style.error}>{errors.newPassword.message}</span>
            )}
          </div>
          <div>
            <label>REPEAT PASSWORD: </label>
            <input
              {...register('repeatNewPassword', {
                required: {
                  value: true,
                  message: 'This field is required',
                },
                pattern: {
                  value: passwordRegExp,
                  message:
                    'пароль должен быть длинной от 8 до 15, содержать хотя бы одну цифру, заглавную, прописную букву и спецсимвол: !@#$%^&*()',
                },
              })}
              type="password"
            />
            {errors.repeatNewPassword && (
              <span className={style.error}>{errors.repeatNewPassword.message}</span>
            )}
          </div>
          <div className={style.buttons}>
            <Button name="отправить" type="submit" />
            <Button name="обратно на страницу входа" onClick={navigateLoginPage} />
          </div>
        </form>
      </div>
    </div>
  )
}
