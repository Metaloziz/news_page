import { instanceLogin } from 'api/instance'
import { RequestLogin } from 'enums/enums'
import { UserDataRegistrationType } from 'store/types/new_user_data_registration_type'
import { UserDataType } from 'store/types/user_data_type'

export const loginRequests = {
  login: (userData: UserDataType) => instanceLogin.post(RequestLogin.LOGIN, userData),

  logout: (token: string) =>
    instanceLogin.post(RequestLogin.LOGOUT, null, {
      headers: {
        Authorization: token,
      },
    }),

  registration: (newUserData: UserDataRegistrationType) =>
    instanceLogin.post(RequestLogin.REGISTRATION, newUserData),
}
