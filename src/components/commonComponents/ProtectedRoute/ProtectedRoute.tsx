import { FC } from 'react'

import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

import { selectIsAdminMode } from 'store/selectors'

type ProtectedRoutePropsType = {
  redirectPath: string
}

export const ProtectedRoute: FC<ProtectedRoutePropsType> = ({ redirectPath }) => {
  const isAdmin = useSelector(selectIsAdminMode)

  if (!isAdmin) {
    return <Navigate to={redirectPath} />
  }

  return <Outlet />
}
