import React, { FC } from 'react'

import { useNavigate } from 'react-router-dom'

import { Button } from 'components/Button/Button'
import { Paths } from 'utils/enums'

export const MainPageNavigate: FC = () => {
  const navigate = useNavigate()

  const newsHandler = (): void => {
    navigate(`/${Paths.MAIN}`)
  }

  return <Button name="назад" onClick={newsHandler} />
}
