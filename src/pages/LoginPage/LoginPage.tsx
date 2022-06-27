import { FC } from 'react'

import { SubmitHandler, useForm } from 'react-hook-form'

import style from './LoginPage.module.scss'

import { Button } from 'components'
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
              defaultValue="AndrewGaity@yandex.by"
            />
            {errors.email && <span className={style.error}>This field is required</span>}
          </div>
          <div>
            <label>PASSWORD: </label>
            <input
              {...register('password', {
                required: { value: true, message: 'This field is required' },
              })}
              defaultValue="12345678Aa%"
            />
            {errors.password && (
              <span className={style.error}>This field is required</span>
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
