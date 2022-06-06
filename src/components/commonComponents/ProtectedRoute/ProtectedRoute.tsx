import { FC, ReactElement } from 'react'

import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { Path } from 'enums'
import { selectIsAdminMode } from 'store/selectors'

type ProtectedRoutePropsType = {
  children: ReactElement
}

export const ProtectedRoute: FC<ProtectedRoutePropsType> = ({ children }) => {
  const isAdmin = useSelector(selectIsAdminMode)

  if (!isAdmin) {
    return <Navigate to={Path.MAIN} />
  }

  return children
}
