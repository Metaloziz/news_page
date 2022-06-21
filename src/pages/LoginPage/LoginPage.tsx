import { FC } from 'react'

import { SubmitHandler, useForm } from 'react-hook-form'

import style from './LoginPage.module.scss'

import { Button } from 'components'

type LoginType = {
  login: string
  password: string
}

export const LoginPage: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>()

  const onSubmit: SubmitHandler<LoginType> = data => {
    console.log(data)
  }

  return (
    <div className={style.container}>
      <div className={style.block}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>LOGIN: </label>
            <input
              {...register('login', {
                required: { value: true, message: 'This field is required' },
              })}
            />
            {errors.login && <span className={style.error}>This field is required</span>}
          </div>
          <div>
            <label>PASSWORD: </label>
            <input
              {...register('password', {
                required: { value: true, message: 'This field is required' },
              })}
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
