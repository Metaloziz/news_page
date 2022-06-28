import { instanceLogin } from 'api/instance'
import { RequestLogin } from 'enums/enums'
import { NewUserDataRegistrationType } from 'store/types/new_user_data_registration_type'
import { UserDataType } from 'store/types/user_data_type'

export const loginRequests = {
  login: (userData: UserDataType) => instanceLogin.post(RequestLogin.LOGIN, userData),

  logout: (token: string) =>
    instanceLogin.post(RequestLogin.LOGOUT, null, {
      headers: {
        Authorization: token,
      },
    }),

  registration: (newUserData: NewUserDataRegistrationType) =>
    instanceLogin.post(RequestLogin.REGISTRATION, newUserData),
}
