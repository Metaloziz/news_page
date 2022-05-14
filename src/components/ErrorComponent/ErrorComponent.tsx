import { FC, useEffect } from 'react'

import { useSelector } from 'react-redux'

import style from './ErrorComponent.module.scss'

import { DeBounceTimer } from 'enums/enums'
import { setErrorFalseAC } from 'store/reducers/app_reducer'
import { selectorErrorMessage, selectorIsError } from 'store/selectors/app'
import { useAppDispatch } from 'store/store'
import { useDebounce } from 'utils/useDebounce'

export const ErrorComponent: FC = () => {
  const dispatch = useAppDispatch()

  const isError = useSelector(selectorIsError)
  const errorMessage = useSelector(selectorErrorMessage)

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
