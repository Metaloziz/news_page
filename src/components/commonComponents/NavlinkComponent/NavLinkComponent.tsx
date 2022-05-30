import { FC } from 'react'

import { useNavigate } from 'react-router-dom'

import { Button } from 'components/commonComponents'

type NavLinkComponentPropsType = {
  nameButton: string
  path: string
}

export const NavLinkComponent: FC<NavLinkComponentPropsType> = ({ nameButton, path }) => {
  const navigate = useNavigate()

  const onNavigateButtonClick = (): void => {
    navigate(path)
  }

  return <Button name={nameButton} onClick={onNavigateButtonClick} />
}
