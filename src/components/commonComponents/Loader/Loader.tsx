import { FC } from 'react'

import { useSelector } from 'react-redux'

import style from './Loader.module.scss'

import { selectIsLoading } from 'store/selectors'

export const Loader: FC = () => {
  const isLoading = useSelector(selectIsLoading)

  return isLoading ? <div className={style.loader} /> : <div className={style.none} />
}
