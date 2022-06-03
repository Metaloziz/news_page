import { FC, useEffect } from 'react'

import { useSelector } from 'react-redux'

import style from './ErrorComponent.module.scss'

import { DeBounceTimer } from 'enums'
import { useDebounce } from 'hooks'
import { setErrorFalseAC } from 'store/reducers'
import { selectErrorMessage, selectIsError } from 'store/selectors'
import { useAppDispatch } from 'store/store'

export const ErrorComponent: FC = () => {
  const dispatch = useAppDispatch()

  const isError = useSelector(selectIsError)
  const errorMessage = useSelector(selectErrorMessage)

  const closeError = (): void => {
    dispatch(setErrorFalseAC())
  }

  const debounce = useDebounce(closeError, DeBounceTimer.CLOSE_ERROR)

  useEffect(() => {
    if (isError) {
      debounce('')
    }
  }, [errorMessage])

  return (
    <div className={`${style.container} ${isError && style.active}`}>
      <span>{errorMessage}</span>
    </div>
  )
}
