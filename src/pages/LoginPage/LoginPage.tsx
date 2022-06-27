import { FC } from 'react'

import { SubmitHandler, useForm } from 'react-hook-form'

import style from './LoginPage.module.scss'

import { Button } from 'components'
import { PASSWORD_VALIDATE_REG_EXP } from 'constants/constants'
import { useAppDispatch } from 'store/store'
import { postLoginTC } from 'store/thunks/login_thunks'
import { UserDataType } from 'store/types/user_data_type'

const LoginPage: FC = () => {
  const dispatch = useAppDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserDataType>()

  const onSubmit: SubmitHandler<UserDataType> = userData => {
    dispatch(postLoginTC(userData))
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
              defaultValue="AndrewGaity@yandex.by"
            />
            {errors.email && <span className={style.error}>{errors.email.message}</span>}
          </div>
          <div>
            <label>PASSWORD: </label>
            <input
              {...register('password', {
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
            {errors.password && (
              <span className={style.error}>{errors.password.message}</span>
            )}
          </div>
          <Button name="отправить" type="submit" />
        </form>
        <Button name="forgot password ?" />
      </div>
    </div>
  )
}

export default LoginPage
