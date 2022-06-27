import { FC } from 'react'

import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

import { selectIsLogin } from 'store/selectors/login'

type ProtectedRoutePropsType = {
  redirectPath: string
}

export const ProtectedRoute: FC<ProtectedRoutePropsType> = ({ redirectPath }) => {
  const isAdmin = useSelector(selectIsLogin)

  if (!isAdmin) {
    return <Navigate to={redirectPath} />
  }

  return <Outlet />
}
