import React, { FC } from 'react'

import { useNavigate } from 'react-router-dom'

import { Button } from 'components/Button/Button'
import { Paths } from 'utils/enums'

export const CreatePageNavigate: FC = () => {
  const navigate = useNavigate()

  const newsHandler = (): void => {
    navigate(`/${Paths.CREATE_NEWS}`)
  }

  return <Button name="создать новость" onClick={newsHandler} />
}
