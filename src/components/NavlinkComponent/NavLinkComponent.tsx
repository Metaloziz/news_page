import React, { FC } from 'react'

import { useNavigate } from 'react-router-dom'

import { Button } from 'components/Button/Button'

type NavLinkComponentPropsType = {
  nameButton: string
  path: string
}

export const NavLinkComponent: FC<NavLinkComponentPropsType> = ({ nameButton, path }) => {
  const navigate = useNavigate()

  const pageRouteHandler = (): void => {
    navigate(`/${path}`)
  }

  return <Button name={nameButton} onClick={pageRouteHandler} />
}
