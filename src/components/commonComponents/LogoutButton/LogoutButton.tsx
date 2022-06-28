import { FC } from 'react'

import { useSelector } from 'react-redux'

import { Button } from 'components/commonComponents/Button'
import { selectIsLogin } from 'store/selectors/login'
import { useAppDispatch } from 'store/store'
import { postLogoutTC } from 'store/thunks/login_thunks'

export const LogoutButton: FC = () => {
  const dispatch = useAppDispatch()

  const isAdmin = useSelector(selectIsLogin)

  const logout = (): void => {
    dispatch(postLogoutTC())
  }

  return isAdmin ? (
    <div>
      <Button name="выйти из режима менеджера" onClick={logout} />
    </div>
  ) : null
}
